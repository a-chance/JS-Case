// 获取换肤按钮
let skinPeeler = document.getElementsByClassName("skin-peeler")[0];

// 获取确定和取消按钮
let sureBtn = document.getElementsByClassName("sure-btn")[0];
let cancelBtn = document.getElementsByClassName("cancel-btn")[0];

let menu = document.getElementsByClassName("menu")[0];
let mark = true; 
let index = 0; // 记录上一次显示皮肤的序号

let dataColor = ["#ECF0F1", "#F4DCC2", "#9C004C", "#CF5A0D", "#A0D9A4", "#18A7B7"];
let body = document.body;
// 设置body的宽高和浏览器的一样
body.width = window.innerWidth;
body.height = window.innerHeight;


// 封装函数让皮肤列表显示和隐藏
function show() {
    if (mark) {
        menu.style.height = "245px"
        // menu.classList.add("active");
    } else {
        // menu.classList.remove("active");
        menu.style.height = "0"
    }
    mark = !mark;
}
// 给换肤 确定 取消 按钮绑定点击事件
skinPeeler.onclick = show;

// 获取所有的皮肤
let aLi = document.querySelectorAll(".skin-layout .skin-list li");
let aPic = document.getElementsByClassName("small-pic-box");
let flag = 0;   // 保存上一次有皮肤的下标
// 遍历li，点击切换皮肤，如果取消回复原状，点击确定永久保存
for(let i = 0; i < aLi.length; i++){
    // 每次点击换肤之前应该遍历上一次显示的是哪个皮肤，也就是要找到对应的li的下标
    if(aLi[i].className === "on" && body.style.background == dataColor[i]){
        flag = i;
    }

    aLi[i].onclick = function () {
        // 起初可以切换图片，但没有正真切换
        aPic[index].classList.remove("on");
        index = i;        
        aPic[index].classList.add("on");
        body.style.background = dataColor[i];

        // 给两个按钮绑定点击事件,如果点击确定，背景永久切换
        sureBtn.onclick = function () {
            show();

            // 点击确定就让flag保存最新显示皮肤的序号
            flag = index;   

            // 点击确定，就永久切换皮肤，然后将flag的值换为index
            body.style.background = dataColor[flag];        
        }

        cancelBtn.onclick = function () {
            show();
            // 点击取消，就要显示上一次真正有皮肤的序号
            body.style.background = dataColor[flag];        
        }
    }
    
}









