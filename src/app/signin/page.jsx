"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const SignInPage = () => {
    const {register,watch ,handleSubmit,formState: { errors }} = useForm()
    const handelLoginFunc =  (data) => {
       console.log(data);    

    }
        const handelSignUp = async (data) => {
            const { email,  password,  } = data;
            // console.log(name, password, email, photo);
            const { data: fromData, error } = await authClient.signIn.email({
                email: email, // required
                password: password, // required
                callbackURL: "/",
                
          
            })
             if (error) {
                alert("signIn Unsuccessful");
                return;
            }
            if(FormData){
                alert("singIn successful")
            }
            console.log(fromData,"form", error);
    
        }

  
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>SignIn your account</h2>


                <form className='space-y-4' onSubmit={handleSubmit(handelSignUp)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" {...register("email" ,{ required: "email field is required" })}  className="input" placeholder="Type your email" />
                             {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" {...register("password",{ required: "password field is required" })} className="input" placeholder="Type your password" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <button className="btn w-full bg-slate-800 text-white">Login</button>
                </form>
                <p className='mt-4'>Don't have an account? <Link className='text-blue-500' href={"/signup"}>SignUp</Link></p>
            </div>
        </div>
    );
};

export default SignInPage;