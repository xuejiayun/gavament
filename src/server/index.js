import axios from 'axios'
let baseUrl = ''
if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://192.168.10.62:19090/portal/api'
} else if (process.env.NODE_ENV === 'production') {
    baseUrl = ''
}
let _axios = axios.create({
    baseURL: baseUrl,
    responseType: 'json',
    transformRequest (data) {
        // console.log(data);
        // if (!data) return;
        // if (typeof data === 'string') data = JSON.parse(data)
        // let obj = {}
        // obj.data = data.data
        // console.log('-----------'+obj);
        // return obj
    }
})
let request = (path) => {
    return _axios(path).catch((e) =>{
        console.log(e);
    })
}
/* 请求热点数据集--resType：1和热点服务API--resType：3 */
export const getHotspotInfo = (params = {resType: 1,selectSize: 8}) => {
    return request(`/portalResource/hotResource?resType=${params.resType}&selectSize=${params.selectSize}`)
}
/* 请求最新资源 */
export const getNewSource = ((params = {selectSize:''}) => {
    return request(`/portalResource/newResource?selectSize=${params.selectSize}`)
})
/* 请求分类数据 */
export const getClassify = ((params = {resType : 0, type : 1, pageSize : 10000}) => {
    return request(`/busdicinfo/findListPortalDictionaryByType?resType=${params.resType}&type=${params.type}&pageSize=${params.pageSize}`)
})
export default {
    install (Vue) {
        Vue.prototype.$share = {
            getHotspotInfo,
            getNewSource,
            getClassify
        }
    }
}