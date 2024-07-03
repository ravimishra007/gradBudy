import AuthForm from '@/components/AuthForm'
import HeaderAuth from '@/components/HeaderAuth'
import React from 'react'

const ForgotPassword = () => {
    return (
        <section className="main-background">
            <div className="max-w-xl w-full mt-16 md:mt-0 bg-white mx-4 p-5 sm:px-16 sm:py-10 rounded-[8px]">
                <HeaderAuth
                    title="Forgot Password"
                    subTitle="Please enter the email you registered with"
                />


                <AuthForm type="forget-password" />
            </div>
        </section>
    )
}

export default ForgotPassword