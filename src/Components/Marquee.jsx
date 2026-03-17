import { motion } from "framer-motion";

function Marquee({ items, direction }) {
  return (
    <div className="flex w-full pb-2 overflow-hidden">
      <motion.div
        // 1. Set the starting position based on direction
        initial={{ x: direction === "left" ? "0" : "-50%" }}
        // 2. Set the ending position based on direction
        animate={{ x: direction === "left" ? "-50%" : "0" }}
        // 3. Control the speed and make it loop infinitely
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
        className="flex shrink-0 gap-16 min-w-full"
      >
        {/* Original List */}
        {items.map((val, idx) => (
          <div
            key={`orig-${idx}`}
            className="flex items-center justify-center shrink-0"
          >
            {val.icon}
          </div>
        ))}

        {/* Duplicated List for seamless looping */}
        {items.map((val, idx) => (
          <div
            key={`dup-${idx}`}
            className="flex items-center justify-center shrink-0"
          >
            {val.icon}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
