const getCroppedImageUrl = (url: string) => {
	const croppedImageUrl = url.replace(
		"/media/games/",
		"/media/crop/600/400/games/"
	);
	return croppedImageUrl;
};

export default getCroppedImageUrl;
