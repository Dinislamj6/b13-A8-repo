"use client"
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const CourseCard = ({ Course }) => {

    return (
        <div>
            {/* <div className="card bg-base-100  h-full  shadow-sm mt-5">
                <figure>
                    <Image className="object-cover h-50 w-full" src={Course.image} alt={Course.title} width={200} height={200}></Image>
                </figure>
                <div className="card-body space-y-3">
                    <h2 className="card-title font-bold text-lg flex justify-between items-center">
                        {Course.title}
                        <div className="badge badge-secondary"><FaStar className="text-yellow-400" /> {Course.rating}</div>
                    </h2>
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold text-xl">Instructor : {Course.instructor}</h2>
                        <Link href={`/all-courses/${Course.id}`}><button className="btn bg-purple-800 text-white rounded-md">Course Details</button></Link>
                    </div>
                </div>

            </div> */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="card bg-base-100 h-full shadow-sm mt-5"
                >
                    <figure className="overflow-hidden">
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                            <Image
                                className="object-cover h-50 w-full"
                                src={Course.image}
                                alt={Course.title}
                                width={200}
                                height={200}
                            />
                        </motion.div>
                    </figure>

                    <div className="card-body space-y-3">
                        <h2 className="card-title font-bold text-lg flex justify-between items-center">
                            {Course.title}
                            <div className="badge badge-secondary flex items-center gap-1">
                                <FaStar className="text-yellow-400" />
                                {Course.rating}
                            </div>
                        </h2>

                        <div className="flex justify-between items-center">
                            <h2 className="font-semibold text-sm md:text-base">
                                Instructor: {Course.instructor}
                            </h2>

                            <Link href={`/all-courses/${Course.id}`}>
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    className="btn bg-purple-800 text-white rounded-md"
                                >
                                    Course Details
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default CourseCard;