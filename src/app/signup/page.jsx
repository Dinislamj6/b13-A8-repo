"use client"

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SignUpPage = () => {
    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm()
    const handelSignUp = async (data) => {
        const { email, name, password, photo } = data;
        console.log(name, password, email, photo);
        const { data: fromData, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
        })
         if (error) {
            toast.error("signUp failed🚫please try again");
            return;
        }
        if(!error){
            router.push("/")
           
        }
        if(data){
            toast.success("singUp successful!🎉")
        }
        

    }
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white my-5'>
                 <h2 className='font-bold text-2xl text-blue-500 text-center'>Welcome</h2>
                <h2 className='font-bold text-xl text-center mb-4'>Register your account</h2>
                <form className='space-y-2' onSubmit={handleSubmit(handelSignUp)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" {...register("email", { required: "email field is required" })} className="input" placeholder="Type your email" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text" {...register("name", { required: "name field is required" })} className="input" placeholder="Type your name" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text" {...register("photo", { required: "Photo URL field is required" })} className="input" placeholder="Type your Photo URL" />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" {...register("password", { required: "password field is required" })} className="input" placeholder="Type your password" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <button className="btn w-full bg-slate-800 text-white">SignUp</button>
                </form>
                  <p className='mt-4'>Already have an account? <Link className='text-blue-500' href={"/signin"}>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUpPage;