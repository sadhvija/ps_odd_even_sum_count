
//WAP to print even sum is more or odd sum is more 
//input: 2763
//output: odd sum is more

num=prompt("enter a number:")
oddSum=0,evenSum=0
for(i=0;i<=num.length;i++)
{
    if(num[i]%2==0){
        evenSum=evenSum+Number(num[i])
    }
    if(num[i]%2==1){
        oddSum=oddSum+Number(num[i])
    }
}
console.log("odd sum of "+num+" is :"+oddSum)
console.log("even sum of "+num+" is :"+evenSum)
if(oddSum>evenSum){
    console.log("odd sum is more")
}
else{
    console.log("even sum is more")
}


//2) WAP to print even numbers are more or odd numbers are more
//input: 5332
//output: Odd numbers are more
//input: 8176
//output: Both are equal
num=prompt("enter a number :")
oddCount=0,evenCount=0
for(i=0;i<num.length;i++){
    if(num[i]%2==0){
        evenCount++
    }
    if(num[i]%2==1){
        oddCount++
    }
}
if(oddCount>evenCount){
    console.log("odd count is more")
}
else if(evenCount<oddCount){
    console.log("even count is more")
}
else{
    console.log("both are equal")
}