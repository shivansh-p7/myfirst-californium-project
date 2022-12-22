const { default: mongoose } = require("mongoose")
const PublisherModel= require("../models/publisherModel")


const createPublisher= async function (req, res) {
    let author = req.body
    let publisherCreated = await PublisherModel.create(author)
    res.send({data: publisherCreated})
}

module.exports.createPublisher=createPublisher;