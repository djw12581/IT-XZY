//js 创建节点
//注意属结构 document.body.div.。。。。
    /*var bt1=document.createElement("button");
    document.getElementById("div1").appendChild(bt1);
    var text1=document.createTextNode("开始");
    bt1.appendChild(text1);
    var bt2=document.createElement("button");
    document.getElementById("div2").appendChild(bt2);
    var text2=document.createTextNode("结束");
    bt2.appendChild(text2);*/

//jq 创建节点
    var $bt1="<button>开始</button>";
    $("#div1").append($bt1);
    var $bt2="<button>结束</button>";
    $("#div2").append($bt2);

//设置样式
//js设置样式
    /*document.getElementById("div1").style.display="flex";
    document.getElementById("div1").style.alignItems="center";
    document.getElementById("div1").style.justifyContent="center";*/
//jq设置样式
    $("div").css({"display":"flex","alignItem":"center","justifyContent":"center"});

//面向过程
    /*document.getElementById("div1").onclick=function() {
       SJcell();
    }
    function  SJcolor() {
        var r=Math.ceil(Math.random()*255).toString(16);
    var g=Math.ceil(Math.random()*255).toString(16);
    var b=Math.ceil(Math.random()*255).toString(16);
    var color = "#"+r+g+b;
    return (color);
    }
    function SJcell() {
        var arr=new Array(3);
        arr[0]=Math.ceil(Math.random()*9);
        arr[1]=Math.ceil(Math.random()*9);
        arr[2]=Math.ceil(Math.random()*9);
        if((arr[0]!==arr[1])&&(arr[0]!==arr[2])&&(arr[1]!==arr[2])) {
            for (i = 0; i < 3; i++) {
                SJcolor();
                var x = arr[i];
                $("#x").css("backgroundColor", SJcolor());
                // return(arr[0],arr[1],arr[2]);
                // console.log(arr[0],arr[1],arr[2]);
            }
        }
    }*/
/*document.getElementById("div1").onclick=function(){
    var r=Math.ceil(Math.random()*255).toString(16);
    var g=Math.ceil(Math.random()*255).toString(16);
    var b=Math.ceil(Math.random()*255).toString(16);
    var color = "#"+r+g+b;
    console.log(color);
    var cell=Math.ceil(Math.random()*9);
    console.log(cell);
    $("#"+cell).css("backgroundColor",color);
}*/
document.getElementById("div1").onclick=function() {
    var obj = {};
    obj.color = function () {
        var r = Math.ceil(Math.random() * 255).toString(16);
        var g = Math.ceil(Math.random() * 255).toString(16);
        var b = Math.ceil(Math.random() * 255).toString(16);
        var color = "#" + r + g + b;
        return color;
    };
    console.log(obj.color());
    obj.cell = function () {
        var cell = Math.ceil(Math.random() * 9);
        return cell;
    };
    console.log(obj.cell());
}