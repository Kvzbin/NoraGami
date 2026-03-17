import { useEffect } from "react";
import Product from "./Product";

const pData = [
  {
    title: "E-commerce Dashboard",
    para: "A responsive admin panel built with React and Recharts for tracking daily sales, user traffic, and inventory levels.",
    live: true,
    addOn: false,
    bgColor: "#4A00E0", // Vibrant Purple
    // Matrix raining code animation
    video: "/public/circle.mp4",
  },
  {
    title: "Weather Application",
    para: "A location-based weather app that fetches real-time data from a REST API to display current conditions and a 7-day forecast.",
    live: true,
    addOn: false,
    bgColor: "#00C9FF", // Bright Cyan
    // Hacker typing on keyboard animation
    video: "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.mp4",
  },
  {
    title: "Task Management Tool",
    para: "A drag-and-drop Kanban board application using local storage to save user tasks, columns, and customized workflows.",
    live: true,
    addOn: true,
    bgColor: "#FF007A", // Neon Pink
    // 3D grid/tech wireframe animation
    video: "https://media.giphy.com/media/3oKIPnAiaCRiqA4kHm/giphy.mp4",
  },
  {
    title: "Crypto Tracker",
    para: "A cryptocurrency tracking dashboard that connects to WebSockets to display live price updates and historical market charts.",
    live: false,
    addOn: true,
    bgColor: "#00E676", // Electric Green
    // Server room / data network animation
    video: "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.mp4",
  },
];
function Products() {
  useEffect(() => {
    pData.forEach((item) => {
      // This forces the browser to download the GIF immediately and store it in the cache
      const img = new Image();
      img.src = item.video;
    });
  }, []);

  return (
    <div className="mt-32 w-full pb-20 border-gray-700">
      {pData.map((elem, idx) => (
        <Product val={elem} key={idx} />
      ))}
    </div>
  );
}

export default Products;
