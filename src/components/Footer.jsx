"use client";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-gray-900 text-gray-300 mt-10"
    >
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
          <h2 className="text-xl font-semibold text-white mb-4">
            Contact Info
          </h2>
          <p>Email: dinislamj6@gmail.com</p>
          <p>Phone: +880 1841720514</p>
          <p>Address: Dhaka, Bangladesh</p>
        </motion.div>

        <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
          <h2 className="text-xl font-semibold text-white mb-4">
            Social Links
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="https://www.facebook.com/iftekher.din.islam.chowdhury" className="flex items-center gap-2 hover:text-white transition">
                <FaFacebook />
                Facebook
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center gap-2 hover:text-white transition">
                <FaTwitter />
                Twitter
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/dinislamdev/" className="flex items-center gap-2 hover:text-white transition">
                <FaLinkedin />
                LinkedIn
              </a>
            </li>

            <li>
              <a href="https://github.com/Dinislamj6" className="flex items-center gap-2 hover:text-white transition">
                <FaGithub />
                GitHub
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
          <h2 className="text-xl font-semibold text-white mb-4">Legal</h2>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-white transition" href="/terms">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="/privacy">
                Privacy Policy
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
          <h2 className="text-xl font-semibold text-white mb-4">
            Subscribe
          </h2>
          <p className="mb-3">Get latest updates</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md text-white outline-none"
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 px-4 py-2 rounded-r-md text-white hover:bg-blue-700 transition">
              Join
            </motion.button>
          </form>
        </motion.div>
      </div>
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Your Website. All rights reserved. | Made with ❤️ by Din Islam
      </div>
    </motion.footer>
  );
};

export default Footer;