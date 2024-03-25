export default function findWordIndex (string:string,word:string){

    const stringSplit = string.split(" ")
    
    for (let index = 0; index < stringSplit.length; index++) {
        const element = stringSplit[index];
        if (element === word){
            return index+1
        }
        
    }
    return 0
}