'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controller = require('./controller');
const mail = require('./../common/mail');

module.exports = function(app) {   
    app.use(bodyParser.json());
    app.get('/heroes', (req, res) => { 
        console.log('Returning heroes list');
        mail.sendMail();
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
    app.use('/img', express.static(path.join(__dirname,'img')));
};

