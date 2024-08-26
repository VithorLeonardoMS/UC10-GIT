import { Commit } from "./commit";
import { Blob } from './blob'
const rl = require('readline-sync')

export class Branch {
    commits:Commit[]
constructor(){
    this.commits = []
}

head():Commit{
    return this.commits[this.commits.length - 1]
}

BranchIndex(commit:Commit):void{
    let pergunta = rl.question('Tem certeza que deseja adicionar este commit no branch?[sim ou nao] ')
    if(pergunta.toLowerCase() === 'sim'){
        this.commits.push(commit)
        console.log('Commit adicionada.')
    } else if(pergunta.toLowerCase() === 'nao'){
        console.log('Commit não adicionada.')
    } else{
        console.log('Resposta inválida... ')
        this.BranchIndex(commit)
    }
    }
historico():void{
    console.log(this.commits)
}
merge(outroBranch:Branch){
    for(let i = 0; i < outroBranch.commits.length; i++){
        this.commits.push(outroBranch.commits[i])
    }
}

}

