/*
 * @Descripttion: 生成随机颜色
 * @version: First edition
 * @Author: wangweiguo
 * @Date: 2019-07-23 17:47:33
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-03 14:27:01
 */

 {
    function Colors(type) {
        let strColor = "#"; // 存储颜色值
        // 随机生成16进制颜色值
        if(type == "excolor"){
            let str = "0123465789abcdef";
            for (let i = 0; i < 6; i++) {
                strColor += str[i];
            }
            // console.log(strColor);
            return strColor;
        }
        // 随机生成rgb颜色值
        if(type == "rgb"){
            let r = Math.floor(Math.random() * 256),
                g = Math.floor(Math.random() * 256),
                b = Math.floor(Math.random() * 256);
            strColor = `rgb(${r}, ${g}, ${b})`;
            // console.log(strColor);
            return strColor;
        }
        return -1;
    }
 }

/*
 * @Descripttion: 生成任意范围(区间)的随机数
 * @version: First edition
 * @Author: wangweiguo
 * @Date: 2019-07-23 17:47:33
 * @LastEditors: wangweiguo
 * @LastEditTime: 2019-07-23 17:47:33
 */
{
    function ranNum(min, max){
        let num = Math.floor(Math.random() * (max - min + 1) + min);
        return num;
    }
}

/*
 * @Descripttion: 生成随机位数验证码（该函数严格区分大小写）
 * @version: First edition
 * @Author: wangweiguo
 * @Date: 2019-07-23 17:47:33
 * @LastEditors: wangweiguo
 * @LastEditTime: 2019-07-23 17:47:33
 */
{
    function ranCode (count) {
        let str = "012456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";        
        let len = str.length;
        let code = "";
        for(let i = 0; i < count; i++){
            let index = Math.floor(Math.random() * len);
            code += str[index];
        }
        return code;
    }
}
/*
 * @Descripttion: 数组去重函数
 * @version: First edition
 * @Author: wangweiguo
 * @Date: 2019-07-23 17:47:33
 * @LastEditors: wangweiguo
 * @LastEditTime: 2019-07-23 17:47:33
 */
{
    function Arr_Norepeat(arr) {
        let res = [];
        arr.forEach((val, index) => {
            if (arr.indexOf(val) === index) {
                res.push(val);
            }
        })
        return res;
    }
}

/*
 * @Descripttion: 过滤敏感词
 * @version: First edition
 * @Author: wangweiguo
 * @Date: 2019-07-23 17:47:33
 * @LastEditors: wangweiguo
 * @LastEditTime: 2019-07-23 17:47:33
 */
// 参数1:敏感词数组 参数2：正则表达式   参数3：要取代的内容
{
    function Filter_Words(words, rep, str) {

        let reg = new RegExp(words, "ig");
        let str1 = "";
        for (let i = 0; i < words.length; i++) {
            str = str.replace(words[i], rep);
        }
        return str;
    }
}

/*
 * @Descripttion: 字符串格式数据转成对象格式的数据
 * @version: First edition
 * @Author: wangweiguo
 * @Date: 2019-07-23 17:47:33
 * @LastEditors: wangweiguo
 * @LastEditTime: 2019-07-23 17:47:33
 */

//  字符串格式数据转换成对象格式数据
{
    function Str_Trans_Obj (str) {
        let obj = {};
        let arr = str.split("&");
        arr.forEach( val => {
            let arr1 = val.split("=");
            obj[arr1[0]] = arr1[1];
        })
        return obj;
    }
}

/*
 * @Descripttion: 对象格式数据转换成字符串数据
 * @version: First edition
 * @Author: wangweiguo
 * @Date: 2019-07-23 17:47:33
 * @LastEditors: wangweiguo
 * @LastEditTime: 2019-07-23 17:47:33
 */
// 对象格式的数据转换成字符串数据
{
    function Obj_Trans_Str(obj) {
        let str = ""
        for (let item in obj) {
            str += item + "=" + obj[item] + "&";
        }
        return str.slice(0, -1);
    }
}


