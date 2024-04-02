import React from 'react'

function ActivityCard({heading,content,imgURL,isReverse}:{heading:string,content:string,imgURL?:string,isReverse?:boolean}) {
  return (
    <div className={`${isReverse?"bg-gradient-to-r from-neutral-50 to-green-100":"bg-gradient-to-r from-blue-100 to-zinc-50"} py-11 px-36`}>
        <div className={`flex justify-center ${isReverse ?"text-end flex-row-reverse ":"text-start flex-row"} items-center gap-9`}>
            <div className='w-[50%]'>
                <div className={`flex-col flex  ${isReverse&& "items-end"}`}>
                <h1 className='text-[52px] font-bold'>{heading}</h1>
                <div className='bg-[#F3A20C] w-[114px] h-2'></div>
                </div>
                <p className='text-[16px] font-normal'>{content}</p>
            </div>
            <div className='w-[288px] h-[318px]'>
                <img src={imgURL} alt='img'/>
            </div>
        </div>
    </div>
  )
}

export default ActivityCard
