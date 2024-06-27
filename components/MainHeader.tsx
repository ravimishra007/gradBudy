import React from 'react'

const MainHeader = ({ title, subTitle }: { title: string, subTitle: string }) => {
    return (
        <header className='flex flex-col mb-6 sm:mb-10'>
            <h2 className='text-24 font-semibold leading-6 mb-2'>{title}</h2>
            <p className='text-14 font-medium leading-5 text-black-100'>{subTitle}</p>
        </header>
    )
}

export default MainHeader