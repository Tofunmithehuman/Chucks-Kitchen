import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import * as motion from "motion/react-client";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNavigation = (path) => {
    setIsOpen(false);
    setTimeout(() => {
      navigate(path);
    }, 1000);
  };

  return (
    <div className="Navigation">
      <motion.header
        className="relative bg-white"
        style={{ zIndex: 50 }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 py-3 md:p-5">
          <div className="inter flex items-center justify-between">
            <nav>
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to="/">
                  <h1 className="island-moments text-[#FF7A18] text-3xl">
                    Chucks Kitchen
                  </h1>
                </Link>
              </motion.div>
            </nav>

            <nav className="hidden md:block">
              <ul className="flex items-center space-x-10 text-gray-800">
                {desktopLinks.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * (i + 1), duration: 0.4 }}
                  >
                    <motion.div
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={item.path}
                        className="hover:text-[#FF7A18] transition-colors duration-200 font-medium text-sm"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <nav className="hidden md:block">
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/signin"
                  className="bg-[#FF7A18] rounded-lg text-white px-6 py-2 font-semibold hover:bg-[#FF8C3A] transition-all duration-300 cursor-pointer inline-block text-sm"
                >
                  Login
                </Link>
              </motion.div>
            </nav>

            <nav className="block md:hidden relative" style={{ zIndex: 51 }}>
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 text-gray-800"
                whileTap={{ scale: 0.9 }}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </motion.button>
            </nav>
          </div>
        </div>
      </motion.header>

      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="fixed top-0 right-0 bottom-0 w-full md:hidden"
        style={{
          zIndex: 40,
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        <motion.div
          variants={sidebarVariants}
          className="absolute top-0 right-0 bottom-0 w-full bg-white shadow-2xl"
        />

        <motion.nav
          variants={navVariants}
          className="relative flex flex-col space-y-2 p-8 pt-28"
        >

          {menuItems.map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              <motion.button
                onClick={() => handleNavigation(item.path)}
                className="text-gray-800 text-xl mt-3 block hover:text-[#FF7A18] transition-colors duration-200 w-full text-left font-medium border-b border-gray-100 pb-4"
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.97 }}
              >
                {item.label}
              </motion.button>
            </motion.div>
          ))}

          <motion.div variants={itemVariants} className="pt-6 space-y-3 mt-2">
            <motion.button
              onClick={() => handleNavigation("/signin")}
              className="bg-[#FF7A18] hover:bg-[#FF8C3A] text-center rounded-lg w-full text-white py-3 px-6 font-semibold inline-block transition-colors text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Login
            </motion.button>
          </motion.div>
        </motion.nav>
      </motion.div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 md:hidden"
          style={{ zIndex: 39 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

const desktopLinks = [
  { label: "Home", path: "/" },
  { label: "Explore", path: "/explore" },
  { label: "My Orders", path: "/orders" },
  { label: "Account", path: "/account" },
];

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Explore", path: "/explore" },
  { label: "My Orders", path: "/orders" },
  { label: "Account", path: "/account" },
];

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 30px) 30px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at calc(100% - 30px) 30px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const navVariants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};

export default Navigation;
