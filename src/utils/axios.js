import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import config from '@/config'
import {Message} from 'element-ui';

let headers = {
    'Accept': "application/json",
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json;charset=UTF-8',
    'Time': new Date().getTime()
}

axios.interceptors.request.use((request) => {
        return request;
    },
    err => {
        return Promise.reject(err)
    })

axios.interceptors.response.use(res => {
        res = checkStatus(res);
        if (res.error) return Promise.reject(res);
        return res
    },
    err => {
        err = checkStatus(err);
        return err
    })


const ajax = (url, params = {}, config = {}) => {
    return axios({
        ...params,
        baseURL: '/api',
        headers,
        url,
        timeout: 5000
    }).then((res) => {
        if (res.error) return Promise.reject(res);
        return res;
    }).catch((err) => {
        return Promise.reject(err);
    })
}

const checkStatus = (res) => {
    let {status,response} = res
    let msg;
    if(response){
        let {error} = response.data;
        msg = error;
    }
    if(status!=200){

    }
    if(msg){
        Message({
            message: msg,
            type: 'error',
            duration: 5 * 1000
        });
    }
    res.error = 0
    return res
}


let methods = {};
['post', 'delete', 'put'].map(function(method) {
    methods[method] = (url, data, config) => ajax(url, {
        data,
        method
    }, config)
})

export default {
    ...methods,
    ajax,
    get(url, params) {
        return ajax(url, {
            params,
            method: 'get',
        })
    }
}