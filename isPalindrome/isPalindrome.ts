export default function isPalindrome(string: string): boolean {
    const regex = /[a-z0-9]/i
    let right: number = string.length - 1
    let length = string.length
    for (let i = 0; i < length / 2; i++) {
        const char = string[i].toLocaleLowerCase();
        if (!regex.test(char)) {
            length++
            continue
        }
        while (!regex.test(string[right])) right--
        if (char !== string[right].toLocaleLowerCase()) return false
        else {
            right--

        }
    }
    return true
}