// var btns = document.querySelector('#btn-shut');
// var btnc = document.querySelector('#btn-clear');
// var inpt = document.querySelector('input[type="text"]');
// var cmain = document.querySelector('main');
// cmain.style.overflow='hidden';
// function Obj(){
//     //设置节点
//     var span = document.createElement('span');
//     cmain.appendChild(span);
//     span.style.position='absolute';
//     span.style.whiteSpace='pre';
//     span.style.fontSize='20px';
//     span.innerHTML=inpt.value;
//     //随机位置
//     var index = 0;
//     var y = this.ran(380);
//     var arr=[y];
//     span.style.right=index+'px';
//     span.style.top=arr[index]+'px';
//     //随机颜色
//     var carr=[];
//     span.style.color=this.color(carr);
//     //定时器
//     var timer = setInterval(function() {
//         if(index<=300){
//             index+=1;
//         }else if(index>300&&index<=600){
//             index+=1.2;
//         }else if(index>600&&index<=800){
//             index+=1.5;
//         }else if(index>800){
//             clearInterval(timer);
//             if (cmain.childNodes===true){
//                 cmain.removeChild(span);
//             }
//         }
//         span.style.right=index+'px';
//     },10);
//
// }
// Obj.prototype={
//     ran:function (t) {
//         return Math.floor(Math.random()*t);
//     },
//     color:function (ar) {
//         for (let i=0;i<3;i++){
//             ar.push(this.ran(100));
//             var narr=ar.join('');
//         }
//         return '#'+narr;
//     }
// };
// btns.addEventListener('click',function () {
//     var objn = new Obj();
// });
// btnc.addEventListener('click',function () {
//
//     var spp = document.querySelectorAll("main span")||[];
//     var aspp = spp.length;
//     for (var i=aspp;i--;){
//         cmain.removeChild(spp[i]);
//     }
// })