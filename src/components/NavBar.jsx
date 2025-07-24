import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { IoSunnyOutline, IoClose } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
  };

  const overlayVariants = {
    closed: { opacity: 0, transition: { duration: 0.2 } },
    open: { opacity: 1, transition: { duration: 0.2 } },
  };

  const menuItemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent pointer-events-none">
        <div
          className={`transition-all duration-300 bg-gray-200 shadow
            ${
              isScrolled
                ? "rounded-none w-full mx-0 mt-0 py-3"
                : "rounded-full max-w-6xl mx-auto mt-4"
            }
            flex justify-between items-center p-1 pointer-events-auto`}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
            <p className="text-sm font-medium text-gray-800">Karina Ghaisani</p>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-4 px-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex justify-center items-center gap-3">
            <button className="rounded-full bg-black p-1 hover:bg-gray-800 transition-colors">
              <IoSunnyOutline color="white" size={28} />
            </button>
            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="flex items-center bg-black rounded-full overflow-hidden h-9 hover:bg-gray-800 transition-colors md:hidden"
            >
              <span className="text-white text-sm px-4">Menu</span>
              <span className="bg-amber-400 h-full aspect-square flex items-center justify-center rounded-full">
                <HiOutlineMenuAlt3 size={24} className="text-black" />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer supaya konten tidak ketutupan navbar */}
      <div className={isScrolled ? "h-14" : "h-20"}></div>

      {/* Overlay & Sliding Menu (Mobile Only) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 overflow-hidden md:hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Menu Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Karina Ghaisani
                  </h3>
                  <p className="text-sm text-gray-500">Web Developer</p>
                </div>
              </div>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <IoClose size={24} className="text-gray-600" />
              </button>
            </div>
            {/* Menu Items */}
            <div className="p-6">
              <nav className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 400,
                      damping: 40,
                    }}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              {/* Theme Toggle in Menu */}
              <motion.div
                className="mt-8 pt-6 border-t border-gray-100"
                variants={menuItemVariants}
                initial="closed"
                animate="open"
                transition={{
                  delay: menuItems.length * 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 40,
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Dark Mode</span>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <IoSunnyOutline size={20} className="text-gray-600" />
                  </button>
                </div>
              </motion.div>
              {/* Social Links */}
              <motion.div
                className="mt-6"
                variants={menuItemVariants}
                initial="closed"
                animate="open"
                transition={{
                  delay: (menuItems.length + 1) * 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 40,
                }}
              >
                <p className="text-sm text-gray-500 mb-3">Follow me</p>
                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <span className="text-sm font-semibold">in</span>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-900 transition-colors">
                    <span className="text-sm font-semibold">gh</span>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center hover:bg-pink-600 transition-colors">
                    <span className="text-sm font-semibold">ig</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
