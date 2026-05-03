"use client"
import UpdateUserModal from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData?.data?.user;
    return (
        <div>
            <div className="card max-w-96 mx-auto bg-base-100 card-xl shadow-sm rounded-3xl mt-10">
                <div className="card-body">
                    <div className="avatar">
                        <div className="w-24 rounded mx-auto">
                            <Image referrerPolicy="no-referrer" width={10} height={10} alt="user" src={user?.image} />
                        </div>
                    </div>

                    <div className="text-center space-y-2">
                        <h2 className="text-2xl font-bold">{user?.name}</h2>
                        <p className="text-mauve-600">{user?.email}</p>
                        <UpdateUserModal></UpdateUserModal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;