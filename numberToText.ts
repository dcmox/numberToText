
const segOne = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']
const prefix = ['twen', 'thir', 'four', 'fif', 'six', 'seven', 'eigh', 'nine']

const digitsToGroup = [
    {digit: 3, text: 'hundred'},
    {digit: 4, text: 'thousand'},
    {digit: 7, text: 'million'},
    {digit: 10, text: 'billion'},
    {digit: 13, text: 'trillion'},
    {digit: 16, text: 'quadrillion'},
    {digit: 19, text: 'quintillion'},
    {digit: 22, text: 'sextillion'},
    {digit: 25, text: 'septillion'},
    {digit: 28, text: 'octillion'},
    {digit: 31, text: 'nonillion'},
    {digit: 34, text: 'decillion'},
    {digit: 37, text: 'undecellion'},
    {digit: 40, text: 'duodecillion'},
    {digit: 43, text: 'tredecillion'},
    {digit: 46, text: 'quattuordecillion'},
    {digit: 49, text: 'quindecillion'},
    {digit: 52, text: 'sexdecillion'},
    {digit: 55, text: 'septen-decillion'},
    {digit: 58, text: 'octodecillion'},
    {digit: 61, text: 'novemdecillion'},
    {digit: 64, text: 'vigintillion'},
]

export const numberToText = (number: any): string => {
    const numString: string = number.toString()
    const digits: number = numString.length

    if (number >= 1 && number <= 12) { return segOne[number - 1]  }
    if (number >= 13 && number <= 19) { return prefix[number - 12] + 'teen' }
    if (number >= 20 && number < 100) {
        return number % 10
            ? prefix[Math.floor(number / 10) - 2] + 'ty' +  ' ' + segOne[number % 10 - 1]
            : prefix[Math.floor(number / 10) - 2] + 'ty'
    }

    let result: string = ''
    let num: string = number.toString()

    const segLength: number = digits % 3
    if (segLength === 0) {
        if (num[0] !== '0') { 
            result += segOne[parseInt(num[0], 10) - 1] + ' hundred '
        }
        num = num.toString().slice(1)
        if (parseInt(num, 10)) {
            result += numberToText(num) + ''
        }
    } else {
        const segment: string = num.substring(0, segLength)
        const comp = parseInt(segment, 10)

        if (comp >= 1 && comp <= 12) {
            result += segOne[comp - 1] + ' '
        }

        if (comp >= 13 && comp <= 19) {
            result += prefix[comp - 12] + 'teen' + ' '
        }

        if (comp >= 20 && comp < 100) {
            result += comp % 10
                ? prefix[Math.floor(comp / 10) - 2] + 'ty ' + segOne[comp % 10 - 1] + ' '
                : prefix[Math.floor(comp / 10) - 2] + 'ty '
        }

        num = num.toString().slice(segLength)

        let dPos: number = 0
        digitsToGroup.forEach((group, index) => { if (group.digit <= digits) { dPos = index } })

        if (dPos) { result += digitsToGroup[dPos].text }
        if (num) { result += ' ' + numberToText(num) }
    }

    return result.trim()
}

export default numberToText
