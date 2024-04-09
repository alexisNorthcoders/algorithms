// brute force solution
export function minEatingSpeed(piles: number[], h: number): number {
    let k = 1
    let lapsedTime = 0
    while (true) {
        for (let i = 0; i < piles.length; i++) {
            let currentBananaPile = piles[i]
            lapsedTime += Math.ceil(currentBananaPile / k)
            if (i === piles.length - 1 && lapsedTime <= h) {
                return k
            }
            if (lapsedTime >= h) {
                k++
                lapsedTime = 0
                break
            }
        }
    }
}

// binary search solution

export function binMinEatingSpeed(piles: number[], h: number): number {
    piles.sort((a, b) => a - b)
    let lapsedTime = 0
    let startK = 1
    let endK = piles[piles.length - 1]
    let result = endK

    while (startK <= endK) {
        const k = Math.floor((startK + endK) / 2)

        for (let i = 0; i < piles.length; i++) {
            let currentBananaPile = piles[i]
            lapsedTime += Math.ceil(currentBananaPile / k)
        }
        if (lapsedTime <= h) {
            endK = k - 1
            lapsedTime = 0
            if (k < result) {
                result = k
            }

        }
        else if (lapsedTime > h) {
            startK = k + 1
            lapsedTime = 0
        }
    }
    return result
}
