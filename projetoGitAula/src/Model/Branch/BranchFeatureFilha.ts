import { listaBranchFeature } from "../../Utils/variaveis"
import { Branch } from "./BranchBase"



export class BranchFeature extends Branch{

    constructor(nome:string, dataCriacao:string, branchPai:Branch){
        super(nome,dataCriacao, listaBranchFeature.length)
        this.branchPai = branchPai
        this.tipo = 'BranchFeature'
    }

    implementarFuncionalidade(descricao:string){
        this.commits.push(descricao)
    }
}