import Image from 'next/image'
import React from 'react'

const Badge = ({ title, imgSrc }: { title?: string, imgSrc?: string }) => {
    return (
        <div className="rounded-[20px] bg-[#ECE9FE] w-fit flex-center">
            {title && <span className="text-sm text-[#3F196C] font-medium px-4 p-1">{title}</span>}
            
            {imgSrc && <div className="px-4 p-1">
                <Image className="object-cover h-[27px] w-[86]px" src={`${imgSrc}`} alt='Company' width={86} height={27} />
            </div>}
        </div>
    )
}

export default Badge