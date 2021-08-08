let responseCode = 500;
function postData(data){
	var ajaxRequest = new XMLHttpRequest();
	ajaxRequest.onreadystatechange = function(){
		if (ajaxRequest.readyState === 4 && ajaxRequest.status === 200) {
            responseCode = 200;
            let jsonResponse =  JSON.parse(ajaxRequest.responseText);
        }		
	}
	ajaxRequest.open('POST', 'http://localhost:3001/receiveData');
	ajaxRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	ajaxRequest.send(JSON.stringify({data: data}));
}

let output = [];
let bonusArray = [];
function getBonusSplitAndBuyBack(cName,detailsLink, time, startTime) {
    //console.log(type);
    // bonusArray.push({ name: cName  + ' At ' + time, linkName: detailsLink, time, 
    //                 subject:  "Bonus/Stock Split Happens in Market"});
    if (cName.indexOf('Sub-Division') >= 0 || cName.indexOf('Split') >= 0 || 
            cName.indexOf('Sub-division') >= 0 || cName.indexOf('split') >= 0 ||
            cName.indexOf('Bonus') >= 0) {
        bonusArray.push({ time, startTime,name: cName  + ' At ' + time, linkName: detailsLink, 
                    subject:  "Bonus/Stock Split Happens in Market"});
    } else if (cName.indexOf('Buy back') >= 0 || cName.indexOf('Buyback') >= 0 ||
                 cName.indexOf('Buy Back') >= 0) {
        bonusArray.push({ time, startTime, name: cName + ' At '+ time, linkName: detailsLink, 
                    subject: "Stock Buy Back Program"});
    } else  if (cName.indexOf('Press Release') >= 0) {
        bonusArray.push({ time, startTime, name:  cName + ' At '+ time, linkName: detailsLink, 
                subject: "Announcement under Regulation 30 (LODR)-Press Release / Media Release"});
    } else if (cName.indexOf('Rights Issue') >= 0) {
        bonusArray.push({ time, startTime, name: cName  + ' At ' + time, linkName: detailsLink, 
                 subject: "Rights Issued"});
    }  else if (cName.indexOf("Award_of_Order") >= 0) {
        bonusArray.push({ time, startTime, name: cName  + ' At ' + time, linkName: detailsLink, 
                subject: "New Orders for the Company"});
    }
}

let oldRecordUploadtime = null;
let oldRecordUploadEndtime = null;

function GetData(){
    console.log("::Start Time:::", new Date());
	var ajaxRequest = new XMLHttpRequest();
	ajaxRequest.onreadystatechange = function(){
		if (ajaxRequest.readyState === 4 && ajaxRequest.status === 200) {
            //responseCode = 200;
            let jsonResponse =  JSON.parse(ajaxRequest.responseText);
            //console.error(jsonResponse.Table.length)
            let response = jsonResponse.Table;
            for (let x=0; x<response.length; x++) {
                let link = `https://www.bseindia.com/xml-data/corpfiling/AttachLive/`+response[x].ATTACHMENTNAME;
                let companyURl = response[x].NSURL;
                let category = response[x].CATEGORYNAME;
                let title = response[x].NEWSSUB;
                let latestRecordUploadtime = response[x].News_submission_dt;
                let latestRecordUploadEndtime = response[x].DissemDT;
                let moreDetails = response[x].More;
                let cName = response[x].NEWSSUB;

                if (oldRecordUploadtime == latestRecordUploadtime && 
                        oldRecordUploadEndtime == latestRecordUploadEndtime) {
                            break;
                } else {
                    getBonusSplitAndBuyBack(cName, link,latestRecordUploadEndtime, latestRecordUploadtime);
                }
                
            }
            console.error(bonusArray.length);
            if (bonusArray.length) {
                oldRecordUploadEndtime = bonusArray[0].time;
                oldRecordUploadtime = startTime;
            }
            if (bonusArray.length > 0) {
                console.error('>>>>>Important and latestOnlyItems<<<<<', bonusArray);
                /* Send an API Request to the Rest API with Body Content , where that will send Maik
                to subscribe users */
                // postData(bonusArray);
                // if (responseCode === 200) {
                    // We have to make Global Array as empty after every request
                    bonusArray = [];
                //}
                
            }
        }
	}
	ajaxRequest.open('GET', 'https://api.bseindia.com/BseIndiaAPI/api/AnnGetData/w?strCat=-1&strPrevDate=20210807&strScrip=&strSearch=P&strToDate=20210807&strType=C');
	//ajaxRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	ajaxRequest.send();
    xpath('//*[@id="btnSubmit"]')[0].click();
    console.log('End time:::::', new Date()); 
}
// execute every 30 seconds
let timeLimit = 30 * 1000;
let timeoutObject = null;
timeoutObject = setInterval(GetData, timeLimit);