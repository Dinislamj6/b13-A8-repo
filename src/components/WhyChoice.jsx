"use client";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaCertificate, FaClock, FaHeadset, } from "react-icons/fa";

const WhyChoice = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-4xl font-bold text-center mb-12">  Why Choose Us
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-xl shadow-md bg-base-100 text-center space-y-3">
                    <FaChalkboardTeacher className="text-3xl text-blue-600 mx-auto" />
                    <h3 className="text-xl font-semibold">Expert Instructors</h3>
                    <p className="text-gray-500 text-sm">
                        Learn from industry professionals with real-world experience.
                    </p>
                </motion.div>
                <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-xl shadow-md bg-base-100 text-center space-y-3">
                    <FaCertificate className="text-3xl text-blue-600 mx-auto" />
                    <h3 className="text-xl font-semibold">Certificate Included</h3>
                    <p className="text-gray-500 text-sm">
                        Get verified certificates after completing courses.
                    </p>
                </motion.div>
                <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-xl shadow-md bg-base-100 text-center space-y-3">
                    <FaClock className="text-3xl text-blue-600 mx-auto" />
                    <h3 className="text-xl font-semibold">Lifetime Access</h3>
                    <p className="text-gray-500 text-sm">
                        Learn anytime, anywhere with lifetime course access.
                    </p>
                </motion.div>
                <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-xl shadow-md bg-base-100 text-center space-y-3">
                    <FaHeadset className="text-3xl text-blue-600 mx-auto" />
                    <h3 className="text-xl font-semibold">24/7 Support</h3>
                    <p className="text-gray-500 text-sm">
                        Get help whenever you need it from our support team.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChoice;