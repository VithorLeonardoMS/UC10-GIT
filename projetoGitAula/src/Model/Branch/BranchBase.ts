
const rl = require('readline-sync')


export class Branch {
    public nome: String
    public dataCriacao: string 
    public commits:string[]
    public branchPai: Branch 
    public historicoCommits: string[]
    public tipo: string
    public identificador: number = 0 // errado

    constructor(nome:string, dataCriacao:string, identificador:number){
        this.identificador = identificador
        this.nome = nome
        this.dataCriacao = dataCriacao
        this.commits = []
        this.historicoCommits = []
    }

    getBranch():string{
        return(`
        Nome: ${this.nome}
        Data de criação: ${this.dataCriacao}
        Branch pai: ${this.branchPai}
        Tipo: ${this.tipo}
        `)
    }
    public criarCommit(mensagem:string):void{
        this.commits.push(mensagem)
        this.historicoCommits.push(mensagem)
        }

    public merge(outroBranch:Branch){
        for(let i = 0; i < outroBranch.commits.length; i++){
            this.commits.push(outroBranch.commits[i])
        }
    }

    public checkout(){
        
    }

    public mostrarHistotico(){
        console.log(this.historicoCommits)
    }
}
