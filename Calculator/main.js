
let string="";//全局变量

function display(event) {
    let accumulator=document.querySelector('div.accumulator');
    let value=event.target.innerText;
    string+=value;
    accumulator.innerHTML=string;
}


//按=进行运算
function count() {
    
}
//按CE删除所有数字
function remove() {
    string="";
}