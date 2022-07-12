function numAdder(){
    var numOne= parseInt(document.getElementById("numOne").value );
    var numTwo= parseInt(document.getElementById("numTwo").value) ;
    var sum=adder(numOne,numTwo);
    document.getElementById("result").innerHTML=sum;
}
function numMultiplier(){
    var numOne= document.getElementById("numOne").value ;
    var numTwo= document.getElementById("numTwo").value ;
    var product=multplier(numOne,numTwo);
    document.getElementById("result").innerHTML=product;
}
function arrayAdder(){
    arr1Str= document.getElementById("arrOne").value ;
    arr2Str= document.getElementById("arrTwo").value ;

    var arr1=arr1Str.split(/\s+/);// splitting with white space... and storing in an array
    var arr2=arr2Str.split(/\s+/);// splitting with white space... and storing in an array 
    
    var arrSum=[];
    var arrProd=[];
    
    for(index=0;index<arr1.length;index++){
      
     arrSum[index]=adder(parseInt(arr1[index]),parseInt(arr2[index]));
     arrProd[index]=multplier(parseInt(arr1[index]),parseInt(arr2[index]));
    }
    
    console.log(arrSum);
    console.log(arrProd);
    document.getElementById("resultarr").innerHTML="Sum : ["+arrSum+"]";
}
function arrayMultiplier(){
    arr1Str= document.getElementById("arrOne").value ;
    arr2Str= document.getElementById("arrTwo").value ;
    var arr1=arr1Str.split(/\s+/);// splitting with white space... and storing in an array
    var arr2=arr2Str.split(/\s+/);// splitting with white space... and storing in an array 
    var arrProd=[];
    
    for(index=0;index<arr1.length;index++){
     arrProd[index]=multplier(parseInt(arr1[index]),parseInt(arr2[index]));
    }
    console.log(arrProd);
    document.getElementById("resultarr").innerHTML="Product : ["+arrProd+"]";
}
function sumAndAverage(){
    var arr1Sum=0;
    var arr2Sum=0;
    arr1Str= document.getElementById("arrOne").value ;
    arr2Str= document.getElementById("arrTwo").value ;
    var arr1=arr1Str.split(/\s+/);// splitting with white space... and storing in an array
    var arr2=arr2Str.split(/\s+/);// splitting with white space... and storing in an array 
   for (index =0;index<arr1.length;index++){
    arr1Sum+=parseInt(arr1[index]);
    arr2Sum+=parseInt(arr2[index]);
   }
   document.getElementById("arr1Sum").innerHTML="Array One Sum = "+arr1Sum;
   document.getElementById("arr2Sum").innerHTML="Array Two Sum  = "+arr2Sum;
   document.getElementById("arr1Average").innerHTML="Array One Average  = "+ arr1Sum/arr1.length;
   document.getElementById("arr2Average").innerHTML="Array Two Average  = "+ arr2Sum/arr2.length; 


}
function adder(valOne, valTwo)
{
    return valOne+valTwo;

}
function multplier(valOne, valTwo)
{
 return valOne*valTwo; 
}
function displayer(space)
{
    return space;
}
