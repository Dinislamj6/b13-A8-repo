

const CourseDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("https://b13-a8-repo.vercel.app/data.json")
    const courses = await res.json();
    const course  = courses.find(c => c.id == id) 
    console.log(course, "if id");

    return (
        <div>
            courses details
            <h2>{course.title}</h2>
        </div>
    );
};

export default CourseDetailsPage;