
import { Branch } from './branch'
import { Commit } from './commit'
import { Blob } from './blob'
import { Repositorio } from './repositorio'

let blob1 = new Blob('jbjbvhjb')
let commit1 = new Commit()
commit1.adicionarBlob(blob1)
let branch1 = new Branch()
let repositorio1 = new Repositorio()
