
let c_senha = []
let c_nome = []
let c_id = []
let nome = window.document.querySelector('input#inp-nome')
let senha = window.document.querySelector('input#inp-numero')
let nome2 = window.document.querySelector('input#inp-nome2')
  nome.focus()

         
       function cadastrar(){

         let nom = String(nome.value)
         let sen = Number(senha.value)
       if( nom.length <=2 )
       do {
         alert(`O nome ${nom}, é muito pequeno! Digite um nome com três caracteres ou mais.`)
         let n = nom.length
       } while (n <=2);
      
       if(sen <= 999)
       
       alert(`A senha ${sen}, é muito pequena. Foi conciderada a senha ${sen = Math.floor(Math.random()*(9999 -1000 + 100)+1000)}`)

       let id = Math.floor(Math.random()*(9999 - 1000 + 100)+1000)

       if(c_id.includes(id) )
          do {
       id = Math.floor(Math.random()*(9999 - 1000 + 100)+1000) 
         
            } while (c_id.includes(id) !== true);

       c_id.push(id)
       c_nome.push(nom)
       c_senha.push(sen)
        nome.value = ''
        senha.value=''
       
       };

       function m_cadastros(){
         res.innerHTML=""
         for(let i =0; i < c_nome.length; i++){
           res.innerHTML+= `Nome:${c_id[i]}.${c_nome[i]}<br> Senha:${c_senha[i]}<hr>`


         }
        
       };
       function esconder(){
         res.innerHTML= ""
       };


       function p_cadastro(){
          let nom = String(nome2.value)
        

         if(c_nome.length === 0)
         do {
           alert('Não há registros no servidor')
         }while (c_nome.length !== 0);
         
         
         if(nom.length <= 2 && nom.length >= 1)
        do {
          alert(`ERRO!So nomes com 3 ou mais caracteres sao aceitos`)
        } while (nom.length >= 3 );

          if(nom.length >= 3){
          let n = c_nome.indexOf(nom)
          }
          if(n === -1)
          alert(`Nome ${nom} nao encontrado`)

          if(n !== -1)
          resb.innerHTML = `Nome:${c_id[n]}.${c_nome[n]}<br> Senha:{c_senha}`
      }
    