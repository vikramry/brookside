import Image, { StaticImageData } from 'next/image';

export type CardProps = {
    img: StaticImageData;
    desc: string;
    userName: string;
}

export default function Card({ img, desc, userName }: CardProps) {
    return ( 
        <div className=" rounded overflow-hidden shadow-lg w-25em flex flex-col items-center gap-4 px-8 bg-[#F6EAD4]">
            <Image className=" mt-2 rounded-full mr-2" src={img} alt="Avatar of Jonathan Reinink" width={40} height={40} />
            <p className="text-gray-700 text-base sm:text-xs">{desc}</p>
            <div className="text-gray-900 font-bold text-xl mb-2">{userName}</div>
        </div>
    )
}