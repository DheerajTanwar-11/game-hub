import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "39426b20ca81424fb3414774fab492d5",
	},
});
