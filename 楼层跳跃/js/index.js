{
    // 获取数据，并渲染
    let arr = [
        ["国产水果", "精选肉类", "精选肉类", "海鲜水产", "乳品糕点"],
        ["精选肉类", "精选肉类"],
        ["国产水果", "精选肉类", "精选肉类", "海鲜水产",],
        ["海鲜水产", "精选肉类"],
        ["精选肉类", "精选肉类", "精选肉类", "海鲜水产",],
    ]


    // 获取节点对象
    let goods = document.getElementsByClassName("goods")[0],
        goodsBtn = document.getElementsByClassName("goods-btn")[0],
        goodsType = document.getElementsByClassName("goods-type")[0],
        list = goodsType.getElementsByTagName("li");

    let con = document.getElementsByClassName("list")[0];    
    
    // 给盒子绑定移入事件
    goods.onmouseenter = function () {
        goodsType.classList.add("active");
    }
    // 给盒子绑定移出事件
    goods.onmouseleave = function () {
        goodsType.classList.remove("active");
    }

    // 给li绑定移入移除事件
    for(let i = 0; i < list.length; i++){
        list[i].onmouseenter = function () {
            this.style.cssText = "border: 1px solid #ccc; border-right:1px solid #fff;";
            goodsType.style.borderRight="1px solid #ccc";
            con.style.display = "block";
            let str = arr[i].map(val => `<li>${val}</li>`).join("");
            con.innerHTML = str;
        }
        list[i].onmouseleave = function () {
            this.style.border = "none";
            con.style.display = "none";
        }
    }
    
}