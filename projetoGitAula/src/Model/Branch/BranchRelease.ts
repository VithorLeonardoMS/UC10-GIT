import { listaBranchRelease } from "../../Utils/variaveis"
import { Branch } from "./BranchBase"



export class BranchRelease extends Branch{

    constructor(nome:string, dataCriacao:string, branchPai:Branch){
        super(nome,dataCriacao, listaBranchRelease.length)
        this.branchPai = branchPai
        this.tipo = 'BranchRelease'
    }
    
    public promoverParaProducao(){
        console.log('Os commits estão prontos e podem ser lançadas para produção')
    }
}
