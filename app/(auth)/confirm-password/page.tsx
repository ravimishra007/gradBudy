import AuthForm from '@/components/AuthForm'
import HeaderAuth from '@/components/HeaderAuth'
import React from 'react'

const ConfirmPassword = () => {
    return (
        <section className="main-background">
            <div className="max-w-xl w-full bg-white mx-4 p-5 sm:px-16 sm:py-10 rounded-[8px] drop-shadow-lg">
                <HeaderAuth
                    title="Hi, Welcome Back!"
                    subTitle="Connect with your friend today!"
                />

                <AuthForm type="confirm-password" />
            </div>
        </section>
    )
}

export default ConfirmPassword
