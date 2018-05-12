const http = require('http')
const qs = require('querystring')
const iconv = require('iconv-lite')
// const curl = require('curl')
var request = require('superagent')
// const url1 = 'http://data.eastmoney.com/DataCenter_V3/gdhs/GetList.ashx?reportdate=2017-12-31&market=&changerate==&range==&pagesize=3520&page=1&sortRule=-1&sortType=NoticeDate&js=var%20yuUlatWp&param=&rt=50853273'
// data.eastmoney.com/DataCenter_V3/gdhs/GetList.ashx?reportdate=2017-12-31&market=&changerate==&range==&pagesize=3520&page=1&sortRule=-1&sortType=NoticeDate&js=var%20yuUlatWp&param=&rt=50853273
const baseQuery = {
    reportdate: '2017-12-31',
    market: '',
    changerate: '=',
    range: '=',
    pagesize: '3500',
    page: '1',
    sortRule: '-1',
    sortType: 'NoticeDate',
    js: 'var%20yuUlatWp',
    param: '',
    rt: '50853273',
}
// const content = qs.stringify(query)

const getData = (cb, param={}) => {
    const query = Object.assign({}, baseQuery, param)
    const content = Object.keys(query).map(k => `${k}=${query[k]}`).join('&')
    const protol = 'http://'
    const host = 'data.eastmoney.com'
    const path = '/DataCenter_V3/gdhs/GetList.ashx?'
    const url = protol + host + path + content
    console.log('url:\n', url)
    request
    .get(url, {gzip: true})
    .pipe(iconv.decodeStream('gb2312'))
    .collect(function(err, body) {
        // console.log('GetRes:\n', res)
        // const body = res.text
        // console.log('GetBody:\n', body)
        cb(body)
    })
}

module.exports = getData