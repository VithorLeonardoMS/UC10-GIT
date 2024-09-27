import { branchAtual } from "./variaveis"



function analizarMenus(tipo:string):string{
    switch(branchAtual.tipo){
        case 'BranchMaster':
            return `Opcoes para ${branchAtual.tipo}:
            a- Criar Branch Develop
            b- Criar Branch Feature
            c- Criar Branch Hot Fix
            d- Criar Branch Release
            `
            break
        case 'BranchDevelop':
            return `Opcoes para ${branchAtual.tipo}:
            a- Finalizar Sprint`
            break
        case 'BranchFeature':
            return `Opcoes para ${branchAtual.tipo}:
            a- Implementar funcionalidade`
            break
        case 'BranchHotFix':
            return `Opcoes para ${branchAtual.tipo}:
            a- Corrigir Bug`
            break
        case 'BranchRelease':
            return `Opcoes para ${branchAtual.tipo}:
            a- Promover para produção`
            break
            default:
                return ''
            break
    }
}
