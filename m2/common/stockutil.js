
let oldRecordUploadEndtime = null;
let lastRecordName = null;
const mail = require('./mail');

const getBonusSplitAndBuyBack = (ID, cName,detailsLink, time, startTime) => {
//    return { ID, time, startTime, name: cName  + ' At ' + time, linkName: detailsLink, 
//                     subject:  "Bonus/Stock Split Happens in Market"};
    if (cName.indexOf('Sub-Division') >= 0 || cName.indexOf('Split') >= 0 || 
            cName.indexOf('Sub-division') >= 0 || cName.indexOf('split') >= 0 ||
            cName.indexOf('Bonus') >= 0) {
        return { ID, time, startTime,name: cName  + ' At ' + time, linkName: detailsLink, 
                    subject:  "Bonus/Stock Split Happens in Market"};
    } else if (cName.indexOf('Buy back') >= 0 || cName.indexOf('Buyback') >= 0 ||
                 cName.indexOf('Buy Back') >= 0) {
        return { ID, time, startTime, name: cName + ' At '+ time, linkName: detailsLink, 
                    subject: "Stock Buy Back Program"};
    } else  if (cName.indexOf('Press Release') >= 0) {
        return { ID,time, startTime, name:  cName + ' At '+ time, linkName: detailsLink, 
                subject: "Announcement under Regulation 30 (LODR)-Press Release / Media Release"};
    } else if (cName.indexOf('Rights Issue') >= 0) {
        return{ ID, time, startTime, name: cName  + ' At ' + time, linkName: detailsLink, 
                 subject: "Rights Issued"};
    }  else if (cName.indexOf("Award_of_Order") >= 0) {
        return { ID,time, startTime, name: cName  + ' At ' + time, linkName: detailsLink, 
                subject: "New Orders for the Company"};
    }
}

const processResponse = async (jsonResponse) => {
    let response = jsonResponse.Table;
    console.log(":::::", response.length);
    let bonusArray = [];
    for (let x=0; x<response.length; x++) {
        let link = `https://www.bseindia.com/xml-data/corpfiling/AttachLive/`+response[x].ATTACHMENTNAME;
        let companyURl = response[x].NSURL;
        let category = response[x].CATEGORYNAME;
        let title = response[x].NEWSSUB;
        let latestRecordUploadtime = response[x].News_submission_dt;
        let latestRecordUploadEndtime = response[x].DissemDT;
        let moreDetails = response[x].More;
        let cName = response[x].NEWSSUB;
        let ID = response[x].NEWSID;
        if (lastRecordName !== null)
            console.error(" Why not sfskfbksfbbdsf:", lastRecordName);
        if (lastRecordName !== null && ID === lastRecordName) {
            console.error(" Why not here");
            break;
        } else {
            let obj = getBonusSplitAndBuyBack(ID,cName, link,latestRecordUploadEndtime, latestRecordUploadtime);
            if (obj)
            bonusArray.push(obj);
        }
    }
    console.log('Name:::', bonusArray);
    if (bonusArray && bonusArray.length > 0) {
       
        lastRecordName = bonusArray[0].ID;
        
        //console.error('Length:::::', bonusArray.length, '>>>>>Important and latestOnlyItems<<<<<', bonusArray[0]);
        const emptyArr = bonusArray;
        
        await mail.sendMail(bonusArray);
        bonusArray = [];
        console.log('lastRecordName:::', lastRecordName, bonusArray);
        return emptyArr;
    }
}

module.exports = {
    processResponse
}