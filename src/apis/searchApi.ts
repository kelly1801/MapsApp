import axios from 'axios'

export const searchApi = axios.create({
    baseURL:'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'en',
        access_token: 'pk.eyJ1Ijoia2VsbHkxODAxIiwiYSI6ImNsYzJiMnc2aTRjNDMzdnBsNHBleDkwY2cifQ.aaU-F2sWTHiERcOTn1C1aA'
    }
})