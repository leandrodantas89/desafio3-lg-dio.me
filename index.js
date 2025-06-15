/*Criando a classe do herói*/

class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
}
    /*Criando o método atacar*/
    atacar(){
        let ataque

        if(this.tipo==="mago" || this.tipo==="Mago"){
            ataque = "Usou magia"
        }
        else if (this.tipo==="guerreiro" || this.tipo==="Guerreiro"){
            ataque = "Usou espada"
        }
        else if(this.tipo==="monge" || this.tipo==="Monge"){
            ataque = "Usou artes marciais"
        }
        else if(this.tipo==="ninja" || this.tipo==="Ninja"){
            ataque = "Usou shuriken"
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
    

    }

   /*Solicitando os dados para o usuário */
   let nome = prompt("Qual é o nome do herói?")
   let idade = parseInt(prompt("Qual é a idade do herói?"))
   let tipo = prompt("Qual é o tipo do herói?")

   let meuHeroi = new heroi(nome, idade, tipo)

   /*retorno para o usuário*/
   meuHeroi.atacar()


    
