
var arrObj=[2,6,5,10,16];

//To find the length of the Array Object
for (var i=0;i<arrObj.length;i++)
{
    console.log("The Arrays are" +arrObj[i]);
}


//to join two array concat function is used

var carModel1=['BMW','Toyoto','GMC'];
var carModel2=['Audi','Mitsubushi','Honda'];
var carModel=carModel1.concat(carModel2);
console.log("The Car Models are :" +carModel);

//to make an array in to string join is used

var fruits=['apple','mango','pear','melon','papaya'];
console.log(fruits);
var energy= fruits.join();
console.log(energy);


//pop element is to retrive a last element in an array 

console.log("The last Element in an array is " +carModel.pop());

//returns the first element

console.log("The first Element in an array is " +carModel.shift());


//adds an element in an array at the last position and return the length of an array

var newCarModel=carModel.push('Ram');
console.log("The new Car Models arrays are" +carModel);




//Reverse an array element
console.log("The reverse of an array object is " +arrObj.reverse());



//unshift append it to the start

console.log("The lenghth of the array is  " +carModel.unshift('Honda'));
//sorting an array 
console.log("The sorting of an carModel is:" +carModel.sort());



