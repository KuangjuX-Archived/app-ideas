function Count(BinaryNumber) {
    let length=BinaryNumber.length;
    let sum=0;
    for(let i=length-1;i>=0;i--){
        if(Number(BinaryNumber[i])!==0||Number(BinaryNumber[i])!==1){
            alert("Please enter a correct binary number.");
            return 0;
        }
        else {
            sum += Number(BinaryNumber[i]) * 2 ** (length - i - 1);
        }
    }
    return sum;
}

function convert() {
 let BinaryNumber=document.getElementById("binary").value;
 if(BinaryNumber==null||BinaryNumber==="undefined"){
     alert("Please enter a binary number.");
 }else {
     document.getElementById("decimal").value=Count(BinaryNumber);
 }
}
