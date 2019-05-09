function chunk(nums,count){
    var tmp = []
    for(let i = 0,len = nums.length;i < len; i+=count){
        tmp.push(nums.slice(i,i+count))
    }
    return tmp
} 
// function chunk(nums,count){
//     if(nums.length == 0){
//         return []
//     }
//     var ans = []
//     var temp = []
//     var i = 0
//     var len = nums.length
//     while(i < len){
//         temp = []
//         for(var j = 0; j < count;j++){
//             if(nums[j+i]){
//                 temp.push(nums[j+i])
//             }
//         }
//         ans.push(temp)
//         i+=count
//     }
//     return ans
// }
console.log(chunk(['a','b','c','d'],2))