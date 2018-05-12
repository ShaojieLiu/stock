const getData = require('./getData')
const getTxt = require('./getTxt')
const express = require('express')

const app = new express()

// console.log(app)
const param = {
    pagesize: '10',    
}

// getData(res => {
//     const arr = JSON.parse(res.body.split('var yuUlatWp=')[1]).data
//     console.log(getTxt(arr))
// }, param) 

module.exports = (cb, param) => {
    getData(body => {
        const arr = JSON.parse(body.split('var yuUlatWp=')[1]).data
        const txt = (getTxt(arr))
        cb(txt)
    }, param) 
}