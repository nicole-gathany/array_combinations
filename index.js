function solve(arr) {
    let result = 1;
    for(let i=0; i<arr.length; i++){  
      result *= arr[i].sort().filter((current, index)=> current !== arr[i][index+1]).length;
    }
    return result;
  };



  //examples:

console.log(solve([[1,2],[4],[5,6]])); //4);
console.log(solve([[1,2],[4,4],[5,6,6]])); //4);
console.log(solve([[1,2],[3,4],[5,6]])); //8);
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]])); //72);
