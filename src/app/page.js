import Banner from "@/components/Banner";
import LearningTop from "@/components/LearningTop";
import NewReleases from "@/components/NewReleases";
import Stats from "@/components/Stats";
import TopCourses from "@/components/TopCourses";
import TopInstructor from "@/components/TopInstructor";
import WhyChoice from "@/components/WhyChoice";



export default function Home() {
  return (
    <div>
        <Banner></Banner>
        <TopCourses></TopCourses>
         <WhyChoice></WhyChoice>
         <Stats></Stats>
         <LearningTop></LearningTop>
         <TopInstructor></TopInstructor>
         <NewReleases></NewReleases>
    </div>
  );
}
