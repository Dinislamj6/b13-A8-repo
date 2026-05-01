import CourseCard from "./CourseCard";


const TopCourses = async() => {
    const res = await fetch("https://b13-a8-repo.vercel.app/data.json")
    const data = await res.json();
    const topCourses = data.slice(0,3)
    console.log(topCourses, "Data");
    return (
        <div>
            <h2 className="text-2xl font-bold mt-5">Popular Courses 🔥</h2>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                {
                    topCourses.map(Course => <CourseCard Course={Course} key={Course.id}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default TopCourses;