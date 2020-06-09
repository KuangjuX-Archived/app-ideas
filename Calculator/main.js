let string="";//全局字符串

let value=0;//全局计算结果
let timestamp=0;//时间戳，记录按运算符数量

function display(number) {
    let accumulator=document.querySelector('div.accumulator');
    string+=number;
    accumulator.innerHTML=string;
}

function displayResult() {
    if(timestamp>=2){
        let i=0;
        for(i;i<string.length-1;i++){
            if(string[i]==='+'||string[i]==='-'||string[i]==='x'||string[i]==='/'||string[i]==='%'){
                break;
            }
        }
        let num1=Number(string.slice(0,i));
        let num2=Number(string.slice(i+1,string.length));
        let result=0;
        switch (string[i]) {
            case '+':
                result=num1+num2;
                break;
            case '-':
                result=num1-num2;
                break;
            case 'x':
                result=num1*num2;
                break;
            case '/':
                result=num1/num2;
                break;
            case '%':
                result=num1%num2;
                break;
        }

        document.querySelector('div.total').innerHTML=String(result);
        string=String(result);
        timestamp--;
    }
}
//按运算符进行运算
function count(operator) {
    /*string+=operator;*/
    if(operator==='='){
        timestamp++;
        displayResult();
        timestamp=0;
        return;
    }
    timestamp++;
    displayResult();
    string+=operator;
}
//按CE删除所有数字
function remove() {
    string="";
    document.querySelector('div.accumulator').innerHTML=string;
    document.querySelector('div.total').innerHTML="";
    timestamp=0;

}