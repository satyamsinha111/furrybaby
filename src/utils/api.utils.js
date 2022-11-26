import axios from 'axios';
let base_url = 'http://localhost:3000/' 

let instance = axios.create();

instance.interceptors.request.use((value)=>{
    console.log(value);
})

export const login = async (post_data)=>{
    return await axios.post(`${base_url}signin`,post_data,{
        headers:[
            {'test':'test'}
        ]
    })
}