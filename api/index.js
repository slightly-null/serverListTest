module.exports = async (req, res) => {
    const data = {
        msg: "hello world!"
    };
    res.status(200).json(data);
}

module.exports.hello = async (req, res) => {
    const data = {
        msg: "hello world!"
    };
    res.status(200).json(data);
}


module.exports.test = async (req, res) => {
    const data = {
        msg: "hello world!"
    };
    res.status(200).json(data);
}
