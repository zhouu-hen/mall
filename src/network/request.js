import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    timeout:5000,
    baseURL:"http://152.136.185.210:8000/api/z8"
  });

  // 拦截请求
  instance.interceptors.request.use(config=>{
    return config
  }),err=>{

  };

  // 拦截响应
  instance.interceptors.response.use(res=>{
    return res
  }),err=>{

  }

  // 发送真正的网络请求
  return instance(config)

}
