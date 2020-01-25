import assert from 'assert'
import * as testSuite from '../numberToText'

describe('numberToText test suite', () => {
    it('should calculate the numbers correctly', () => {
        let tests: any = [
            { num: 5, expected: 'five' },
            { num: 10, expected: 'ten' },
            { num: 13, expected: 'thirteen' },
            { num: 16, expected: 'sixteen' },
            { num: 21, expected: 'twenty one' },
            { num: 30, expected: 'thirty' },
            { num: 42, expected: 'fourty two' },
            { num: 100, expected: 'one hundred' },
            { num: 101, expected: 'one hundred one' },
            { num: 110, expected: 'one hundred ten' },
            { num: 150, expected: 'one hundred fifty' },
            { num: 2000, expected: 'two thousand' },
            { num: 2100, expected: 'two thousand one hundred' },
            { num: 2105, expected: 'two thousand one hundred five' },
            { num: 2480, expected: 'two thousand four hundred eighty' },
            { num: 25000, expected: 'twenty five thousand' },
            { num: 25000000, expected: 'twenty five million' },
            { num: 3552923202, expected: 'three billion five hundred fifty two million nine hundred twenty three thousand two hundred two' },
            { num: 5905385238923578253, expected: 'five quintillion nine hundred five quadrillion three hundred eighty five trillion two hundred thirty eight billion nine hundred twenty three million five hundred seventy eight thousand' },
        ]
        tests.forEach((test: any) => {
            assert.equal(testSuite.numberToText(test.num), test.expected)
        })
    })
})
