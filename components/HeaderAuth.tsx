import React from 'react'

const HeaderAuth = ({ title, subTitle }: { title: string, subTitle: string }) => {
    return (
        <header className='flex-center flex-col mb-4'>
            <h2 className='text-24 font-semibold leading-6 mb-2'>{title}</h2>
            <p className='text-14 font-medium leading-5 text-black-100'>{subTitle}</p>
        </header>
    )
}

export default HeaderAuth