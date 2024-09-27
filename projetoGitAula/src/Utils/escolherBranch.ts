import { Branch } from "../Model/Branch/BranchBase";
import { BranchMaster } from "../Model/Branch/BranchMaster";
import { indiceExiste } from "./indiceexiste";
import { listaBranchDevelop, listaBranchFeature, listaBranchHotFix, listaBranchMaster, listaBranchRelease } from "./variaveis";

export function escolherBranch(tipo:string, indice:number):Branch | void{
    switch(tipo){
        case 'BranchMaster':
            if(indiceExiste(listaBranchMaster, indice)){
                return listaBranchMaster[indice]
            } else{
                console.log('indice inexistente');
            }
            break
        case 'BranchDevelop':
            if(indiceExiste(listaBranchDevelop, indice)){
                return listaBranchDevelop[indice]
            } else{
                console.log('indice inexistente');
            }
            break
        case 'BranchFeature':
            if(indiceExiste(listaBranchFeature, indice)){
                return listaBranchFeature[indice]
            } else{
                console.log('indice inexistente');
            }
            break
        case 'BranchHotFix':
            if(indiceExiste(listaBranchHotFix, indice)){
                return listaBranchHotFix[indice]
            } else{
                console.log('indice inexistente');
            }
            break
        case 'BranchRelease':
            if(indiceExiste(listaBranchRelease, indice)){
                return listaBranchRelease[indice]
            } else{
                console.log('indice inexistente');
            }
            break
            default:
                console.log('Opção inválida')
    }
}

