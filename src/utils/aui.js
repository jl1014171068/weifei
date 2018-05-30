const aui = {
	//判断是否为对象
	isObject(obj) {
        return Object.prototype.toString.call(obj) === "[object Object]";
    },
    // 数组中查找第N个该元素
    indexFind(str, cha, num) {
        var x = str.indexOf(cha);
        for (var i = 0; i < num; i++) {
            x = str.indexOf(cha, x + 1);
        }
        return x;
    }
}

export default aui