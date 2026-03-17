import { motion } from "framer-motion";
import { PiArrowBendUpRightBold } from "react-icons/pi";

function Button({ title = "Get Started" }) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="flex items-center justify-between min-w-34 px-3 py-2 rounded-full bg-zinc-100 text-black cursor-pointer group"
    >
      <div className="relative h-5 overflow-hidden w-full">
        <motion.div
          variants={{
            initial: { y: 0 },
            // Slides the entire track up by exactly 100% of its height
            hover: { y: "-50%" },
          }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="flex flex-col h-10"
        >
          <span className="h-5 flex items-center text-sm font-semibold tracking-wide">
            {title}
          </span>

          {/* Hover Text (Hidden below, slides up on hover) */}
          <span className="h-5 flex items-center text-sm font-semibold tracking-wide">
            {title}
          </span>
        </motion.div>
      </div>

      <motion.div
        variants={{
          initial: { rotate: 0, scale: 1 },
          hover: { rotate: 180, scale: 1.1 },
        }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
        className="ml-2 flex items-center justify-center"
      >
        <PiArrowBendUpRightBold size=".9rem" />
      </motion.div>
    </motion.div>
  );
}

export default Button;
