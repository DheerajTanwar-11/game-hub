import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
	if (!url) return noImage;

	const croppedImageUrl = url.replace(
		"/media/games/",
		"/media/crop/600/400/games/"
	);
	return croppedImageUrl;
};

export default getCroppedImageUrl;
