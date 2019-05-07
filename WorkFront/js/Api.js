// 该页面初始化的方法
function init(){
    // hideDiv();
    getApi()
    // getCommonNets()
}


function getApi() {
    console.info("getApi")
    $.ajax({
        // url:"http://gank.io/api/today",
        url: "http://gank.io/api/xiandu/categories",
        type: "GET",
        dataType: "json",
        success: function (data) {
            console.log(data);
            //解析json 对象
            var objList = eval(data)
            //取json对象中的字段，发现它是个列表
            var results = objList.results
            //遍历该列表，取每一个元素
            results.forEach(element => {
                console.log(element.name)
                var name = element.name;
                addDiv(name);
            });
            
            //隐藏头部
            hideDiv("#item");
            //隐藏之前的遮罩层布局
            hideDiv(".empty");
        },
        failed: function (data) {
            console.log("failed:" + data)
        }
    })

}


var i = 0;

//隐藏div
function hideDiv(divAttr){
    $(divAttr).hide()
}

//动态创建div
function addDiv(name){
    //document.getElementById = $("#item")[0]
    var item = $("#item")[0];
    var kind = $("#kinds")[0];
    var title = $("#title")[0];
    var div = document.createElement("div");
    div.className = item.className;
    div.id = "item" + i;
    title.innerHTML = "<h4>" + name + "</h4>";    
    kind.innerHTML = name;
    i++;
    //将现有的divhtml赋值给新创建的div
    div.innerHTML = item.innerHTML;
    $("#list")[0].appendChild(div);
}


//常用网站
function getCommonNets(){
    $.ajax({
        url: "https://www.wanandroid.com/friend/json",
        type: "GET",
        dataType: "jsonp",
        success: function (data) {
            console.log(data);
            //解析json 对象
            var objList = eval(data)
            //取json对象中的字段，发现它是个列表
            var results = objList.results
            //遍历该列表，取每一个元素
            results.forEach(element => {
                console.log(element.name)
                var name = element.name;
                addDiv(name);
            });
            
            //隐藏头部
            hideDiv("#item");
            //隐藏之前的遮罩层布局
            hideDiv(".empty");
        },
        failed: function (data) {
            console.log("failed:" + data)
        }
    })
}