
var num1 = window.document.getElementById('tx-1')

num1.focus()

function subtracao(){
res.innerHTML=''
let n1 = Number(num1.value)

if(n1 <= 0){
alert('Numero '+ n1 + ' invalido. foi concidarado o numero 1')
n1 = 1
}else if(n1 >=11){
window.alert('Numero '+n1+ ' invalido. Foi conciderado o numero 10')
n1 = 10
}
for(let i = 1; i < 11; i++){
let r1 = i-n1
res.innerHTML+= i+ ' - ' + n1+ ' = '+ r1 + '<br>'

}
num1.value=''

};




































