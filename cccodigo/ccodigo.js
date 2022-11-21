let nump = []
let numi = []

for(let i = 0; i < 100; i++){
    if(i % 2 == 0){
        nump.push(i)

    }else{
        numi.push(i)
    }

}
for (const ele of nump){
    console.log(ele +' é um número Par.')
}

console.log('Total de pares foram:'+ nump.length)
console.log('--------------------------------------')
 for(const ele of numi){
   console.log(ele + ' é um número Impa')
 }
 console.log('Total de impares:'+ numi.length)