import Image from 'next/image';
import bannerImg from "../assets/banner.jpg"
const Banner = () => {
    return (
        <div className='flex max-w-7xl mx-auto gap-4 md:flex-row flex-col items-center text-center mt-10'>
            <div className='space-y-5'>
                <h2 className='font-bold text-6xl'>Master New Skills <br /> Online with Expert <br /> Mentors</h2>
                <p>Access hundreds of quality courses from industry leaders, start your learning journey today.</p>
                <button className='btn btn-primary'>Explore Courses</button>
            </div>
            {/* images */}
            <div>
                <Image src={bannerImg} alt='banner' width={600} height={600}></Image>
            </div>
        </div>
    );
};

export default Banner;