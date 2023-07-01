import * as fs from 'fs'


export const  getSums =  (filePath: string):number[] => {
    try{
        const data= fs.readFileSync(filePath,'utf8')
        const sums:number[] = data.split('\n\n').reduce<number[]>((acc,row)=>[...acc,row.split('\n').reduce<number>((acc,curr)=>acc+ +curr,0)],[])
        return sums
    }catch(error){
        console.error("Error occured",error)
        throw error
    }
}
