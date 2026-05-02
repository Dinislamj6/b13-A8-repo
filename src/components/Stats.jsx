"use client";
import { motion } from "framer-motion";
import React from 'react';

const Stats = () => {
    return (
        <div>
            <section className="bg-base-200 py-16 mt-10">
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-4xl font-bold text-center mb-12">
                    Our Achievements
                </motion.h2>
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-xl bg-base-100 shadow-md">
                        <h3 className="text-4xl font-bold text-blue-600">10K+</h3>
                        <p className="text-gray-500 mt-2">Students</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-xl bg-base-100 shadow-md">
                        <h3 className="text-4xl font-bold text-blue-600">500+</h3>
                        <p className="text-gray-500 mt-2">Courses</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-xl bg-base-100 shadow-md">
                        <h3 className="text-4xl font-bold text-blue-600">50+</h3>
                        <p className="text-gray-500 mt-2">Instructors</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-xl bg-base-100 shadow-md">
                        <h3 className="text-4xl font-bold text-blue-600">95%</h3>
                        <p className="text-gray-500 mt-2">Success Rate</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Stats;