/*
 * @Descripttion: 获取最终显示的样式 (行内样式 || 内部样式 || 外部样式) 
 * @version: First edition
 * @Author: wangweiguo
 * @Date: 2019-07-23 17:47:33
 * @LastEditors: wangweiguo
 * @LastEditTime: 2019-07-23 17:47:33
 */
// 传2个参数表示获取，3个参数表示设置，最多只能穿3个参数
{
    function getStyle() {
        // 如果传入两个参数，就是获取样式，注意每次只能获取一条样式
        if (arguments.length === 2) {
            if (getComputedStyle(arguments[0], false)) {
                return getComputedStyle(arguments[0], false)[arguments[1]];
            } else {
                return arguments[0].currentStyle[arguments[1]];
            }
        } else if (arguments.length === 3) {    // 为了安全起见，严格确定参数的个数
            arguments[0].style[arguments[1]] = arguments[2];
        }
    }
}

/*
 * @Descripttion: 毫秒数 ==> xx年xx月xx日xx时xx分xx秒
 * @version: First edition
 * @Author: wangweiguo
 * @Date: 2019-08-03 17:47:33
 * @LastEditors: wangweiguo
 * @LastEditTime: 2019-08-03 17:47:33
 */
{
    // 补0函数
    function addZero(num) {
        if (parseInt(num) < 10) {
            num = '0' + num;
        }
        return num;
    }
    // 转换日期
    function getMyDate(num) {
        var date = new Date(num),
            oYear = date.getFullYear(),
            oMonth = date.getMonth() + 1,
            oDay = date.getDate(),
            oHour = date.getHours(),
            oMin = date.getMinutes(),
            oSen = date.getSeconds(),
            oTime = oYear + '-' + addZero(oMonth) + '-' + addZero(oDay) + ' ' + addZero(oHour) + ':' +
                addZero(oMin) + ':' + addZero(oSen);
        return oTime;
    }
}

/*
 * @Descripttion: ajax函数
 * @version: First edition
 * @Author: wangweiguo
 * @Date: 2019-08-03 17:47:33
 * @LastEditors: wangweiguo
 * @LastEditTime: 2019-08-03 17:47:33
*/
function ajax (opt) {
    let defaultobj = {
        'data' : '',
        'async' : true,
        'failur' : null,
    }
    Object.assign(defaultobj, opt);

    let xhr = new XMLHttpRequest();

    if(defaultobj.type.toLowerCase() == 'get'){
        if (defaultobj.data) {
            defaultobj.data = Obj_Trans_Str(defaultobj.data);
            defaultobj.url += '?' + defaultobj.data;
        }
        xhr.open('get', defaultobj.url, defaultobj.async);
        xhr.send(null);
        defaultobj.success();

    }else if(defaultobj.type.toLowerCase() == 'post'){
        defaultobj.data = Obj_Trans_Str(defaultobj.data);
        xhr.open('post', defaultobj.url, defaultobj.async);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(defaultobj.data);
    }
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4){
            if(xhr.status == 200 || xhr.status == 304){
                let data = xhr.responseText;
                defaultobj.success(data);
            } else {
                if(defaultobj.failur){
                    defaultobj.failur(xhr.status);
                }
            }
        }
    }
}
/*
 * @Descripttion: cookie的设置，取值，删除
 * @version: First edition
 * @Author: wangweiguo
 * @Date: 2019-08-03 17:47:33
 * @LastEditors: wangweiguo
 * @LastEditTime: 2019-08-03 17:47:33
*/
// 1.设置cookie
function setCookie(obj, time = 0) {
    // 获取cookie的有效期
    const timer = new Date(Date.now() + time * 1000 * 60 * 60 * 24).toUTCString();
    /* let date = new Date();
    date.setDate(date.getDate()+7); 这表示7天后失效*/

    for (let key in obj) {
        document.cookie = `${key}=${obj[key]};expires=${timer}`;
    }
}

// 2.获取cookie
function getCookie(attr){
    let arr1 = document.cookie.split("; ");
    
    for (let val of arr1) {
        let arr2 = val.split("=");
        if (arr2[0] == attr) {            
            return arr2[1];
        }
    }
}

// 3.删除cookie
function removeCookie(attr) {
    let obj = {};
    obj[attr] = "";
    setCookie(obj, -1);
}

 