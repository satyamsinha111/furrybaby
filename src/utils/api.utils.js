import axios from 'axios';

let instance = axios.create();

instance.interceptors.request.use((value)=>{
    console.log(value);
})