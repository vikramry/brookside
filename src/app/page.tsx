import Header from "@/components/header";
import Image from "next/image";
import Bgimage from "../../public/assets/images/mainbg1.jpg";
import curve from "../../public/assets/images/curve.png";
import { FaCirclePlay } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex container min-h-screen flex-col items-center justify-between pt-20">
      <div>
        {/* /assets/images/mainbg1.jpg */}
        <div
          className="w-screen"
          style={{
            backgroundImage: `url('/assets/images/mainbg1.jpg')`,
            padding: "40px",
            border: "1px solid",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-1/2 flex flex-col gap-8 h-4/5">
            <div className="flex gap-4">
              <span className="font-playfair text-7xl font-bold">
                We are the{" "}
              </span>
              <span className="flex flex-col ">
                <span className="font-playfair text-7xl font-bold text-orMain">
                  future
                </span>
                <Image className="w-fit" src={curve} alt="curve" />
              </span>
            </div>
            <span className="text-2xl w-4/5">
              We strike to make leaders of tomorrow, Equipping them with the
              skills and knowledge to make them future ready.
            </span>
            <div className="flex gap-4">
              <button className="bg-orMain text-white px-4 py-2 rounded text-xs font-bold ">
                <a href="/contact">LEARN MORE</a>
              </button>
              <button className="bg-transparent hover:bg-dGrey text-dGrey font-semibold hover:text-white py-2 px-4 border border-dGrey hover:border-transparent rounded flex gap-2">
                <FaCirclePlay className="hover:text-white hover:fill-white" />
                <span>Video</span>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-lightBlue container w-screen">
          <div className="w-1/2 flex flex-col">
            <span className="text-5xl font-playfair w-3/5">
              ' Learning Begins With Us
            </span>
          </div>
          <div className="w-1/2 ">form</div>
        </div>
      </div>
    </main>
  );
}
