import WelcomeBanner from "../../assets/WelcomeBanner.png";
import ForkKnife from "../../assets/ForkKnife.png";
import Truck from "../../assets/Truck.png";
import { Link } from "react-router-dom";
import * as motion from "motion/react-client";
import Footer from "../../Components/Footer";

const Welcome = () => {
  const features = [
    { icon: ForkKnife, text: "Freshly Prepared", colSpan: "" },
    { icon: ForkKnife, text: "Support Local Business", colSpan: "" },
    { icon: Truck, text: "Fast & Reliable Delivery", colSpan: "sm:col-span-2" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="Welcome inter">
      <div>
        <div className="flex h-screen">
          <div className="hidden lg:flex lg:w-1/2 overflow-hidden">
            <motion.img
              src={WelcomeBanner}
              alt="Welcome"
              className="w-full h-full object-cover"
              initial="hidden"
              animate="visible"
              variants={imageVariants}
            />
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              className="w-full max-w-3xl mx-auto sm:py-6 px-6 sm:px-10 flex flex-col justify-center min-h-screen"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center justify-between mb-auto py-4"
                variants={itemVariants}
              >
                <h1 className="island-moments text-[#FF7A18] text-4xl">
                  Chuks Kitchen
                </h1>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/signin"
                    className="text-[#1E88E5] border-2 border-[#1E88E5] rounded-lg w-30 h-12 flex items-center justify-center text-center transition-colors hover:bg-[#1E88E5] hover:text-white duration-300"
                  >
                    Sign In
                  </Link>
                </motion.div>
              </motion.div>

              <div className="py-8">
                <motion.div className="space-y-2" variants={itemVariants}>
                  <h1 className="font-bold text-3xl leading-10.5">
                    Your Authentic Taste of Nigeria
                  </h1>
                  <p className="text-sm leading-6">
                    Experience homemade flavors delivered fresh to your desk or
                    home. We bring the rich culinary heritage of Nigeria right
                    to your doorstep.
                  </p>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8"
                  variants={containerVariants}
                >
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-center gap-2 font-semibold bg-[#F3F4F6] sm:bg-transparent p-3 sm:p-0 rounded-lg ${feature.colSpan}`}
                      variants={featureVariants}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img src={feature.icon} alt={feature.text} />
                      <p className="text-sm">{feature.text}</p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="flex flex-col space-y-6 mt-8"
                  variants={itemVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link className="text-sm bg-[#FF7A18] w-full rounded-lg h-15 flex items-center justify-center text-center text-white font-semibold hover:bg-[#FF8C3A] transition-all duration-300">
                      Start Your Order
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link className="text-sm border-2 border-[#1E88E5] w-full rounded-lg h-15 flex items-center justify-center text-center text-[#1E88E5] font-semibold hover:bg-[#1E88E5] hover:text-white transition-all duration-300">
                      Learn More About Us
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                className="mt-auto hidden md:block"
                variants={itemVariants}
              >
                <div className="border border-t-2 border-[#F3F4F6]"></div>
                <div className="flex items-center justify-center gap-4 mt-4 text-xs sm:text-sm py-4">
                  <p>© {currentYear} Chuks Kitchen.</p>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link className="text-[#64B5F6] hover:underline transition-all duration-200">
                      Privacy Policy
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link className="text-[#64B5F6] hover:underline transition-all duration-200">
                      Terms of Service
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Welcome;
