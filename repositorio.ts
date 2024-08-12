

const rl = require('readline-sync')

export class Repositorio{
    blob: string[]
    commits: string[]

    constructor(){
        this.blob = []
        this.commits = []
    }

    indexRepositorio(blob:string):void{
        let pergunta = rl.question('Tem certeza que deseja inserir esse blob nos commits?[responda "sim" ou "nao"] ').toLowercase()

        if(pergunta === 'sim'){
            this.commits.push(blob)
            console.log('Blob inserido.')
        } else{
            console.log('Blob não foi inserido.')
        }
    }

    head():string{
        return this.commits[this.commits.length - 1]
    }

    branch():Repositorio{
        let copia = new Repositorio()
        copia.blob = this.blob
        copia.commits = this.commits
        return copia
    }
}