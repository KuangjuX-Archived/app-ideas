function Count(BinaryNumber) {
    let length=BinaryNumber.length;
    let sum=0;
    for(let i=length-1;i>=0;i--){
        sum+=Number(BinaryNumber[i])*2**(length-i-1);
    }
    return sum;
}

function convert() {
 let BinaryNumber=document.getElementById("binary").value;
 if(BinaryNumber==null||BinaryNumber==="undefined"){
     alert("Please enter a binary number.");
 }else {
     let DecimalNumber=Count(BinaryNumber);
     document.getElementById("decimal").value=DecimalNumber;
 }
}
