let num1 = window.document.querySelector('input#inp-n1')
function dividir(){
    res.innerHTML= ''
    let n1 = Number(num1.value)
    if(n1 <= -1){
        alert(`Numero ${n1} ivalido foi considerado o numero 1`)
        n1 = 1
    } if(n1>=11){
          alert(`Número ${n1} invalido, foi considerado o numero 10`)  
          n1 = 10   
        }
        for(let i = 1; i < 11; i++){
            let re1 = Math.floor(n1/i)
            res.innerHTML+= `${n1}/${i}=${re1} <br>`
        }
        n1.value= ""
        
  };

