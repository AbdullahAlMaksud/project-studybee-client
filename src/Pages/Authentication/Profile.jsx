import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Profile = () => {
    const { user, updateUserInfo } = useContext(AuthContext);

    const [edit, setEdit] = useState(!true);

    const handleEdit = () => {
        setEdit(!edit)
        console.log(edit)
    }


    const handleUpdate = async e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(name, photo)
        await updateUserInfo(name, photo)
    }


    return (
        <div className="container mx-auto max-w-2xl backdrop-blur-md bg-white/30 dark:bg-black/20 flex justify-center items-center min-h-[calc(100vh-200px)] my-5 relative rounded-md">
            <div className=" absolute top-10 right-10">
                <label className="label cursor-pointer">
                    <span className="label-text mr-4 dark:text-white">Edit</span>
                    <input onChange={handleEdit} name={!edit} type="checkbox" className="toggle" />
                </label>
            </div>

            <form className="border w-full m-5 p-5 flex flex-col justify-center items-center" onSubmit={handleUpdate}>

                <img className="rounded-full shadow-md" src={user?.photoURL} alt="" />


                <div className="bg-white dark:bg-blue-950 px-5 py-3 my-5 rounded-xl min-w-96 grid grid-cols-12">
                    <label className="col-span-3 font-semibold">
                        Name:
                    </label>
                    <input className="ml-2 dark:bg-blue-950 col-span-9" name="name" type="text" defaultValue={user?.displayName} disabled={!edit} />
                </div>
                <div className="bg-white dark:bg-blue-950 px-5 py-3 mb-5 rounded-xl min-w-96 grid grid-cols-12">
                    <label className="col-span-3 font-semibold">
                        PhotoURL:
                    </label>
                    <input className="ml-2 dark:bg-blue-950 col-span-9 " name="photo" type="text" defaultValue={user?.photoURL} disabled={!edit} />
                </div>
                <div className="bg-white dark:bg-blue-950 px-5 py-3 mb-5 rounded-xl min-w-96 grid grid-cols-12">
                    <label className="col-span-3 font-semibold">
                        Email:
                    </label>
                    <input className="ml-2 dark:bg-blue-950 col-span-9 " type="text" defaultValue={user?.email} disabled />
                </div>
                <input className={edit?`bg-blue-600 text-white dark:bg-blue-500 px-10 py-3 rounded-xl min-w-96 disabled:bg-gray-500`: `hidden`} type="submit" value="Update" disabled={!edit} />

            </form>

        </div>
    );
};

export default Profile;