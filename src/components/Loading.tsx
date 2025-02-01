import { motion } from "framer-motion";

function Loading() {
  return (
    <div className="flex justify-center items-center bg-green-400 w-screen h-screen">
      <motion.div
        className="border-4 border-white border-t-transparent rounded-full w-16 h-16"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
}

export default Loading;
