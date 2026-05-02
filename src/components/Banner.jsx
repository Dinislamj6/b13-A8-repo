"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import bannerImg from "../assets/banner.jpg";

const Banner = () => {
    return (
        <div className="flex max-w-7xl mx-auto gap-4 md:flex-row flex-col items-center text-center mt-10">
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-5">
                <h2 className="font-bold text-6xl"> Master New Skills <br /> Online with Expert <br /> Mentors</h2>
                <p>Access hundreds of quality courses from industry leaders, start your
                    learning journey today.</p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary">
                    Explore Courses
                </motion.button>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.6 }}>
                <Image src={bannerImg} alt="banner" width={600} height={600} />
            </motion.div>
        </div>
    );
};

export default Banner;