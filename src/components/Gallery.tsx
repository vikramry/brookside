"use client"
import { useEffect, useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import loadPhotos from './photos';
import { PulseLoader } from "react-spinners";

const tabs = [
    {
        value: "ALL",
        label: "All",
    },
    {
        value: "SPORTS",
        label: "Sports",
    },
    {
        value: "TOURS",
        label: "Tours",
    },
    {
        value: "EVENTS",
        label: "Events",
    },
    {
        value: "AWARDS",
        label: "Awards",
    },
    {
        value: "OTHERS",
        label: "Others",
    }
];

export default function Gallery() {
    const [index, setIndex] = useState(-1);
    const [photos, setPhotos] = useState([]);
    const [currentTab, setCurrentTab] = useState("ALL");
    useEffect(() => {
        (async () => {
            const data = await loadPhotos();
            setPhotos(data);
        })()
    }, [])

    return (
        <>

            <div className="flex justify-center items-center">
                <div className="w-[85%]">
                    <ul className="flex justify-center items-center gap-4 md:gap-10 py-4 md:py-10 px-3 text-base flex-wrap">
                        {
                            tabs.map((tab: { value: string, label: string }) => <li key={tab.value} className={`${tab.value === currentTab ? "border-b-2 border-b-[#F3A20C]" : "border-b-2 border-b-transparent"} cursor-pointer py-2 px-3`} onClick={() => setCurrentTab(tab.value)}>{tab.label}</li>)
                        }
                    </ul>
                    {photos.length > 0 ?
                        <PhotoAlbum photos={photos} layout="columns" spacing={10} targetRowHeight={150} onClick={({ index }) => setIndex(index)} />
                        :
                        <div className="flex justify-center items-center" style={{
                            height: "calc(100vh - 80px)"
                        }}>
                            <PulseLoader color="#F3A20C" size={20} />
                        </div>
                    }
                </div>
            </div>

            <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </>
    );
}
