import Image, { StaticImageData } from 'next/image';

export type CardProps = {
    img: StaticImageData;
    grade:string;
    desc: string;
    // userName: string;
}

export default function Card2({ img, desc,grade }: CardProps) {
    return ( 
        <div className=" rounded overflow-hidden shadow-lg w-25em flex flex-col  gap-4 p-8 bg-white sm:p-0 sm:m-5 sm:gap-2 radiuscls sm:w-5/6 ">
            <Image className=" mt-2  mr-2 h-auto sm:mt-0" src={img} alt="Avatar of Jonathan Reinink"  />
            <h3 className='text-purpleMain font-playfair text-3xl font-bold sm:text-4xl sm:px-4'>{grade}</h3>
            <p className="text-gray-700 text-sm  para sm:m-2 sm:px-4">{desc}</p>
            {/* <a className='text-orMain underline sm:text-xs' href='/'>Read more...</a> */}
        </div>
    )
}