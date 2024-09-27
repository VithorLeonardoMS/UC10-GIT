
import { Commit } from '../src/Model/commit'
import { Blob } from '../src/Model/blob'
import { Repositorio } from '../src/Model/repositorio'
import { Branch } from '../src/Model/Branch/BranchBase'

let blob1 = new Blob('jbjbvhjb')
let commit1 = new Commit()
commit1.adicionarBlob(blob1)
let branch1 = new Branch('','')
let repositorio1 = new Repositorio()
