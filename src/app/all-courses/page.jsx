import CourseCard from "@/components/CourseCard";


const AllCoursesPage = async() => {
    const res = await fetch("https://b13-a8-repo.vercel.app/data.json")
    const courses = await res.json();
    return (
        <div>
            <h1 className="text-2xl font-bold m-4 text-center">All Courses</h1> 

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               {
                courses.map(Course => <CourseCard Course={Course} key={Course.id}></CourseCard>)
               }
            </div>
        </div>
    );
};

export default AllCoursesPage;