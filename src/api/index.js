import utils from '@/utils'
const { axios } = utils

let api = {
    demo(params) {
        let data = axios.get('/user/getInfoListByOwnerId1')
        return data
    }
}
export default api