"use client";
import { motion } from "framer-motion";
import React from 'react';

const LearningTop = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto px-6 py-16">

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-4xl font-bold text-center mb-12"
                >
                    Learning Tips
                </motion.h2>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* 1 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-xl bg-base-100 shadow-md space-y-3"
                    >
                        <h3 className="text-xl font-semibold text-blue-600">
                            Set a Daily Goal
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Learn at least 30–60 minutes daily to stay consistent.
                        </p>
                    </motion.div>

                    {/* 2 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-xl bg-base-100 shadow-md space-y-3"
                    >
                        <h3 className="text-xl font-semibold text-blue-600">
                            Practice Regularly
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Apply what you learn by building small real projects.
                        </p>
                    </motion.div>

                    {/* 3 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-xl bg-base-100 shadow-md space-y-3"
                    >
                        <h3 className="text-xl font-semibold text-blue-600">
                            Take Notes
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Write important points to improve memory and revision.
                        </p>
                    </motion.div>

                    {/* 4 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-xl bg-base-100 shadow-md space-y-3"
                    >
                        <h3 className="text-xl font-semibold text-blue-600">
                            Stay Consistent
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Consistency is more important than long study sessions.
                        </p>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default LearningTop;