

const resSuccess = (data) => {
    const schema = {
        status: "Success",
        message: data.message,
        data: data.data
    }

    return schema
}

module.exports = {
    resSuccess:resSuccess
}