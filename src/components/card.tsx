import Image, { StaticImageData } from 'next/image';

export type CardProps = {
    img: StaticImageData;
    desc: string;
    userName: string;
}

export default function Card({ img, desc, userName }: CardProps) {
    return ( 
        <div className=" rounded overflow-hidden shadow-lg w-25em flex flex-col items-center gap-4 px-8 bg-[#F6EAD4] sm:gap-2 sm:px-2 md:h-80">
            <Image className=" mt-2 rounded-full mr-2 sm:mr-0" src={img} alt="Avatar of Jonathan Reinink" width={40} height={40} />
            <p className="text-gray-700 text-base sm:text-xs sm:w-60">{desc}</p>
            <div className="text-gray-900 font-bold text-xl mb-2 sm:text-xs">{userName}</div>
        </div>
    )
}