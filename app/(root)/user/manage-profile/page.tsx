import MainHeader from '@/components/MainHeader'
import MultiStepForm from '@/components/MultiStepForm'
import React from 'react'

const ManageProfile = () => {
    return (
        <>
            <section className="flex-center md:bg-white-100 h-full mx-auto">
                <div className="bg-white rounded-tl-[50px] max-w-[1440px] my-10 w-full p-2 mx-2 sm:p-12 sm:mx-10 md:mx-16">
                    <MainHeader title="Manage Profile" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />

                    <main className="">
                        <MultiStepForm />
                    </main>
                </div>
            </section>
        </>
    )
}

export default ManageProfile