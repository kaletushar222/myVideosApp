import axios from 'axios';
const KEY = 'AIzaSyApCCCGTUuUtXuT6dGgcGXRgM9vTQjczn8'


export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params :{
        part : 'snippet',
        maxResults : 5,
        key : KEY,
        q : 'surBoards'
    }
})