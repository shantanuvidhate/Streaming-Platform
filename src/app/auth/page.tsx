"use client"
import { useCallback, useEffect, useState } from "react";
import Input from "../components/Input";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button";
import toast from "react-hot-toast";


type Variant = 'LOGIN' | 'REGISTER';
const Auth = () => {
    const session = useSession();
    const router = useRouter();
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (session?.status === 'authenticated') {
            console.log("authenticated")
            router.push("/users");
        }
    }, [session?.status, router])

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant]);


    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === 'REGISTER') {
            axios.post('/api/register', data)
                .then(() => signIn('credentials', {
                    ...data,
                    redirect: false,
                }))
                .then((callback) => {
                    if (callback?.error) {
                        toast.error('Invalid credentials!');
                    }

                    if (callback?.ok) {
                        router.push('/users')
                    }
                })
                .catch(() => toast.error('Something went wrong!'))
                .finally(() => setIsLoading(false))
        }

        if (variant === 'LOGIN') {
            signIn('credentials', {
                ...data,
                redirect: false
            })
                .then((callback) => {
                    if (callback?.error) {
                        toast.error("Invalid Credentials");
                    }
                    if (callback?.ok && !callback?.error) {
                        toast.success("Logged in!");
                        router.push("/users");
                    }
                })
                .finally(() => setIsLoading(false));
        }

    }
    return (
        <div className="relative h-full w-full bg-[url('../../public/images/hero.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-40">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="LOGO" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">{variant === 'LOGIN' ? 'Sign in' : 'Create Account'}</h2>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="flex flex-col gap-4">
                                {variant === 'REGISTER' && (

                                    <Input label="Username" id="name" type="text" register={register} errors={errors} disabled={isLoading} />
                                )}
                                <Input label="Email" register={register} id="email" type="email" errors={errors} disabled={isLoading} />
                                <Input label="Password" id="password" type="password" register={register} errors={errors} disabled={isLoading} />
                            </div>
                            <Button disabled={isLoading} fullWidth type="submit"> {variant === 'LOGIN' ? "Sign in" : "Register"}</Button>
                        </form>
                        <p className="text-neutral-500 mt-12">{variant === 'LOGIN' ? 'New to XStream?' : 'Already have an account?'}
                            <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer font-semibold">{variant === 'LOGIN' ? 'Create an account' : 'Login'}</span>
                        </p>
                    </div>

                </div>
            </div>
        </div >
    );
}
export default Auth;