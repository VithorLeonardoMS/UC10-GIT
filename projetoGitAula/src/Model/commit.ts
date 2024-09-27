import { Blob } from "./blob"

const rl = require('readline-sync')

export class Commit{
    public blobs:Blob[]

    constructor(){
        this.blobs = []
    }
    adicionarBlob(blob:Blob):void{
        this.blobs.push(blob)
    }
}