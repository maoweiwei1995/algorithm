/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.items = []
    this.min = Number.MAX_VALUE
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(x <= this.min) {
        items.push(min)
        min = x
    }
    items.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(min == items[length]) {
        items.pop()
        min = items.pop()
    } else {
        item.pop()
    }
    if(items.length===0) {
        min = Number.MAX_VALUE
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return item.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */