import { BranchDevelop } from "../Model/Branch/BracnhDevelop"
import { Branch } from "../Model/Branch/BranchBase"
import { BranchFeature } from "../Model/Branch/BranchFeatureFilha"
import { BranchHotFix } from "../Model/Branch/BranchHotFixFilha"
import { BranchMaster } from "../Model/Branch/BranchMaster"
import { BranchRelease } from "../Model/Branch/BranchRelease"


export function indiceExiste(listaClasse:Branch[] | BranchDevelop[] | BranchFeature[] | BranchHotFix[] | BranchMaster[] | BranchRelease[], indice:number):Boolean{
    if(listaClasse.length > indice, indice > -1){
        return true
    } else {
        return false
    }
    }