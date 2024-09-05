function avoidFlood(rains: number[]): number[] {
    const ans = new Array<number>(rains.length).fill(-1)
    const lakesFull = new Map<number, number>()
    const sunnyDays: number[] = []

    for (let [index, rain] of rains.entries()) {
        if (rain > 0) {
            if (lakesFull.has(rain)) {
                const dryDay = sunnyDays.findIndex(e => e > (lakesFull.get(rain) ?? -1))
                if (dryDay === -1) return []
                ans[sunnyDays.splice(dryDay, 1)[0]] = rain
            }
            lakesFull.set(rain, index)
        } else {
            sunnyDays.push(index)
        }
    }

    for (let day of sunnyDays) {
        ans[day] = 1
    }

    return ans
};

// test
const rains = [1,2,0,0,2,1]
console.log(avoidFlood(rains))