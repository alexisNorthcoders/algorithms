// brute force solution
export default function minEatingSpeed(piles: number[], h: number): number {
    let k = 1
    let lapsedTime = 0
    while (true) {
        for (let i = 0; i < piles.length; i++) {
            let currentBananaPile = piles[i]
            while (currentBananaPile > 0) {
                currentBananaPile -= k
                lapsedTime++
                if (i === piles.length - 1 && currentBananaPile <= 0) {
                    console.log(k)
                    return k
                }
                else if (lapsedTime >= h) { break }
            }
            if (lapsedTime >= h) {
                k++
                lapsedTime = 0
                break
            }
        }
    }
}