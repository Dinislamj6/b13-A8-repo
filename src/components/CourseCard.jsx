import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const CourseCard = ({ Course }) => {

    return (
        <div>
            <div className="card bg-base-100  h-full  shadow-sm mt-5">
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

            </div>
        </div>
    );
};

export default CourseCard;