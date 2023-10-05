"use client"
import { useCallback, useState } from "react";
import Input from "../components/Input";

const Auth = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, [])

    return (
        <div className="relative h-full w-full bg-[url('../../public/images/hero.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-40">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="LOGO" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">{variant === 'login' ? 'Sign in' : 'Create Account'}</h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (

                                <Input label="Username" onChange={(event: any) => setUsername(event.target.value)} id="email" type={username} value={username} />
                            )}
                            <Input label="Email" onChange={(event: any) => setEmail(event.target.value)} id="email" type="email" value={email} />
                            <Input label="Password" onChange={(event: any) => setPassword(event.target.value)} id="email" type="email" value={password} />
                        </div>
                        <button className="bg-red-600 text-white w-full mt-6 hover:bg-red-700 transition py-3 rounded-md font-semibold"> {variant === 'login' ? 'Login' : 'Sign Up'} </button>
                        <p className="text-neutral-500 mt-12">{variant === 'login' ? 'New to XStream?' : 'Already have an account?'}
                            <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer font-semibold">{variant === 'login' ? 'Create an account' : 'Login'}</span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Auth;