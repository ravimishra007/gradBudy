'use client';

import HeaderAuth from '@/components/HeaderAuth';
import Link from 'next/link';
import React, { useState } from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Loader2 } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { resetPasswordAsync, setOtp } from '@/lib/features/auth/authSlice';
import { Label } from '@/components/ui/label';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp';
import { useRouter } from 'next/navigation';

const authFormSchema = z.object({
    otp: z.string().length(6, 'OTP must be 6 digits'),
});

const ResetPassword = () => {
    const dispatch = useAppDispatch();
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm({
        resolver: zodResolver(authFormSchema),
        defaultValues: {
            otp: '',
        },
    });

    const onSubmit = (data: z.infer<typeof authFormSchema>) => {
        setIsLoading(true);

        dispatch(setOtp(data.otp))
        console.log("OTP : ", data.otp);
        router.push("/confirm-password")
    };

    return (
        <section className="main-background">
            <div className="max-w-xl w-full mt-16 md:mt-0 bg-white p-5 mx-4 sm:px-16 sm:py-10 rounded-[8px]">
                <HeaderAuth
                    title="Forgot Password"
                    subTitle="Check Your Email Inbox. Also Please check your Spam Folder."
                />

                <Form {...form}>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            form.handleSubmit(onSubmit)();
                        }}
                        className="space-y-8 flex flex-col justify-center items-center"
                    >
                        <FormField
                            control={form.control}
                            name="otp"
                            render={({ field }) => (
                                <FormItem className='mt-6 sm:mt-8'>
                                    <FormLabel>Enter the Authentication Code Sent on Email</FormLabel>
                                    <FormControl>
                                        <InputOTP
                                            maxLength={6}
                                            value={field.value}
                                            onChange={field.onChange}
                                        >
                                            <InputOTPGroup>
                                                <InputOTPSlot index={0} />
                                            </InputOTPGroup>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={1} />
                                            </InputOTPGroup>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={2} />
                                            </InputOTPGroup>
                                            <InputOTPSeparator className='' />
                                            <InputOTPGroup>
                                                <InputOTPSlot index={3} />
                                            </InputOTPGroup>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={4} />
                                            </InputOTPGroup>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={5} />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex flex-col gap-4 pt-6 sm:pt-8">
                            <Button type="submit" disabled={isLoading} className="form-btn bg-yellow-100 hover:bg-yellow-100/80 duration-150 mb-4">
                                {isLoading ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" /> &nbsp;
                                        Loading...
                                    </>
                                ) : "Proceed"}
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </section>
    );
};

export default ResetPassword;
