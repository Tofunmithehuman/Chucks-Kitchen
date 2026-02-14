import WelcomeBanner from "../assets/WelcomeBanner.png";
import mail from "../assets/mail.svg";
import lock from "../assets/lock.svg";
import visibility from "../assets/visibility.svg";
import visibilityOff from "../assets/visibility_off.svg";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
import * as motion from "motion/react-client";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const formContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const formItemVariants = {
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

  const buttonVariants = {
    hover: {
      scale: 1.02,
      y: -2,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <div>
      <div>
        <div className="flex h-screen bg-white md:bg-[#F3F4F6]">
          <div className="hidden lg:flex lg:w-1/2 overflow-hidden relative">
            <motion.img
              src={WelcomeBanner}
              alt="Welcome"
              className="w-full h-full object-cover"
              initial="hidden"
              animate="visible"
              variants={imageVariants}
            />
            <motion.div
              className="absolute inset-0 bg-[#FF7A18B2]/90 flex flex-col items-center justify-center px-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h1
                className="island-moments font-bold text-white text-5xl md:text-6xl lg:text-7xl mb-4 text-center"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                Chuks Kitchen
              </motion.h1>
              <motion.p
                className="jost text-white font-medium text-lg md:text-xl lg:text-2xl text-center max-w-lg leading-relaxed"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                Your journey to delicious, authentic Nigerian meals starts here.
                Sign up or log in to order your favorites today!
              </motion.p>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              className="p-6 sm:p-8 w-full mx-auto"
              initial="hidden"
              animate="visible"
              variants={formContainerVariants}
            >
              <motion.div className="mb-6" variants={formItemVariants}>
                <motion.h1
                  className="island-moments text-[#FF7A18] text-4xl mb-1 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  Chuks Kitchen
                </motion.h1>
                <motion.p
                  className="inter font-medium text-2xl text-center"
                  variants={formItemVariants}
                >
                  Login your Account
                </motion.p>
              </motion.div>

              <motion.form
                className="inter max-w-md mx-auto"
                variants={formContainerVariants}
              >
                <div>
                  <motion.div variants={formItemVariants}>
                    <label className="text-[#3B4758] text-xs font-medium">
                      Email or phone number
                    </label>
                    <motion.div
                      className="border-2 border-[#BDBDBD] rounded-md flex items-center mt-1"
                      whileFocus={{ borderColor: "#FF7A18" }}
                      whileHover={{
                        borderColor: "#FF7A18",
                        transition: { duration: 0.2 },
                      }}
                    >
                      <img src={mail} alt="mail" className="ms-4" />
                      <input
                        type="email"
                        placeholder="name@gmail.com"
                        className="outline-none border-none focus:outline-none focus:border-none h-12 ml-4 w-full text-[#3B4758] text-base"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div className="mt-4" variants={formItemVariants}>
                    <label className="text-[#3B4758] text-xs font-medium">
                      Password
                    </label>
                    <motion.div
                      className="border-2 border-[#BDBDBD] rounded-md flex items-center mt-1"
                      whileFocus={{ borderColor: "#FF7A18" }}
                      whileHover={{
                        borderColor: "#FF7A18",
                        transition: { duration: 0.2 },
                      }}
                    >
                      <img src={lock} alt="lock" className="ms-4" />
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="******"
                        className="outline-none border-none focus:outline-none focus:border-none h-12 ml-4 w-full text-[#3B4758]"
                      />
                      <motion.img
                        src={showPassword ? visibility : visibilityOff}
                        alt="visibility"
                        className="mx-4 cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={togglePasswordVisibility}
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="my-2 text-right"
                    variants={formItemVariants}
                  >
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Link className="text-xs text-[#1E88E5] hover:underline">
                        Forgot Password?
                      </Link>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="text-center"
                    variants={formContainerVariants}
                  >
                    <motion.button
                      className="text-sm bg-[#FF7A18] w-full rounded-lg h-15 text-white font-semibold hover:bg-[#FF8C3A] transition-all duration-300 cursor-pointer"
                      variants={formItemVariants}
                      whileHover="hover"
                      whileTap="tap"
                      animate={{
                        boxShadow: [
                          "0px 4px 6px rgba(0,0,0,0.1)",
                          "0px 6px 12px rgba(255,122,24,0.3)",
                          "0px 4px 6px rgba(0,0,0,0.1)",
                        ],
                      }}
                      transition={{
                        boxShadow: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      Continue
                    </motion.button>

                    <div className="flex items-center justify-between gap-2">
                      <div className="border border-t border-[#EEF0F4] w-full"></div>
                      <motion.p
                        className="text-xs my-4 w-full whitespace-nowrap"
                        variants={formItemVariants}
                      >
                        Or continue with
                      </motion.p>
                      <div className="border border-t border-[#EEF0F4] w-full"></div>
                    </div>

                    <motion.button
                      className="text-sm mb-4 bg-white border border-[#BDBDBD] w-full rounded-lg h-15 text-white font-semibold hover:bg-gray-50 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                      variants={formItemVariants}
                      whileHover={{
                        scale: 1.02,
                        y: -2,
                        borderColor: "#1E88E5",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <img src={google} alt="google" />
                      <p className="text-[#3B4758]">Continue with Google</p>
                    </motion.button>

                    <motion.button
                      className="text-sm mb-8 bg-white border border-[#BDBDBD] w-full rounded-lg h-15 text-white font-semibold hover:bg-gray-50 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                      variants={formItemVariants}
                      whileHover={{
                        scale: 1.02,
                        y: -2,
                        borderColor: "#1877F2",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <img src={facebook} alt="facebook" />
                      <p className="text-[#3B4758]">Continue with Facebook</p>
                    </motion.button>

                    <motion.p className="text-xs" variants={formItemVariants}>
                      Don't have an account?
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="inline-block"
                      >
                        <Link className="ms-1 text-[#1E88E5] hover:underline">
                          Create an account
                        </Link>
                      </motion.span>
                    </motion.p>
                  </motion.div>
                </div>
              </motion.form>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Signin;
