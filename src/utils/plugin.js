/**
 * 全局扩展
 */

export default{
    install(Vue){
        Vue.prototype.$myName = "zhagngsan";
        //查找元素在数组中的位置
        Array.prototype.indexOf = function(val) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] == val) return i;
            }
            return -1;
        }
        //数组去重复
        Array.prototype.unique = function() {
            return Array.from(new Set(this));
        }
    }
}
