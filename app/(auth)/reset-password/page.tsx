import AuthForm from '@/components/AuthForm'
import HeaderAuth from '@/components/HeaderAuth'
import React from 'react'

const ResetPassword = () => {
    return (
        <section className="main-background">
            <div className="max-w-xl w-full mt-16 md:mt-0 bg-white p-5 mx-4 sm:px-16 sm:py-10 rounded-[8px]">
                <HeaderAuth
                    title="Forgot Password"
                    subTitle="Check Your Email Inbox. Also Please check our Spam Folder."
                />

                <AuthForm type="reset-password" />
            </div>
        </section>
    )
}

export default ResetPassword