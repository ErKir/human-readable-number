module.exports = function toReadable (number = 0) {
    const arr = number.toString().split('');
    const humanNumber = {
        0 : 'zero',
        1 : 'one',
        2 : 'two',
        3 : 'three',
        4 : 'four',
        5 : 'five',
        6 : 'six',
        7 : 'seven',
        8 : 'eight',
        9 : 'nine',
        10 : 'ten',
        11 : 'eleven',
        12 : 'twelve',
        13 : 'thirteen',
        15 : 'fifteen',
        18 : 'eighteen',
        20 : 'twenty',
        30 : 'thirty',
        40 : 'forty',
        50 : 'fifty',
        60 : 'sixty',
        70 : 'seventy',
        80 : 'eighty',
        90 : 'ninety'
    };
    if (humanNumber[number] !== undefined) {
        return humanNumber[number];
    };
    const teen = 'teen';
    const hundred = 'hundred';
    const getDecimals = (num) => {
        const first = num[0];
        const second = num[1];
        if (humanNumber[num.join('')] !== undefined) {
            return humanNumber[num.join('')];
        } else if (first === '0') {
            return `${humanNumber[second]}`;
        } else if (first === '1') {
            return `${humanNumber[second]}${teen}`;
        } else {
            const newKey = `${first}0`;
            return `${humanNumber[newKey]} ${humanNumber[second]}`;
        }
    };
    const getHundreds = (num) => {
        const first = num[0];
        const second = num[1];
        const third = num[2];
        if (second === '0' && third === '0') {
            return `${humanNumber[first]} ${hundred}`;
        }
        num.shift();
        return `${humanNumber[first]} ${hundred} ${getDecimals(num)}`;
    };
    if (arr.length === 2) {
        return getDecimals(arr);
    } else {
        return getHundreds(arr);
    };
};
