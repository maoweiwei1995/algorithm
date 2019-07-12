var addTwoNumbers = function(l1, l2) {
    let sta1 = list2stack(l1)
    let sta2 = list2stack(l2)
    let len1 = sta1.length
    let len2 = sta2.length


};

function list2stack(list){
    let sta = []
    while (list){
        sta.unshift(list.val)
    }
    return sta
}

function arrayAdd(arr1, arr2) {
    // 进位
    let carry = 0
    let ans = []
    
}