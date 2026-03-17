import Stripe from "./Stripe";
import { FaSpotify, FaDiscord, FaFigma, FaStripeS } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

function Stripes() {
  const data = [
    {
      brand: "Spotify",
      icon: <FaSpotify color="#1DB954" size={32} />,
      randomNumber: 34,
    },
    {
      brand: "Discord",
      icon: <FaDiscord color="#5865F2" size={32} />,
      randomNumber: 89,
    },
    {
      brand: "Figma",
      icon: <FaFigma color="#F24E1E" size={32} />,
      randomNumber: 52,
    },
    {
      brand: "Vercel",
      icon: <SiVercel color="#FFFFFF" size={28} />, // Vercel is usually white/black
      randomNumber: 11,
    },
    {
      brand: "Stripe",
      icon: <FaStripeS color="#6366F1" size={32} />, // Stripe Blurple
      randomNumber: 76,
    },
  ];

  return (
    <div className="w-full mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-y border-gray-600">
      {data.map((elem, idx) => (
        <Stripe key={idx} val={elem} />
      ))}
    </div>
  );
}

export default Stripes;
