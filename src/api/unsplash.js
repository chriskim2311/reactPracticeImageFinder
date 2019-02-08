import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID cb25f4a22f48c599d082c3df9a44e516827d902cecab6fbf022db709dd2be9ae'
    }
})