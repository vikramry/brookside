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

export default function Gallery() {
    const [index, setIndex] = useState(-1);
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        (async () => {
            const data = await loadPhotos();
            setPhotos(data);
        })()
    }, [])

    return (
        <>
            {photos.length > 0 ?
                <PhotoAlbum photos={photos} layout="masonry" spacing={10} targetRowHeight={150} onClick={({ index }) => setIndex(index)} />
                :
                <div className="flex justify-center items-center" style={{
                    height: "calc(100vh - 80px)"
                }}>
                    <PulseLoader color="#F3A20C" size={20} />
                </div>
            }

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
