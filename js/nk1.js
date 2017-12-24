// window.onload=function remove(arr, item) {
//     var  arr = [1,2,3,4];
//     var  item=2;
//     var a = arr.concat();
//     console.log(a);
//     var b = arr.indexOf(item);
//     console.log(b);
//    var c= a.splice(b,1);
//     console.log(a);
// }

window.onload=function remove(arr, item) {
    var arr=new Array(1,2,3,4,2);
    var item=2;
    var a=arr.concat();
    var b=new Array();
    console.log(a);
    for(i=0;i<=arr.length;i++){
       if(item==arr[i]){
            b=arr.indexOf(item);
           var c=a.splice(b,1);
        }
    }
    console.log(b);


    console.log(a) ;
}
