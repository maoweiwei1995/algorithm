function foo(x) {
    x.push(4); // a = [1,2,3,4]
    console.log(x); 
    // 然后
    x = [4, 5, 6]; // a = [4,5,6]
    x.push(7);	   
    console.log(x); 
  }
  var a = [1, 2, 3];
  foo(a);
  console.log(a);