import { useEffect } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Banner() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const planeVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  };

  return (
    <div className="relative overflow-hidden min-h-[600px] md:min-h-[700px] w-full">
      {/* Background decoration */}
      <div className="absolute top-0 -right-[900px] w-full h-full pointer-events-none">
        <img
          src="/assets/Decore.png"
          alt="Background decoration"
          className="object-cover object-right-top opacity-70"
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Left content */}
          <div className="z-10 flex flex-col justify-center">
            <motion.h3
              className="text-[#DF6951] font-medium text-sm md:text-base uppercase tracking-wider mb-4"
              variants={itemVariants}
            >
              BEST DESTINATIONS AROUND THE WORLD
            </motion.h3>

            <motion.h1
              className="text-[#181E4B] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
              variants={itemVariants}
            >
              Travel,{" "}
              <span className="relative inline-block">
                enjoy
                <motion.div
                  className="absolute -bottom-1 left-0 w-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <img
                    src="/assets/Decore (1).png"
                    alt="Text underline"
                    width={180}
                    height={12}
                    className="w-full"
                  />
                </motion.div>
              </span>
              <br />
              and live a new
              <br />
              and full life
            </motion.h1>

            <motion.p
              className="text-[#5E6282] mb-8 max-w-md text-base md:text-lg"
              variants={itemVariants}
            >
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-6"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-[#F1A501] px-3">
                  <span className="mx-3">Find out more</span>
                </Button>
              </motion.div>

              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative"
                >
                  <motion.div
                    className="absolute -inset-2 rounded-full bg-[#DF6951]/20"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 0, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                    }}
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-[#DF6951] hover:bg-[#c85a44] border-none text-white h-12 w-12 shadow-lg shadow-[#DF6951]/20 z-10 relative"
                  >
                    <Play className="h-5 w-5" />
                  </Button>
                </motion.div>
                <span className="text-[#5E6282] font-medium">Play Demo</span>
              </div>
            </motion.div>
          </div>

          {/* Right content - Traveler image */}
          <motion.div
            className="relative flex items-center justify-center z-10 h-[400px] md:h-[500px] lg:h-[550px]"
            variants={imageVariants}
          >
            <motion.div
              className="relative w-full h-full"
              animate={floatAnimation}
            >
              <img
                src="/assets/Traveller 1.png"
                alt="Traveler with backpack"
                className="object-contain object-center"
              />
            </motion.div>

            {/* Airplane decorations */}
            <motion.div
              className="absolute top-1 left-5 z-20"
              variants={planeVariants}
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
                rotate: [0, 5, 0],
                transition: {
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                },
              }}
            >
              <img
                src="/assets/plane.png"
                alt="Airplane decoration"
                width={100}
                height={60}
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Banner;
