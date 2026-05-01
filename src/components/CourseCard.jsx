import Image from "next/image";
import { FaStar } from "react-icons/fa";

const CourseCard = ({ topCourse }) => {

    return (
        <div>
            <div className="card bg-base-100  h-full  shadow-sm mt-5">
                <figure>
                    <Image className="w-full h-full object-cover" src={topCourse.image} alt={topCourse.title} width={200} height={200}></Image>
                </figure>
                <div className="card-body space-y-3">
                    <h2 className="card-title font-bold text-lg flex justify-between items-center">
                        {topCourse.title}
                        <div className="badge badge-secondary"><FaStar className="text-yellow-400" /> {topCourse.rating}</div>
                    </h2>
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold text-xl">Instructor : {topCourse.instructor}</h2>
                        <button className="btn bg-purple-800 text-white rounded-md">Course Details</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CourseCard;