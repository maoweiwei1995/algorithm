// 定义一个动物类
function Animal (name) {
    // 属性
    this.name = name || 'Animal';
    // 实例方法
    this.sleep = function(){
      console.log(this.name + '正在睡觉！');
    }
  }
  // 原型方法
Animal.prototype.eat = function(food) {
    console.log(this.name + '正在吃：' + food);
  };

// // 1原型继承
// function Cat(){ 
// }
// Cat.prototype = new Animal();   //Animal.prototype.name = 'Animal';
// Cat.prototype.name = 'cat';

// //　Test Code
// var cat = new Cat();
// console.log(cat.name); //'cat'
// console.log(cat.eat('fish')); // cat eat fish
// console.log(cat.sleep()); // cat sleep
// console.log(cat instanceof Animal); //true 
// console.log(cat instanceof Cat); //true
// console.log(Cat.prototype) //Animal { name: 'cat', sleep: [Function] }
// console.log(cat.__proto__)//Animal { name: 'cat', sleep: [Function] }

//2、构造继承
// function Cat(name){
//     Animal.call(this);
//     this.name = name || 'Tom';
//   }
  
//   // Test Code
//   var cat = new Cat();
//   console.log(cat.name);
//   console.log(cat.sleep());
//   console.log(cat instanceof Animal); // false
//   console.log(cat instanceof Cat); // true


// 3、实例继承
//   function Cat(name){
//     var instance = new Animal();
//     instance.name = name || 'Tom';
//     return instance;
//   }
  
//   // Test Code
//   var cat = new Cat();
//   console.log(cat.name);
//   console.log(cat.sleep());
//   console.log(cat instanceof Animal); // true
//   console.log(cat instanceof Cat); // false

//1.拷贝继承
// function Cat(name){
//     var animal = new Animal();
//     for(var p in animal){
//       Cat.prototype[p] = animal[p];
//     }
//     Cat.prototype.name = name || 'Tom';
//   }
  
//   // Test Code
//   var cat = new Cat();
//   console.log(cat.name); // Tom
//   console.log(cat.sleep()); // tom sleep
//   console.log(cat instanceof Animal); // false
//   console.log(cat instanceof Cat); // true

// 组合继承

// function Cat(name){
//     Animal.call(this);
//     this.name = name || 'Tom';
//   }
//   Cat.prototype = new Animal();
  
//   // 组合继承也是需要修复构造函数指向的。
  
//   Cat.prototype.constructor = Cat;
  
//   // Test Code
//   var cat = new Cat();
//   console.log(cat.name);
//   console.log(cat.sleep());
//   console.log(cat instanceof Animal); // true
//   console.log(cat instanceof Cat); // true


//   6、寄生组合继承


function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
}
(function(){
  // 创建一个没有实例方法的类
  var Super = function(){};
  Super.prototype = Animal.prototype;
  //将实例作为子类的原型
  Cat.prototype = new Super();
})();

// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); //true
