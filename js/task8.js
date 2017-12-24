// window.onload = function() {
//     var list = document.getElementById('list');
//     var prev = document.getElementById('prev');
//     var next = document.getElementById('next');
//
//     prev.onclick = function() {
//         animate(59.75 );
//     };
//     next.onclick = function() {
//         animate(-59.75 );
//     };
//     function animate(offset) {
//         //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
//         //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
//         var newLeft = parseFloat(list.style.marginLeft + offset)+ 'rem';
//         list.style.marginLeft=newLeft;
//         console.log(newLeft)
//     }
// }
