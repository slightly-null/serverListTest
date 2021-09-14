module.exports = async (req, res) => {
    const value = test(req.query.number)
    const data = {
        msg: value
    };
    res.status(200).json(data);
}

function test(number) {
    return number + 1;
}
