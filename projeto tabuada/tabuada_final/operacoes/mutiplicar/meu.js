
var num1 = window.document.getElementById('tx-1')

num1.focus()

function multiplicar(){
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
res.innerHTML+= n1+ ' x ' + i + ' = '+ i*n1 + '<br>'

}
num1.value=''

};




































