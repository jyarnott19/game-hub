import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "ef708eea40444acea3bd17c44888740b",
    },
});