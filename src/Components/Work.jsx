import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function Work() {
  const [images, setImages] = useState([
    {
      image:
        "https://images.unsplash.com/photo-1696247139933-bdbe04c9b4db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      top: "50%",
      left: "47%",
      isActive: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1773053525998-8cb667020fa7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
      top: "48%",
      left: "52%",
      isActive: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1773053525984-3857c1e0be44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D",
      top: "55%",
      left: "56%",
      isActive: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1770983438675-b188d9276ba0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D",
      top: "60%",
      left: "43%",
      isActive: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1772289239056-1b16259425b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D",
      top: "63%",
      left: "51%",
      isActive: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1773001576545-6c626f652ec5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjl8fHxlbnwwfHx8fHw%3D",
      top: "53%",
      left: "46%",
      isActive: false,
    },
  ]);

  // Track global scroll progress
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Convert scroll progress (0.0 to 1.0) into a clean percentage (0 to 100)
    const scrollPercent = Math.floor(latest * 100);

    let showIndexes = [];
    if (scrollPercent > 2) showIndexes = [0];
    if (scrollPercent > 4) showIndexes = [0, 1];
    if (scrollPercent > 6) showIndexes = [0, 1, 2];
    if (scrollPercent > 8) showIndexes = [0, 1, 2, 3];
    if (scrollPercent > 10) showIndexes = [0, 1, 2, 3, 4];
    if (scrollPercent > 12) showIndexes = [0, 1, 2, 3, 4, 5];

    setImages((prev) =>
      prev.map((item, index) => ({
        ...item,
        isActive: showIndexes.includes(index),
      })),
    );
  });

  return (
    // Made parent h-[200vh] so there is actually room on the page to scroll down
    <div className="w-full h-[200vh] relative">
      <div className="sticky top-0 max-w-4xl mx-auto h-screen flex items-center justify-center text-center text-gray-400 overflow-hidden">
        <h1 className="text-[20vw] md:text-[13rem] font-medium select-none tracking-normal leading-none">
          iteration
        </h1>

        <div className="h-full w-full absolute top-0 pointer-events-none">
          {images.map((elem, idx) => (
            <motion.img
              key={idx}
              src={elem.image}
              alt={`Work showcase ${idx}`}
              style={{ top: elem.top, left: elem.left }}
              // Framer Motion automatically handles animating between these states
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: elem.isActive ? 1 : 0,
                scale: elem.isActive ? 1 : 0.5,
              }}
              transition={{ ease: "circOut", duration: 0.4 }}
              className="w-24 h-24 sm:w-36 sm:h-36 md:w-52 md:h-52 object-cover rounded-2xl absolute -translate-x-[50%] -translate-y-[50%]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
