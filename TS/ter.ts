function add(j:number, k:number){
return j+k;
}

console.log(add(8,6));
function insertAtBeginning<T>(array:T[], value:T) {    //here t is generic type define as per both parameter
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
console.log(updatedArray[0]
);