import { authClient } from "@/lib/auth-client";
import { BiUser } from "react-icons/bi";


const UpdateUserModal = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        await authClient.updateUser({
            image,
            name,
        })
    }
    return (
        <div>
            <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Update Your Profile</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl text-blue-400"><BiUser></BiUser>Update User</h3>

                    <div className="mt-5">
                        <form  onSubmit={onSubmit} className='space-y-2'>
                            <fieldset>
                                <legend>Name</legend>
                                <input type="text" name="name" className="input" placeholder="Enter Your Name" />
                            </fieldset>
                            <fieldset>
                                <legend>Image URL</legend>
                                <input type="text" name="image" className="input" placeholder="Image URL" />
                            </fieldset>
                            <div className="space-x-2">
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={() => document.getElementById('my_modal_5').close()}
                                >
                                    Close
                                </button>
                                <button onClick={() => document.getElementById('my_modal_5').close()} type="submit" className="btn  bg-slate-800 text-white">Save</button>
                            </div>
                        </form>

                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default UpdateUserModal;