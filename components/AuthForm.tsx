'use client';

import Link from 'next/link';
import React, { Suspense, useEffect, useState } from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import CustomInput from './CustomInput';
import { authFormSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from './ui/input-otp';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { checkUserAsync, selectError, selectLoggedInUser } from '@/lib/features/auth/authSlice';
import { useRouter } from 'next/navigation';

const AuthForm = ({ type }: { type: string }) => {

  const dispatch = useAppDispatch();
  const error = useAppSelector(selectError);
  const user = useAppSelector(selectLoggedInUser);
  const router = useRouter()


  const [isLoading, setIsLoading] = useState(false);
  const formSchema = authFormSchema(type);

  const [address1, setAddress1] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  useEffect(() => {
    const fetchParams = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const address1 = searchParams.get('address1');
      const password = searchParams.get('password');
      setAddress1(address1);
      setPassword(password);
    };

    fetchParams();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    if (type === 'sign-in') {
      console.log('Sign-in data:', data);
      dispatch(
        checkUserAsync({ email: data.email, password: data.password })
      )
      // router.push("/")
    }

    setIsLoading(false);
  };

  return (
    <section className="auth-form">
      <Suspense>
        <>
          <Form {...form}>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                form.handleSubmit(onSubmit)();
              }}
              className="space-y-8"
            >{type === 'sign-in' ? (
              <>
                <CustomInput control={form.control} name='email' label="Email" placeholder='Enter your email' />
                <CustomInput control={form.control} name='password' label="Password" placeholder='Enter your password' />
                <div className='flex justify-between'>
                  <div className="flex items-center space-x-2 text-yellow-100">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Remember Me</Label>
                  </div>
                  <Link href='/forget-password'>
                    <Label className='text-[#FF0808] cursor-pointer' htmlFor="terms">Forget Password</Label>
                  </Link>
                </div>
              </>
            ) : type === 'forget-password' ? (
              <>
                <CustomInput control={form.control} name='email' label="Email" placeholder='Enter your email' />
                <Link href="/reset-password">
                  <div className="flex flex-col gap-4 pt-8 sm:pt-10">
                    <Button type="submit" disabled={isLoading} className="form-btn bg-yellow-100 hover:bg-yellow-100/80 duration-150 mb-4">
                      {isLoading ? (
                        <>
                          <Loader2 size={20} className="animate-spin" /> &nbsp;
                          Loading...
                        </>
                      ) : "Forgot"}
                    </Button>
                  </div>
                </Link>
              </>
            ) : type === 'reset-password' ? (
              <>
                <div className='flex-center flex-col mt-8 space-y-5'>
                  <Label htmlFor="terms">Enter the Authentication Code Send on Email</Label>
                  <InputOTP maxLength={6}>
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
                </div>
                <Link href="/confirm-password">
                  <div className="flex flex-col gap-4 pt-8 sm:pt-12">
                    <Button type="submit" disabled={isLoading} className="form-btn bg-yellow-100 hover:bg-yellow-100/80 duration-150 mb-4">
                      {isLoading ? (
                        <>
                          <Loader2 size={20} className="animate-spin" /> &nbsp;
                          Loading...
                        </>
                      ) : "Proceed"}
                    </Button>
                  </div>
                </Link>
              </>
            ) : (
              <>
                <CustomInput control={form.control} name='address1' label="Password" placeholder='Enter your password' />
                <div>
                  <CustomInput control={form.control} name='password' label="Confirm Password" placeholder='Enter your password' />
                  {(address1 !== password) && <Label className='text-[#FF0808] flex justify-end pt-3' htmlFor="terms">Must match New Password</Label>}
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
            )}
              {(type === 'sign-in') && <div className="flex flex-col gap-4 pt-5">
                <Button type="submit" disabled={isLoading} className="form-btn bg-yellow-100 hover:bg-yellow-100/80 duration-150 mb-4">
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : 'Sign In'}
                </Button>
              </div>}
            </form>
          </Form>
          {(type === 'sign-in' || type === 'sign-up') && <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-[#6941C6]/40">
              {type === 'sign-in'
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link href={type === 'sign-in' ? '/signup' : '/login'} className="form-link">
              {type === 'sign-in' ? 'Sign up' : 'Sign in'}
            </Link>
          </footer>}
        </>
      </Suspense>
    </section>
  );
}

export default AuthForm;
