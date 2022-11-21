let cadastrados = []
let pessoa = {nome:"", senha:0, id:0}

let nome_p = window.document.getElementById("inp-no")
let senha_p = window.document.querySelector("input#inp-sen")
let nome_b = window.document.getElementById("inp-b")
let res = window.document.getElementById("res")

function cadastrar(){
    let no = String(nome_p.value)
    let se = Number(senha_p.value)
    pessoa.nome = no
    pessoa.senha =se
    cadastrados.push(pessoa)
   
    
};

function buscar_c(){
let no_b = String(nome_b.value)
for(let i = 0; i < cadastrados.length; i++){
pessoa = cadastrados[i]
if(no_b === pessoa.nome)
res.innerHTML+=`Nome:${pessoa.nome}<br> senha:${pessoa.senha}<hr>`
  }
if(no_b!== pessoa.nome)
    alert(`Nome ${no_b} nao encontrado`)
};
