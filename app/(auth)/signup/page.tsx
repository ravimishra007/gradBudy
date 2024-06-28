import AuthForm from '@/components/AuthForm'
import HeaderAuth from '@/components/HeaderAuth'
import React from 'react'

const SignUp = () => {
    return (
        <section className="main-background">
            <div className="max-w-xl w-full mt-16 md:mt-0 mx-4 bg-white p-5 sm:px-16 sm:py-10 rounded-[8px]">
                <HeaderAuth
                    title="Create Account"
                    subTitle="Connect with your friend today!"
                />

                <AuthForm type="sign-up" />
            </div>
        </section>
    )
}

export default SignUp