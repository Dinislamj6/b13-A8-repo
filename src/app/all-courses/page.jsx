"use client"
import CourseCard from "@/components/CourseCard";
import SearchCourse from "@/components/SearchCourse";
import { useEffect, useState } from "react";

const AllCoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://b13-a8-repo.vercel.app/data.json")
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    const filteredCourses = courses.filter(course => 
        course?.title?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1 className="text-3xl font-bold m-8 text-center">All Courses</h1>
            <div className="flex justify-center my-5">
                <SearchCourse setSearch={setSearch}></SearchCourse>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                filteredCourses.map(Course => <CourseCard Course={Course} key={Course.id}></CourseCard>)
               }
            </div>
        </div>
    );
};

export default AllCoursesPage;