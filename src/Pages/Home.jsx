import { Link } from "react-router-dom";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import Background from "../assets/Background.png";
import BottomBackground from "../assets/BottomBackground.png";
import { Search } from "lucide-react";
import JollofDelights from "../assets/Jollof Delights.png";
import SwallowAndSoups from "../assets/Swallow & Soups.png";
import GrillsAndBBQ from "../assets/Grills & BBQ.png";
import SweetTreats from "../assets/Sweet Treats.png";
import SpicyTilapiaPepperSoup from "../assets/Spicy Tilapia Pepper Soup.png";
import JollofRiceAndFriedChicken from "../assets/Jollof Rice & Fried Chicken.png";
import EgusiSoupAndPoundedYam from "../assets/Egusi Soup & Pounded Yam.png";
import * as motion from "motion/react-client";

const Home = () => {
  const categories = [
    { name: "Jollof Delights", image: JollofDelights },
    { name: "Swallow & Soups", image: SwallowAndSoups },
    { name: "Grills & BBQ", image: GrillsAndBBQ },
    { name: "Sweet Treats", image: SweetTreats },
    { name: "Snacks & Puff Puff", image: JollofDelights },
    { name: "Drinks & Zobo", image: JollofDelights },
  ];

  const featuredItems = [
    {
      name: "Spicy Tilapia Pepper Soup",
      image: SpicyTilapiaPepperSoup,
      description:
        "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.",
      price: "₦3,500",
    },
    {
      name: "Jollof Rice & Fried Chicken",
      image: JollofDelights,
      description:
        "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: "₦2,800",
    },
    {
      name: "Jollof Rice & Fried Chicken",
      image: JollofDelights,
      description:
        "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: "₦2,800",
    },
    {
      name: "Jollof Rice & Fried Chicken",
      image: JollofDelights,
      description:
        "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: "₦2,800",
    },
    {
      name: "Jollof Rice & Fried Chicken",
      image: JollofRiceAndFriedChicken,
      description:
        "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: "₦3,800",
    },
    {
      name: "Egusi Soup & Pounded Yam",
      image: EgusiSoupAndPoundedYam,
      description:
        "Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.",
      price: "₦1,500",
    },
  ];

  return (
    <div className="Home">
      <Navigation />
      <div className="inter">
        <section
          className="relative w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Background})`, height: "90vh" }}
        >
          <div className="absolute inset-0 bg-black/60 z-10" />

          <div className="absolute inset-0 z-20 flex items-center px-6 md:px-20 lg:px-30">
            <div className="text-white max-w-4xl">
              <motion.h1
                className="text-4xl leading-11 sm:leading-20 sm:text-7xl font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                The Heart of Nigerian Home Cooking
              </motion.h1>

              <motion.p
                className="text-lg sm:text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              >
                Handcrafted with passion, delivered with care.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link className="inline-block bg-[#FF7A18] rounded-lg text-white px-8 py-3 sm:px-10 sm:py-4 font-semibold text-md sm:text-xl hover:bg-[#FF8C3A] transition-all duration-300">
                  Discover what's new
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 translate-y-1/2 left-0 right-0 z-30 px-6 md:px-20 lg:px-30">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center bg-white rounded shadow-xl px-5 py-4 gap-3">
                <Search className="text-gray-400" />
                <input
                  type="text"
                  placeholder="What are you craving for today?"
                  className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-base bg-transparent"
                />
              </div>
            </motion.form>
          </div>
        </section>

        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h1
              className="text-center font-semibold text-2xl py-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Popular Categories
            </motion.h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  className="bg-white rounded-xl overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full object-cover"
                  />
                  <h1 className="py-8 text-center font-semibold">
                    {category.name}
                  </h1>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h1
              className="text-center font-semibold text-2xl py-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Chef's Specials
            </motion.h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full object-cover"
                  />
                  <div className="p-4">
                    <h1 className="font-semibold mb-2">{item.name}</h1>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>

                  <div className="pt-4 pb-8 px-4 text-sm flex justify-between items-center">
                    <h1 className="text-[#FF7A18] font-semibold text-base">
                      {item.price}
                    </h1>
                    <motion.button
                      className="bg-[#FF7A18] rounded-lg text-white px-6 py-2 font-semibold hover:bg-[#FF8C3A] transition-all duration-300 cursor-pointer inline-block text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Add to cart
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="relative w-full h-152 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${BottomBackground})` }}
        >
          <div className="absolute inset-0 bg-black/60 z-10" />

          <div className="relative z-20 flex flex-col justify-center h-full text-white px-6 md:px-20 lg:px-30">
            <motion.h1
              className="text-3xl sm:text-5xl font-bold mb-4 max-w-2xl"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Introducing Our New Menu Additions!
            </motion.h1>

            <motion.p
              className="text-base sm:text-xl max-w-2xl mb-8 text-white/80"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            >
              Explore exciting new dishes, crafted with the freshest ingredients
              and authentic Nigerian flavors. Limited time offer!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link className="inline-block bg-[#FF7A18] rounded-lg text-white px-8 py-3 sm:px-10 sm:py-4 font-semibold text-md sm:text-xl hover:bg-[#FF8C3A] transition-all duration-300">
                Discover what's new
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
