'use client';

import CustomInput from '@/components/CustomInput';
import HeaderAuth from '@/components/HeaderAuth';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { resetPasswordAsync, selectEmail, selectOtp } from '@/lib/features/auth/authSlice';
import { useRouter } from 'next/navigation';

// Define the form schema
const authFormSchema = z.object({
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z.string().min(8, 'Confirm Password must be at least 8 characters long'),
});

const ConfirmPassword = () => {
    const dispatch = useAppDispatch();
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);
    const [showError, setShowError] = useState(false);

    const email = useAppSelector(selectEmail) || '';
    const otp = useAppSelector(selectOtp) || '';

    // Set up the form hook with the schema resolver
    const form = useForm({
        resolver: zodResolver(authFormSchema),
        defaultValues: {
            password: '',
            confirmPassword: '',
        },
    });

    // Form submission handler
    // const onSubmit = (data: z.infer<typeof authFormSchema>) => {
    //     if (data.password !== data.confirmPassword) {
    //         setShowError(true);
    //         return;
    //     }
    //     setShowError(false);
    //     setIsLoading(true);
    //     // Log the form data
    //     console.log("All Data: ", email, otp, data.password);
    //     dispatch(resetPasswordAsync({ email: email, otp: otp, newPassword: data.password }))
    //         .finally(() => {
    //             setTimeout(() => {
    //                 setIsLoading(false);
    //             }, 2000);
    //         });
    // };

    const onSubmit = async (data: z.infer<typeof authFormSchema>) => {
        if (data.password !== data.confirmPassword) {
            setShowError(true);
            return;
        }
        setShowError(false);
        setIsLoading(true);

        try {
            // Log the form data
            console.log("All Data: ", email, otp, data.password);

            await dispatch(resetPasswordAsync({ email: email, otp: otp, newPassword: data.password })).unwrap();
            // On success, redirect to login
            router.push("/login");
        } catch (error: any) {
            console.error("Failed to reset password: ", error);
            // On failure, redirect to forgot password
            alert(`Error : ${error.message}\n Please try again :)`)
            router.push("/forget-password");
        } finally {
            alert(`Password Changed Successfully :)`)
            setIsLoading(false);

        }
    };


    // Destructure form fields for comparison
    const { password, confirmPassword } = form.watch();

    return (
        <section className="main-background">
            <div className="max-w-xl w-full mt-16 md:mt-0 bg-white mx-4 p-5 sm:px-16 sm:py-10 rounded-[8px] drop-shadow-lg">
                <HeaderAuth
                    title="Hi, Welcome Back!"
                    subTitle="Connect with your friend today!"
                />
                <Form {...form}>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            form.handleSubmit(onSubmit)();
                        }}
                        className="space-y-8"
                    >
                        <>
                            <CustomInput control={form.control} name='password' label="Password" placeholder='Enter your password' />
                            <div>
                                <CustomInput control={form.control} name='confirmPassword' label="Confirm Password" placeholder='Enter your password' />
                                {showError && (password !== confirmPassword) && (
                                    <span className='text-[#FF0808] flex justify-end pt-3'>Must match New Password</span>
                                )}
                            </div>
                            <div className="flex flex-col gap-4 pt-8 sm:pt-10">
                                <Button type="submit" disabled={isLoading} className="form-btn bg-yellow-100 hover:bg-yellow-100/80 duration-150 mb-4">
                                    {isLoading ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" /> &nbsp;
                                            Loading...
                                        </>
                                    ) : "Proceed"}
                                </Button>
                            </div>
                        </>
                    </form>
                </Form>
            </div>
        </section>
    );
};

export default ConfirmPassword;
