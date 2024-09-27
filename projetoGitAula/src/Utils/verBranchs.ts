import { listaBranchDevelop, listaBranchFeature, listaBranchHotFix, listaBranchMaster, listaBranchRelease } from "./variaveis";


export function verBranchs(tipo:string){
    switch(tipo){
        case 'BranchMaster':
            listaBranchMaster.forEach((valorAtual, indice)=>{
                console.log(indice + '-' + valorAtual.getBranch());
            })
            break
        case 'BranchDevelop':
            listaBranchDevelop.forEach((valorAtual,indice)=>{
                console.log(indice + '-' + valorAtual.getBranch())
            })
            break
        case 'BranchFeature':
            listaBranchFeature.forEach((valorAtual, indice)=>{
                console.log(indice + '-' + valorAtual.getBranch())
            })
            break
        case 'BranchHotFix':
            listaBranchHotFix.forEach((valorAtual, indice)=>{
                console.log(indice + '-' + valorAtual.getBranch())
            })
            break
        case 'BranchRelease':
            listaBranchRelease.forEach((valorAtual, indice)=>{
                console.log(indice + '-' + valorAtual.getBranch())
            })
            break
        case 'Todas':
            listaBranchDevelop.forEach((valorAtual,indice)=>{
                console.log(indice + '-' + valorAtual.getBranch())})
            listaBranchRelease.forEach((valorAtual, indice)=>{
                console.log(indice + '-' + valorAtual.getBranch())})
            listaBranchHotFix.forEach((valorAtual, indice)=>{
                console.log(indice + '-' + valorAtual.getBranch())})
            listaBranchMaster.forEach((valorAtual, indice)=>{
                console.log(indice + '-' + valorAtual.getBranch());})
            listaBranchFeature.forEach((valorAtual, indice)=>{
                console.log(indice + '-' + valorAtual.getBranch())})
            break
    }
}