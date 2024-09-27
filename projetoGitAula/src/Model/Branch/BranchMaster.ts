import { listaBranchDevelop, listaBranchFeature, listaBranchHotFix, listaBranchMaster, listaBranchRelease } from "../../Utils/variaveis"
import { BranchDevelop } from "./BracnhDevelop"
import { Branch } from "./BranchBase"
import { BranchFeature } from "./BranchFeatureFilha"
import { BranchHotFix } from "./BranchHotFixFilha"
import { BranchRelease } from "./BranchRelease"

let rl = require('readline-sync')

export class BranchMaster extends Branch {

    constructor(nome:string, dataCriacao:string){
        super(nome,dataCriacao, listaBranchMaster.length)
        this.tipo = 'BranchMaster'
    }

    public criarDevelop(){
        let nome = rl.question('Qual o nome da brench? ')
        let dataCriacao = rl.question('Qual a data de criacao? ')
        return new BranchDevelop(nome, dataCriacao, this)
        
    }

    public criarFeature(){
        let nome = rl.question('Qual o nome da brench? ')
        let dataCriacao = rl.question('Qual a data de criacao? ')
        return new BranchFeature(nome, dataCriacao, this)
        
    }
    
    public criarHotFix(){
        let nome = rl.question('Qual o nome da brench? ')
        let dataCriacao = rl.question('Qual a data de criacao? ')
        return new BranchHotFix(nome, dataCriacao, this)

    }

    public criarRelease(){
        let nome = rl.question('Qual o nome da brench? ')
        let dataCriacao = rl.question('Qual a data de criacao? ')
        return new BranchRelease(nome, dataCriacao, this)

    }
}