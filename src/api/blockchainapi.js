import axios from 'axios';


export default axios.create({
    baseURL: 'https://blockchain.info/',
    params: {
        cors: true,
        format: 'json',
      },
    });
