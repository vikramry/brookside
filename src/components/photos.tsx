import { getGalleryImagesFromCloudinary } from "@/action";

const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];


async function loadPhotos(folder: string) {
    const cloudinaryImages = await getGalleryImagesFromCloudinary(folder);
    const photos = JSON.parse(cloudinaryImages).map((photo: any) => {
        return {
            src: photo.secure_url, // Use the secure_url from Cloudinary response
            width: photo.width,
            height: photo.height,
            srcSet: breakpoints.map((breakpoint) => {
                const height = Math.round((photo.height / photo.width) * breakpoint);
                return {
                    src: photo.secure_url.replace('/upload/', `/upload/w_${breakpoint}/`),
                    width: breakpoint,
                    height,
                };
            }),
        };
    });
    return photos;
}

export default loadPhotos;
