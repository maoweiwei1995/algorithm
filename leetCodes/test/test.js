let num = [{a: 2}, {c: 4}]
num.sort((a, b) => {
    console.log(a, b)
    return a - b
})