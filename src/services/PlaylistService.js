import axios from 'axios'

export default class PlaylistService {

    getPlaylistByCity(city) {

        return axios.get("http://192.168.0.15:8080/playlist?city=" + city).then(res => res.data);

    }

    getPlaylistByCoordinates(lat, lon) {

        return axios.get("http://192.168.0.15:8080/playlist?lat=" + lat + "&lon=" + lon).then(res => res.data);

    }

}