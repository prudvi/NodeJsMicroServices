'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controller = require('./controller');
const { processResponse } = require('./../common/stockutil');
const https = require('https');
const { json } = require('body-parser');
const axios = require('axios')

const url = 'https://api.bseindia.com/BseIndiaAPI/api/AnnGetData/w?strCat=-1&strPrevDate=20210812&strScrip=&strSearch=P&strToDate=20210812&strType=C';
module.exports = function(app) {   
    app.use(bodyParser.json());
    app.get('/heroes', (req, res) => { 
        console.log('Returning heroes list');
        res.send(controller.heroes);
    });
    app.get('/powers', (req, res) => {
        console.log('Returning powers list');
        //await sleep(5000);      
          res.send(controller.powers);
    });
    app.post('/hero/**', (req, res) => { 
        const heroId = req.params[0];  
        const foundHero = controller.heroes.find(subject => subject.id == heroId);   
         if (foundHero) {
                 for (let attribute in foundHero) {
                if (req.body[attribute]) {
                    foundHero[attribute] = req.body[attribute];      
                     console.log(`Set ${attribute} to ${req.body[attribute]} in hero: ${heroId}`); 
                }}
                res.status(202).header({Location: `http://localhost:${port}/hero/${foundHero.id}`}).
                send(foundHero);
            } 
        else {
            console.log(`Hero not found.`);res.status(404).send();      
          }    
    });
   
    app.get('/getStockData', async (req, res) => {
        try {
            const response = await axios.get(url);
            let processedData = await processResponse(response.data);
            res.status(200).json({output: processedData});
        } catch (err) {
            // Handle Error Here
            console.error(err);
            res.status(500).json({});
        }
    })
    app.post('/receiveData', async (req, res) => { 
        let data = req.body.data;
        //{AnnualReport: [], presentation: [], outcomes: [], topImportant: []}
        await mail.sendMail(data);
        res.status(200).header({Location: `http://localhost`}).
        send(data);
    });
    app.use('/img', express.static(path.join(__dirname,'img')));
};

