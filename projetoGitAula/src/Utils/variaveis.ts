import { BranchDevelop } from "../Model/Branch/BracnhDevelop"
import { BranchMaster } from "../Model/Branch/BranchMaster"
import { BranchFeature } from "../Model/Branch/BranchFeatureFilha"
import { BranchHotFix } from "../Model/Branch/BranchHotFixFilha"
import { BranchRelease } from "../Model/Branch/BranchRelease"
import { Branch } from "../Model/Branch/BranchBase"


export let listaBranchMaster:BranchMaster[] = []
export let listaBranchDevelop:BranchDevelop[] = []
export let listaBranchHotFix:BranchHotFix[] = []
export let listaBranchFeature:BranchFeature[] = []
export let listaBranchRelease:BranchRelease[] = []

export let branchAtual:Branch | BranchDevelop | BranchFeature | BranchHotFix | BranchMaster | BranchRelease

export function retornarBM(branchBase:any):BranchMaster{
    let encontrada = listaBranchMaster.find((elemento:BranchMaster) => {elemento.identificador === branchBase.identificador})
    if(encontrada){
        return encontrada
    } 
    return new BranchMaster('erro getBrantMasterAtual()', '')
}

export function retornarBDvp(branchBase:any):BranchDevelop{
    let encontrada = listaBranchDevelop.find((elemento) => {elemento.identificador === branchBase.identificador})
    if(encontrada){
        return encontrada
    } 
    return new BranchDevelop('erro getBrantMasterAtual()', '', retornarBM(branchAtual))
}


export function retornarBFtr(branchBase):BranchFeature{
    let encontrada = listaBranchFeature.find((elemento) => {elemento.identificador === branchBase.identificador})
    if(encontrada){
        return encontrada
    } 
    return new BranchFeature('erro getBrantMasterAtual()', '', retornarBM(branchAtual))
}


export function retornarBHFix(branchBase):BranchHotFix{
    let encontrada = listaBranchHotFix.find((elemento) => {elemento.identificador === branchBase.identificador})
    if(encontrada){
        return encontrada
    } 
    return new BranchHotFix('erro getBrantMasterAtual()', '', retornarBM(branchAtual))
}