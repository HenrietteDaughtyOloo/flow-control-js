                        //QUESTION 1
//Write a function that accepts an array of strings and console.logs 
//each element using a for loop.
function arrayOfStrings(arr){
for(let i=0; i<arr.length; i++){
    console.log(arr1[i])
}

}
let arr1=["Arrays Of String","Recall","2345","jackie","JS is amazeballs."]
arrayOfStrings(arr1);

                    //QUESTION 2 // 
 //Write a function that accepts an array of numbers and uses the
  // forEach() method to console.log each number multiplied by 2.
  function arrayOfNumbers(arrNum1){

    arrNum1.forEach(element => {
        
        console.log(element*2)
    });
}
let arrNum1 =[10,200,3000,40000,500000,6000000]
arrayOfNumbers(arrNum1)

                    //QUESTION3//
 //Write a function that takes in an array of numbers and
 // consoles the first four items multiplied by 8 and the last two added 
 //by 5. Console the array with the new values

 function multiplication(arrNum2) {
    const firstFourItems = arrNum2.slice(0, 4).map(number => number * 8);

    const lastTwoItems = arrNum2.slice(-2).map(number => number + 5);

    const newValArray = [...firstFourItems, ...lastTwoItems];

    console.log(newValArray);
  }
  const arrNum2 = [1, 2, 3, 4, 5, 6];
  multiplication(arrNum2);


                    //QUESTION4//
  // Write a function that takes in the following
 //  array and use a while loop to iterate and break
 //   when the item is equal to the fourth index 
 // let arrNum = [1,2,3,4,5,6,7,8,9];
 function fourthIndex(arrNum){
    let i=0;
    
     while(i<arrNum.length){
        
          if(i===4){
              break;
         }
          i++;
      }
     return i;
  }
  let arrNum = [1,2,3,4,5,6,7,8,9];
 console.log(fourthIndex(arrNum));

                        //QUESTION5//
//Write a function that takes in a an array of strings 
//and use a continue statement when the item is at the second index
// let fruits= ['apple','plum','banana','strawberries','kiwi']
function fruitty(fruits){

    for(let i=0;i<fruits.length;i++){

  if(i===2){  
      continue;
   }
   console.log(fruits[i]);

    }
}
     let fruits= ['apple','plum','banana','strawberries','kiwi'];
      fruitty(fruits);

