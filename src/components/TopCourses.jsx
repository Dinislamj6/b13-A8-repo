import CourseCard from "./CourseCard";


const TopCourses = async() => {
    const res = await fetch("https://b13-a8-repo.vercel.app/data.json")
    const data = await res.json();
    const topCourses = data.slice(0,3)
    console.log(topCourses, "Data");
    return (
        <div>
            <h2 className="text-2xl font-bold mt-5">Popular Courses 🔥</h2>

            <div>
                {
                    topCourses.map(topCourse => <CourseCard topCourse={topCourse} key={topCourse.id}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default TopCourses;