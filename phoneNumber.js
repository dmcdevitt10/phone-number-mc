function phoneNumber(array){
    array.splice(0, 0, '(')
    array.splice(4, 0, ')')
    array.splice(5, 0, ' ')
    array.splice(9, 0, '-')
    let finalArr = array.join('')
    return finalArr
}

console.log(phoneNumber([1,2,3,4,5,6,7,8,9,0]))

function phoneNumber1(array){
    let first = '('
    let sec = ') '
    let third = '-'
    for(let i = 0; i < array.length; i++){
        if(i === 0 || i === 1 || i === 2){
            first += array[i]
        }else if(i === 3 || i === 4 || i === 5){
            sec += array[i]
        }else{
            third += array[i]
        }
    }
    return first + sec + third
}

console.log(phoneNumber1([1,2,3,4,5,6,7,8,9,0]))
