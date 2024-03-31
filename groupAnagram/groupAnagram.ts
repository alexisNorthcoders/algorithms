function groupAnagram(stringArray:string[]):string[][]{
    const map = new Map()
    for (const word of stringArray){
        const sortedWord = word.split("").sort().join()
        const mapValues = map.get(sortedWord) || []
        mapValues.push(word)
        map.set(sortedWord,mapValues)
    }

    return [...map.values()]
}