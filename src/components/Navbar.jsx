"use client"
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import NavLink from "./Navlink";


const Navbar = () => {
    const { data } = authClient.useSession();
    const user = data?.user
    console.log(user);

    const handelLogOut = async () => {
        await authClient.signOut();

    }
    const imageSrc =
        user?.image && user.image.startsWith("http")
            ? user.image
            : "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg";


    return (
        <div className=" bg-base-100 shadow-sm">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink href={"/"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink href={"/all-courses"}>Courses</NavLink>
                            </li>
                            <li>
                                <NavLink href={"/profile"}>
                                    My Profile
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <a className="text-purple-500 text-2xl font-bold">SkillSphere</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        <li>
                            <NavLink href={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink href={"/all-courses"}>Courses</NavLink>
                        </li>
                        <li>
                            <NavLink href={"/profile"}>
                                My Profile
                            </NavLink>
                        </li>
                    </ul>

                </div>

                <div className="navbar-end gap-2">
                    {!user &&
                        <div className="space-x-3">
                            <Link href={"/signin"}><button className="btn rounded-lg">Login</button></Link>
                            <Link href={"/signup"}><button className="btn rounded-xl bg-blue-600 text-white">Register</button></Link>
                        </div>
                    }
                    {
                        user && <div className="flex gap-2 items-center">
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                                    {
                                        user.image && <Image referrerPolicy="no-referrer"
                                            width={10}
                                            height={10}
                                            alt="user"
                                            src={imageSrc}
                                        />
                                    }
                                </div>
                            </div>
                            <button onClick={handelLogOut} className="btn btn-sm btn-error rounded-full text-white">LogOut</button>
                        </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default Navbar;