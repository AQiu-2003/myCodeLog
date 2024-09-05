function maxConsecutiveAnswers(answerKey: string, k: number): number {
    let left = 0, right = 0
    let res = 0
    while (right < answerKey.length) {
        const temp = getNum(answerKey.slice(left, right+1), k)
        if (temp !== -1) {
            res = Math.max(res, temp)
            right++
        } else {
            left++
        }
    }
    return res
};

function getNum(str: string, k: number): number {
    const count_F = [...str].filter(char => char === 'F').length
    const count_T = str.length - count_F
    if (Math.min(count_F, count_T) <= k) {
        return str.length
    } else {
        return -1
    }
}