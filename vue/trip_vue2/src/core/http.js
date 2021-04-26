import axios from 'axios';
import { Message } from 'element-ui';

axios.defaults.timeout = 5000; //请求超时5秒
axios.defaults.baseURL = ''; //请求base url
axios.defaults.headers.post['Content-Type'] = 'application/octet-stream'; //设置post请求是的header信息
// 'application/octet-stream'
// axios.defaults.responseType = 'blob'

//http请求之前 request 拦截器
axios.interceptors.request.use(
    config => {
        // let token = sessionStorage.getItem('token')
        // if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        //     config.headers = {
        //         'X-token': token
        //     }
        // }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

//http请求之后 response 拦截器
axios.interceptors.response.use(
    response => {
        if (response.status !== 200) {
            Message({
                showClose: true,
                message: '请求失败...',
                type: 'error',
                center: true,
                duration: 2000
            })
            return false;
        }
        // if (response.data.code === -1) {
        //     localStorage.removeItem('token')
        //     router.push({
        //         path: "/login",
        //         querry: { redirect: router.currentRoute.fullPath }//从哪个页面跳转
        //     })
        // }
        if (response.data && response.data.code === 'SUCCESS') {
            return response;
        } else {
            Message({
                showClose: true,
                message: '请求异常!',
                type: 'error',
                center: true,
                duration: 2000
            })
            return false;
        }

    },
    err => {
        if (err.code === 'ECONNABORTED' && err.message.indexOf('timeout') !== -1) {
            Toast({
                mes: '网络异常，连接超时...',
                timeout: 1500
            });
        }
        return Promise.reject(err)
    }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}, headers = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params,
            headers: headers
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response.data.result);
            }, err => {
                reject(err)
            })
    })
}

/**
 * 封装filePost请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function filePost(url, data = {}) {
    return new Promise((resolve, reject) => {
        // axios.defaults.responseType = 'blob';
        axios.post(url, data)
            .then(response => {
                resolve(response.data.result);
            }, err => {
                reject(err)
            })
    })
}

