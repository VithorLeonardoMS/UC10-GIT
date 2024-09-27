import { BranchMaster } from "../Model/Branch/BranchMaster"
import { escolherBranch } from "../Utils/escolherBranch"
import { branchAtual, listaBranchMaster } from "../Utils/variaveis"
import { verBranchs } from "../Utils/verBranchs"


const rl = require('readline-sync')

let menu:boolean = true
function menuPrincipal(){
    
    let menuBranch = ''
    while(menu){
        console.log(`
        ---------------------------
        branch atual[${branchAtual.getBranch()}]
        0- Sair
        1- Criar brench Master
        2- Ver brenchs
        3- Acessar brench
        ${menuBranch}
        ----------------------------`)
    let option = rl.questionInt('Escolha: ')

    switch(option){
        case 0:
            menu = false
            break
        case 1:
            let nome = rl.question('Nome: ')
            let dataCriacao = rl.question('Data de criacao: ')
            listaBranchMaster.push(new BranchMaster(nome,dataCriacao))
            break
        case 2:
            let tipo = rl.question(`
            ~BranchDevelop - BranchFeature - BranchHotFix - BranchRelease - Todas~
            Qual o tipo de branchs que deseja ver? `)
            verBranchs(tipo)
            break
        case 3:
            let escolhaTipo = rl.question('Qual tipo de brench que deseja acessar? ')
            let escolhaIndice = rl.question('Qual indice da brench que deseja acessar? ')
            escolherBranch(escolhaTipo, escolhaIndice)
            break       

    }
    }

}
