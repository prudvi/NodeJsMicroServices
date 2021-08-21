const schedule = require('node-schedule');
const { processResponse } = require('./stockutil');
const https = require('https');

const axios = require('axios');
const url = `https://api.bseindia.com/BseIndiaAPI/api/AnnGetData/w?strCat=-1&
                    strPrevDate=20210818&strScrip=&strSearch=P&strToDate=20210818&strType=C`;

const job = schedule.scheduleJob('*/10 * * * * *', async function(){
    console.log('Executes the sceduler for every 10Sec!', new Date());
    const response = await axios.get(url);
    let processedData = await processResponse(response.data);
    console.log(processedData?.length);
});