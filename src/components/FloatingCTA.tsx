import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

interface Props {
  onClick: () => void;
  label: string;
}

const FloatingCTA = ({ onClick, label }: Props) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`fixed bottom-6 right-6 z-40 btn-lime px-5 py-3 text-sm transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      {label}
      <ArrowRight className="h-4 w-4" />
    </button>
  );
};

export default FloatingCTA;
