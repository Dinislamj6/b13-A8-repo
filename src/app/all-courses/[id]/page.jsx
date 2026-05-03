import CourseCurriculum from "@/components/CourseCurriculum";
import Image from "next/image";
import { FcRating } from "react-icons/fc";


const CourseDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("https://b13-a8-repo.vercel.app/data.json")
    const courses = await res.json();
    const course = courses.find(c => c.id == id)
    console.log(course, "if id");

    return (
        <div className="max-w-4xl mx-auto px-6 py-10 min-h-screen">
            <div className="bg-base-100 shadow-xl rounded-xl p-6 space-y-4">
                <h1 className="text-3xl font-bold">{course.title}</h1>
                <Image
                    src={course.image}
                    alt={course.title}
                    width={800}
                    height={800}
                    className="rounded-lg w-full h-64 object-cover"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                    <p>
                        <span className="font-semibold text-black">Instructor:</span>   {course.instructor}
                    </p>
                    <p><span className="font-semibold text-black">Category:</span>{course.category}
                    </p>
                    <p><span className="font-semibold text-black">Duration:</span>{course.duration}
                    </p>
                    <p><span className="font-semibold text-black">Level:</span>
                        {course.level}</p>
                    <p className="flex items-center gap-1"><span className="font-semibold text-black">Rating:</span>
                      <FcRating /> {course.rating}</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mt-4">Description</h2>
                    <p className="text-gray-600 mt-2">{course.description}</p>
                </div>
                <div className="flex items-center gap-4 mt-4">
                    <p className="text-2xl font-bold text-green-600">
                        ${course.price}
                    </p>
                    <p className="line-through text-gray-400">
                        ${course.originalPrice}
                    </p>
                </div>
                <button className="btn btn-primary w-full mt-4">
                    Enroll Now
                </button>
            </div>
            <CourseCurriculum courseId={id}></CourseCurriculum>
        </div>
    );
};

export default CourseDetailsPage;