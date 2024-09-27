
import { listaBranchDevelop } from "../../Utils/variaveis"
import { Branch } from "./BranchBase"
import { BranchRelease } from "./BranchRelease"



export class BranchDevelop extends Branch{
    constructor(nome:string, dataCriacao:string, branchPai:Branch){
        super(nome,dataCriacao, listaBranchDevelop.length)
        this.branchPai = branchPai
        this.tipo = 'BranchDevelop'
    }
    public finalizarSprint(branchRelease:BranchRelease){
        branchRelease.merge(this)
    }
}
