const Result = {}

Result.commonResult = function (code, ...result) {
    return {
        code,
        result
    }
}

Result.pageResult = function (code, nowPage, limit, totalNumber, result) {
    return {
        code,
        nowPage,
        totalPage: Math.ceil(totalNumber / limit),
        totalNumber,
        result
    }
}
module.exports = Result
