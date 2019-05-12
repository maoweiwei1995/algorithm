// //父类
// function Animal (name) {
//   //实例属性
//   this.name = name || 'Animal';
//   //实例方法
//   this.sleep = function(){
//     console.log(this.name + '正在睡觉')
//   }
// }
// //原型方法
// Animal.prototype.eat = function(food){
//   console.log(this.name + '正在吃:' + food)
// }

// //1.原型继承
// // function Cat(){

// // }
// // Cat.prototype = new Animal()
// // Cat.prototype.name = 'Cat'
// // var cat = new Cat()
// // console.log(cat.name)
// // console.log(cat.eat('fish'))
// // console.log(cat.sleep())
// // console.log(cat instanceof Animal)
// // console.log(cat instanceof Cat)

// //2.构造继承
// // function Cat(name){
// //   Animal.call(this)
// //   this.name = name || 'Tom'
// // }
// // var cat = new Cat()
// // console.log(cat.name)
// // console.log(cat.sleep())
// // console.log(cat instanceof Animal)
// // console.log(cat instanceof Cat)

// //3.实例继承
// // function Cat(name){
// //     var instance =  new Animal()
// //     instance.name = name || 'Tom'
// //     return instance
// // }
// // var cat = new Cat()
// // console.log(cat.name)
// // console.log(cat.sleep())
// // console.log(cat instanceof Animal)
// // console.log(cat instanceof Cat)

// //4.拷贝继承
// // function Cat(name){
// //   var animal = new Animal()
// //   for( let p in animal){
// //     Cat.prototype[p] = animal[p]
// //   }
// //   Cat.prototype.name = name || 'Tom'
// // }
// // var cat = new Cat()
// // console.log(cat.name)
// // console.log(cat.sleep())
// // console.log(cat instanceof Animal)
// // console.log(cat instanceof Cat)

// //5.组合继承 = 构造继承+原型继承
// // function Cat(name){
// //   Animal.call(this)
// //   this.name = name || 'Tom'
// // }
// // Cat.prototype = new Animal()
// // Cat.prototype.construcor = Cat
// // var cat = new Cat()
// // console.log(cat.name)
// // console.log(cat.sleep())
// // console.log(cat instanceof Animal)
// // console.log(cat instanceof Cat)

// //6.寄生组合继承
// function Cat(name){
//   Animal.call(this)
//   this.name = name || 'Tom'
// }
// (function(){
//   var Super = function(){

//   }
//   Super.prototype = Animal.prototype
//   Cat.prototype = new Super()
// })()
//   Cat.prototype.constructor = Cat
//  var cat = new Cat()
//   console.log(cat.name)
// console.log(cat.sleep())
// console.log(cat instanceof Animal)
// console.log(cat instanceof Cat)
