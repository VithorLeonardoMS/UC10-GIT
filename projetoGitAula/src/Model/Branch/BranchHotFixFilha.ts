import { listaBranchHotFix } from "../../Utils/variaveis"
import { Branch } from "./BranchBase"



export class BranchHotFix extends Branch{

    constructor(nome:string, dataCriacao:string, branchPai:Branch){
        super(nome,dataCriacao, listaBranchHotFix.length)
        this.branchPai = branchPai
        this.tipo = 'BranchHotFix'
    }

    public corrigirBug(descricao:string){
        this.commits.push(descricao)
    }
}
