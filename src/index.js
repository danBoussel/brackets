module.exports = function check(str, bracketsConfig) {
    // your solution
    for (let i = 0; i < bracketsConfig.length; i++) {
        if (str.includes(bracketsConfig[i].join(''))) {
            str = str.replace(bracketsConfig[i].join(''), '')
            if (str.length <= 0) return true
        }
    }
    return false
}