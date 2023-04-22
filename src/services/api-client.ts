import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1c9ce0dd91a24d41819d4d8a7dc95250'
    }
})