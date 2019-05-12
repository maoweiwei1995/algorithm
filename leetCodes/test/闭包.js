// 最简单的闭包
// function outer(){
//     var count = 0
//     function inner(){
//         console.log(count)
//     }
//     return inner
// }
// var c = outer()
// c()

//问题1  
// function outer(){
//     var result = []
//     for(var i = 0; i < 10; i++){
//         result[i] = function(){
//             console.log(i)
//         }
//     }
//     return result
// }
// var c = outer()
// for(var i = 0; i < 10; i++){
//     c[i]()
// }
//解决方法1
// function outer(){
//     var result = []
//     for(var i = 0; i < 10; i++){
//         result[i] = (function(num){
//             return function(){
//                 console.log(num)
//             }
//         })(i)
//     }
//     return result
// }
// var c = outer()
// for(var i = 0; i < 10; i++){
//     c[i]()
// }

//问题2 this指向
// var object = {
//     name: 'object'，
//     getName： function() {
//        return function() {
//             return this.name
//        }
//    }
// }
// console.log(object.getName()())    // underfined 	
// // 因为里面的闭包函数是在window作用域下执行的，也就是说，this指向windows
//1 保存this
// var object = {
//     name: 'object',
//     getName： function() {
//        var that = this
//        return function() {
//             return that.name
//        }
//    }
// }
// console.log(object.getName()())    // object
//2call
// var object = {
//     name: 'object',
//     getName： function() {
//        return function() {
//             return this.name
//        }
//    }
// }
// console.log(object.getName().call(object))    // object

// //问题3内存泄漏
// function showId(){
//     var el = document.getElementById("app")
//     el.onclick = function(){
//         console.log(el.id)
//     }
// }
// //解决
// function showId(){
//     var el = document.getElementById("app")
//     var id = el.id
//     el.onclick = function(){
//         console.log(id)
//     }
//     el = null
// }

//闭包用途
//1解决递归调用
// function factorial(num){
//     if(num<=1){
//         return 1
//     }
//     return num*factorial(num-1) //arguments.callee(num-1)
// }
// var fac = factorial
// factorial = null
// console.log(fac(10))
// var fac = (function f(num) {
//     if(num<=1){
//         return 1
//     }
//     return num*f(num-1)
// })
// console.log(fac(10))

//模仿块级作用域
// (function(){
//     for(var i = 0; i < 10; i++){
//         console.info(i)
//     }
// })()
// for(let i = 0; i < 10; i++){
//         console.info(i)
//     }

// console.log(i)

//经典问题
// function fn(){
//     var num = 3
//     return function(){
//         var n = 0
//         console.log(++n)
//         console.log(++num)
//     }
// }
// var fn1 = fn()
// fn1() //1 4
// fn1()// 1 5

// for (var i = 0; i < 5; ++i){
//     setTimeout(function(){
//         console.log(i)
//     },1000)
// }

// for(var i = 0; i < 5; ++i){
//     (function(num){
//         setTimeout(function(){
//             console.log(num)
//         },i*1000)
//     })(i)
// }
// // 0 1 2 3 4

// var num = 15
// var fn1 = function(x){
//     if(x>num){
//         console.log(x)
//     }
// }
// void function sss(fn2){
//     var num = 100
//     fn2(30)
// }(fn1)
// for (var i = 1; i <= 5; ++i){
//     setTimeout(function(){
//         console.log(i)
//     },i*1000)
// }

// var timer = setTimeout(function() {
//     console.log('setTimeout actions.');
// },0);
 
// console.log('other actions.');

// for(var i = 1; i <=5; i++){
//     setTimeout((function sss(num){
//         return function(){
//             console.log(num)
//         }
//     })(i),i*1000)
// }

// setTimeout(function() {
//     console.log(a);
// }, 0);
 
// var a = 10;
 
// console.log(b);
// console.log(fn);
 
// var b = 20;
 
// function fn() {
//     setTimeout(function() {
//         console.log('setTImeout 10ms.');
//     }, 10);
// }
 
// fn.toString = function() {
//     return 30;
// }
 
// console.log(fn);
 
// setTimeout(function() {
//     console.log('setTimeout 20ms.');
// }, 20);
 
// fn();

// function fun(n,o) {
//     console.log(o)
//     return {
//       fun:function(m){
//         return fun(m,n);
//       }
//     };
//   }
//   var a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);//undefined,?,?,?
//   var b = fun(0).fun(1).fun(2).fun(3);//undefined,?,?,?
//   var c = fun(0).fun(1);  c.fun(2);  c.fun(3);//undefined,?,?,?

// //c
// //1先输出 undefined 因为只传了一个参数进去
// 然后c = {
//     fun:function(m){
//         return fun(m,0)
//     }
// }
// 即 fun(1,0)
// //2此时输出0
// 返回值:
// c =  {
//     fun:function(m){
//         return fun(m,1)
//     }
// }
// c.fun(2) 以此类推 输出1
// 由于c没有重新赋值 因此c.fun(2)还是输出1  
// 即undefined 0 1 1

// //b
// //1先输出 undefined 因为只传了一个参数进去
// 然后b = {
//     fun:function(m){
//         return fun(m,0)
//     }
// }
// 即 fun(1,0)
// //2此时输出0
// 返回值:
// {
//     fun:function(m){
//         return fun(m,1)
//     }
// }
// 以此类推 输出1
// 所以输出 undefined 0 1 2 



// //a 
// //1先输出 undefined 因为只传了一个参数进去
// 然后a = {
//     fun:function(m){
//         return fun(m,0)
//     }
// }
// 再执行a.fun(1)//
// //等价于
// (function(m){
//   return fun(m,0)
// })(1)
// 返回值是 fun(1,0)
// fun(1,0)是啥 递归了
// 1输出 0
// 2返回 
// {
//   fun:function(m){
//     return fun(m,n);
//   }
// }
// 第一轮执行后 a不变 所以后面输出是2个0
// 总体就是 undefined 0 0 0 

// console.log((_=>[..."`1234567890-=~~QWERTYUIOP[]\\~ASDFGHJKL;'~~ZXCVBNM,./~"].map(x=>(o+=`/${b='_'.repeat(w=x<y?2:' 667699'[x=["BS","TAB","CAPS","ENTER"][p++]||'SHIFT',p])}\\|`,m+=y+(x+'    ').slice(0,w)+y+y,n+=y+b+y+y,l+=' __'+b)[73]&&(k.push(l,m,n,o),l='',m=n=o=y),m=n=o=y='|',p=l=k=[])&&k.join`
// `)())

