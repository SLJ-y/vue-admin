import axios from "axios"

// 创建axios
const instance = axios.create();

// 添加请求拦截器
instance.interceptors.request.use(function(config){
    // 在发送请求之前做些什么
    return config;
}, function(error){
    // 对相应错误做些什么
    return Promise.reject(error)
});


// 添加响应拦截器
instance.interceptors.response.use(function(config){
    // 对相应数据做些什么
    return config;
}, function(error){
    // 对相应错误做些什么
    return Promise.reject(error);
});



export default instance;

/**
 * 使用 export default 时, 不能存在多个 default
 * 文件 import 不需要花括号
 */