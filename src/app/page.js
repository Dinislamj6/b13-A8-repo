import Banner from "@/components/Banner";
import Stats from "@/components/Stats";
import TopCourses from "@/components/TopCourses";
import WhyChoice from "@/components/WhyChoice";
import WhyChooseUs from "@/components/WhyChoice";


export default function Home() {
  return (
    <div>
        <Banner></Banner>
        <TopCourses></TopCourses>
         <WhyChoice></WhyChoice>
         <Stats></Stats>
    </div>
  );
}
