import { BranchDevelop } from "../Model/Branch/BracnhDevelop"
import { BranchMaster } from "../Model/Branch/BranchMaster"
import { branchAtual, listaBranchDevelop, listaBranchFeature, listaBranchHotFix, listaBranchRelease, retornarBM } from "../Utils/variaveis"

let rl = require('readline-sync')

export function menuCriacao(){ // Para Branch master
    let bMasterAtual:BranchMaster = retornarBM(branchAtual)
    let menu = true
    while(menu){
        console.log(`
        0 - Voltar
        1 - Criar BranchDevelop
        2 - Criar
        `)

        let option = rl.questionInt('Qual a opcao desejada? ')
        switch(option){
            case 0:
                menu = false
                break
            case 1:
                let novaD = bMasterAtual.criarDevelop()
                listaBranchDevelop.push()
                break
            case 2:
                let novaHF = bMasterAtual.criarHotFix()
                listaBranchHotFix.push()
                break
            case 3:
                let novaF = bMasterAtual.criarFeature()
                listaBranchFeature.push()
                break
            case 4:
                let novaR = bMasterAtual.criarRelease()
                listaBranchRelease.push()

        }
    }


}
