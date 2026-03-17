import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Button from "./Button";

function Product({ val }) {
  const { title, para, live, addOn, bgColor, video } = val;
  const [isHovered, setIsHovered] = useState(false);

  // Setup Framer Motion values to track the X and Y coordinates
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Wrap those coordinates in a "Spring" to give them realistic physics (momentum and friction)
  const springConfig = { stiffness: 150, damping: 15, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // The function that calculates where the mouse is whenever it moves inside the div
  const handleMouseMove = (e) => {
    // Get the dimensions and position of the current row
    const rect = e.currentTarget.getBoundingClientRect();

    // Calculate how far the mouse is from the exact center of the row
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // Set the motion values. Dividing by 4 "dampens" the movement
    // so the video doesn't fly completely off the screen!
    x.set(mouseX / 4);
    y.set(mouseY / 4);
  };

  // Reset everything when the mouse leaves the row
  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smoothly snap the video back to the absolute center
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="w-full py-12 md:py-20 transition-colors duration-500 ease-in-out relative"
      style={{ backgroundColor: isHovered ? bgColor : "transparent" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove} // Listen for mouse movement!
    >
      <div className="max-w-5xl mx-auto px-6 md:px-0 flex flex-col md:flex-row justify-between items-center relative z-10 pointer-events-none md:pointer-events-auto">
        <h1 className="capitalize text-4xl md:text-5xl font-semibold text-white mb-6 md:mb-0 w-full md:w-1/3 pointer-events-none">
          {title}
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ ease: "circOut", duration: 0.4 }}
          style={{
            x: springX, // Inject the spring physics into the X axis
            y: springY, // Inject the spring physics into the Y axis
          }}
          className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-88 h-56 rounded-xl overflow-hidden shadow-2xl pointer-events-none z-0"
        >
          {isHovered && (
            <video
              src={video}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>

        <div className="w-full md:w-1/3 flex flex-col items-start md:items-end md:text-right pointer-events-auto">
          <p className="text-sm md:text-base leading-6 mb-6 text-gray-200 pointer-events-none">
            {para}
          </p>
          <div className="flex items-center gap-4">
            {live && <Button title="Live website" />}
            {addOn && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
