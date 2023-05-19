function arrToObj(arr) {
    let newObj = arr.reduce((initValue, currentValue) => {
       return (initValue[currentValue[0]] = currentValue[1])
    },{})
    return newObj
 }
 
//  function arrToObj (arr) {
//     let newObject = arr.reduce( (object1, currValue) => {
//      object1[currValue[0]] = currValue[1];
//      return object1
// }, {});
//     return newObject;
// }

 const obj1 = arrToObj([
    ['name', 'Son Dang'], 
    ['age', 21], 
    ['address', 'Ha Noi']
 ])
 console.log(obj1)
//  Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }
 
 const obj2 = arrToObj([
    ['name', 'Duc Long'], 
    ['age', 18], 
    ['address', 'Ha Noi']
 ])
 console.log(obj2)
//  Output: { name: 'Duc Long', age: 18, address: 'Ha Noi' }
 