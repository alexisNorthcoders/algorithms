export default function topKFrequent(input: number[], k: number) {
    const map = new Map()
    for (let i = 0; i < input.length; i++) {
        let value = map.get(input[i])
        
        if (value) {
            value++
            map.set(input[i], value)
            
        }
        else {
            map.set(input[i], 1)
        }
    }
    const sortedEntries = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
    const result = sortedEntries.map(entry=>entry[0]).slice(0,k)
    return result

}