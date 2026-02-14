import { Link } from "react-router-dom";
import * as motion from "motion/react-client";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "My Order", path: "/orders" },
    { name: "Account", path: "/account" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { name: "Facebook", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "Instagram", url: "#" },
  ];

  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-[#60433a] text-white inter mt-16 md:mt-0">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <motion.h2
              className="island-moments text-[#FF7A18] text-4xl mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Chuks Kitchen
            </motion.h2>
            <p className="text-2xl jost leading-10 text-gray-200">
              Bringing the authentic flavors of Nigerian home cooking to your
              table, with passion and care.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-medium jost text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  whileHover={{ x: 5, color: "#FF7A18" }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className="poppins font-light text-sm text-gray-200 hover:text-[#FF7A18] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-medium jost text-lg mb-4">Contact Us</h3>
            <ul className="poppins space-y-3 text-sm font-light text-gray-200">
              <motion.li
                variants={linkVariants}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="tel:+2348012345678"
                  className="hover:text-[#FF7A18] transition-colors duration-200"
                >
                  +234 801 234 5678
                </a>
              </motion.li>
              <motion.li
                variants={linkVariants}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="mailto:hello@chukskitchen.com"
                  className="hover:text-[#FF7A18] transition-colors duration-200"
                >
                  hello@chukskitchen.com
                </a>
              </motion.li>
              <motion.li
                className="leading-6"
                variants={linkVariants}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                123 Taste Blvd, Lagos, Nigeria
              </motion.li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-medium jost text-lg mb-4">Follow Us</h3>
            <ul className="space-y-2">
              {socialLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  whileHover={{ x: 5, color: "#FF7A18" }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.url}
                    className="poppins font-light text-sm text-gray-200 hover:text-[#FF7A18] transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <div>
            <p className="poppins font-light jost text-xs text-gray-300">
              © {currentYear} Lift Media. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
