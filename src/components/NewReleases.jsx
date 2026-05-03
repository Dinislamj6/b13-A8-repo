import { FcRating } from "react-icons/fc";

const courses = [
    {
        id: 101,
        title: "TypeScript for Modern Devs",
        instructor: "Alex Johnson",
        duration: "6 hours",
        level: "Intermediate",
        rating: 4.8,
    },
    {
        id: 102,
        title: "Node.js Backend API Bootcamp",
        instructor: "Michael Brown",
        duration: "14 hours",
        level: "Advanced",
        rating: 4.7,
    },
    {
        id: 103,
        title: "MongoDB & Database Design",
        instructor: "Sarah Lee",
        duration: "9 hours",
        level: "Beginner",
        rating: 4.6,
    },
    {
        id: 104,
        title: "Framer Motion Basics",
        instructor: "David Smith",
        duration: "5 hours",
        level: "Intermediate",
        rating: 4.9,
    },
    {
        id: 105,
        title: "Python for Data Analysis",
        instructor: "Emma Watson",
        duration: "12 hours",
        level: "Beginner",
        rating: 4.7,
    },
    {
        id: 106,
        title: "Full Stack Next.js Project",
        instructor: "John Doe",
        duration: "18 hours",
        level: "Advanced",
        rating: 4.9,
    },
];

const NewReleases = () => {
    return (
        <div>
            <section className="max-w-6xl mx-auto px-6 py-12 ">
                <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">New Releases</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="border rounded-2xl shadow-md p-6 bg-white   transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:border-blue-500 cursor-pointer">
                            <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-600">
                                {course.level}
                            </span>
                            <h3 className="text-xl font-semibold mt-3">
                                {course.title}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                                Instructor: {course.instructor}
                            </p>
                            <p className="text-sm text-gray-500">
                                Duration: {course.duration}
                            </p>
                            <p className="text-xl mt-2 flex items-center gap-2  font-medium">
                                <FcRating></FcRating> {course.rating}
                            </p>
                            <button className="mt-4 w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                                View Course
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default NewReleases;