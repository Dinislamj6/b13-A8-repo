"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const instructors = [
    {
        name: "Jhankar Mahbub",
        role: "Full Stack Developer",
        image: "https://i.ibb.co.com/V4hm5MS/images.jpg",
    },
    {
        name: "Sayttom Das",
        role: "UI/UX Designer",
        image: "https://i.ibb.co.com/whvSfzs9/images-1.jpg",
    },
    {
        name: "Dr. Andrew Ng",
        role: "Data Scientist",
        image: "https://i.ibb.co.com/mYH5Rvm/Aurum-Speakers-Bureau-Andrew-Ng.webp",
    },
    {
        name: "Alexis Ahmed",
        role: "Cyber Security Expert",
        image: "https://i.ibb.co.com/pr30Vmdp/1680675101057.jpg",
    },
];

const TopInstructor = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-6 py-16">
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-4xl font-bold text-center mb-12">
                    Top Instructors</motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {instructors.map((inst, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-base-100 shadow-md rounded-xl p-6 text-center space-y-4">
                            <div className="flex justify-center">
                                <Image
                                    src={inst.image}
                                    alt={inst.name}
                                    width={80}
                                    height={80}
                                    className="rounded-full" />
                            </div>
                            <h3 className="text-xl font-semibold">{inst.name}</h3>
                            <p className="text-gray-500 text-sm">{inst.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopInstructor;