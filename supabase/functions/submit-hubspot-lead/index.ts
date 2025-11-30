import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  phone?: string;
  cardType?: string;
  leadSource: string;
  formName: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  page_url?: string;
  page_title?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const leadData: LeadData = await req.json();
    console.log("Received lead data:", leadData);

    const HUBSPOT_ACCESS_TOKEN = Deno.env.get('HUBSPOT_ACCESS_TOKEN');
    
    if (!HUBSPOT_ACCESS_TOKEN) {
      console.error("HubSpot access token not configured");
      return new Response(
        JSON.stringify({ error: "HubSpot integration not configured" }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Map form data to HubSpot contact properties
    const hubspotProperties = {
      firstname: leadData.firstName,
      lastname: leadData.lastName,
      email: leadData.email,
      country: leadData.country,
      phone: leadData.phone || "",
      pagopay_card_type: leadData.cardType || "",
      pagopay_lead_source: leadData.leadSource,
      hs_lead_status: "NEW",
      lifecyclestage: "lead",
      // UTM parameters
      ...(leadData.utm_source && { utm_source: leadData.utm_source }),
      ...(leadData.utm_medium && { utm_medium: leadData.utm_medium }),
      ...(leadData.utm_campaign && { utm_campaign: leadData.utm_campaign }),
      ...(leadData.utm_term && { utm_term: leadData.utm_term }),
      ...(leadData.utm_content && { utm_content: leadData.utm_content }),
      // Page tracking
      ...(leadData.page_url && { recent_conversion_page: leadData.page_url }),
      ...(leadData.page_title && { recent_conversion_event_name: leadData.formName }),
    };

    console.log("Submitting to HubSpot:", hubspotProperties);

    // Create or update contact in HubSpot
    const hubspotResponse = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          properties: hubspotProperties,
        }),
      }
    );

    const responseData = await hubspotResponse.json();

    if (!hubspotResponse.ok) {
      console.error("HubSpot API error:", responseData);
      
      // If contact exists, try to update instead
      if (responseData.category === "CONFLICT") {
        console.log("Contact exists, attempting to update...");
        
        // Search for existing contact by email
        const searchResponse = await fetch(
          `https://api.hubapi.com/crm/v3/objects/contacts/search`,
          {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              filterGroups: [{
                filters: [{
                  propertyName: "email",
                  operator: "EQ",
                  value: leadData.email,
                }]
              }]
            }),
          }
        );

        const searchData = await searchResponse.json();
        
        if (searchData.results && searchData.results.length > 0) {
          const contactId = searchData.results[0].id;
          
          // Update existing contact
          const updateResponse = await fetch(
            `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
            {
              method: "PATCH",
              headers: {
                "Authorization": `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                properties: hubspotProperties,
              }),
            }
          );

          const updateData = await updateResponse.json();
          console.log("Contact updated:", updateData);

          return new Response(
            JSON.stringify({ success: true, data: updateData, action: "updated" }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
      }
      
      return new Response(
        JSON.stringify({ error: "Failed to submit to HubSpot", details: responseData }),
        { 
          status: hubspotResponse.status, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log("Contact created successfully:", responseData);

    // Optionally add contact to list "PagoPay Card Leads"
    // This requires the list ID - you'll need to get this from HubSpot
    // Uncomment and add list ID when available:
    /*
    const LIST_ID = "YOUR_LIST_ID";
    await fetch(
      `https://api.hubapi.com/contacts/v1/lists/${LIST_ID}/add`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vids: [responseData.id],
        }),
      }
    );
    */

    return new Response(
      JSON.stringify({ success: true, data: responseData, action: "created" }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error("Error processing request:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
