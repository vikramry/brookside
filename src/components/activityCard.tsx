import React from 'react'

function ActivityCard({heading,content,imgURL,isReverse}:{heading:string,content:string,imgURL?:string,isReverse?:boolean}) {
  return (
    <div className={`${isReverse?"bg-gradient-to-r from-neutral-50 to-green-100":"bg-gradient-to-r from-blue-100 to-zinc-50"} py-11 md:px-36 px-5`}>
        <div className={`flex justify-center ${isReverse ?"text-end md:flex-row-reverse flex-col-reverse":"text-start md:flex-row flex-col"} items-center gap-9`}>
            <div className='md:w-[50%]'>
                <div className={`flex-col flex  ${isReverse&& "items-end"} gap-2`}>
                <h1 className='md:text-[30px] lg:text-[52px] text-[20px] font-bold'>{heading}</h1>
                <div className='bg-[#F3A20C] md:w-[114px] w-[50px] md:h-2 h-1 mb-3'></div>
                </div>
                <p className='text-[16px] font-normal'>{content}</p>
            </div>
            <div className='w-[288px]'>
                <img src={imgURL} alt='img' className='w-[288px] h-auto max-h-96 object-fill'/>
            </div>
        </div>
    </div>
  )
}

export default ActivityCard
