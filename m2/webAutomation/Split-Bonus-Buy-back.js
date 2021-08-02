function postData(data){
	var ajaxRequest = new XMLHttpRequest();
	ajaxRequest.onreadystatechange = function(){
		if (ajaxRequest.readyState === 4){
			if (ajaxRequest.status === 200){
				var HERO = JSON.parse(ajaxRequest.responseText);
	        }
		}			
	}
	ajaxRequest.open('POST', 'http://localhost:3001/receiveData');
	ajaxRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	ajaxRequest.send(JSON.stringify({data: data}));
}

// execute every 60 seconds
let timeLimit = 60 * 1000;
let timeoutObj = null;
let outcomesArray = [];
let bonusArray= [];
let presentationArray = [];
let lastReadDOMTime = new Date();

function getRowObject(index) {
    let cNameArr = xpath('//*[@id="lblann"]/table/tbody/tr[4]/td/table['+index+']/tbody/tr[1]/td[1]/a/text()');
    let cName = cNameArr[0].data;
    let typeArr = xpath('//*[@id="lblann"]/table/tbody/tr[4]/td/table['+index+']/tbody/tr[1]/td[2]');
    let type = typeArr[0].outerText;
    let timeArr = xpath('//*[@id="lblann"]/table/tbody/tr[4]/td/table['+index+']/tbody/tr[2]/td/b');
    let time = timeArr[0].outerText;
    let helpLink = xpath('//*[@id="lblann"]/table/tbody/tr[4]/td/table['+index+']/tbody/tr[1]/td[3]/a')[0];
    let detailsLink = '';

    if (helpLink)
        detailsLink = helpLink.href;

    return {
        cName: cName,
        type: type,
        time: time,
        detailsLink: detailsLink
    }
}

var xpath = function (xpathToExecute) {
    var result = [];
    var nodesSnapshot = document.evaluate(xpathToExecute, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var i = 0; i < nodesSnapshot.snapshotLength; i++) {
        result.push(nodesSnapshot.snapshotItem(i));
    }
    return result;
}

function getFinancialResults(index) {
    let subject = 'Stocks  Market Financial Results';
    const { detailsLink, cName, time, type} = getRowObject(index);
    if (type == 'Result') {
        if (cName.indexOf('Outcome') >= 0 || 
            cName.indexOf('Results For') >= 0 || 
            cName.indexOf('Financial Results') >= 0) {
            outcomesArray.push( { name: cName + " At " + time, linkName: detailsLink, time, subject} );
        }
    }
}

function getPresentation(index) {
    let subject = 'Stocks  Presentation of QOQ and business updates';
    const { detailsLink, cName, time, type} = getRowObject(index);
    if (cName.indexOf('Press Release / Media Release') >= 0) {
        presentationArray.push({ name: 'Press Release / Media Release::'+ cName + ' At '+ time, 
            linkName: detailsLink, time ,subject});
    }
    else if (cName.indexOf('Investor Presentation') >= 0)
        presentationArray.push({ name: cName, linkName: detailsLink, time, subject});
}

function getBonusSplitAndBuyBack(index) {
    const { detailsLink, cName, time, type } = getRowObject(index);
    if (cName.indexOf('Sub-Division') >= 0 || cName.indexOf('Split') >= 0 || 
            cName.indexOf('Sub-division') >= 0 || cName.indexOf('split') >= 0 ||
            cName.indexOf('Bonus') >= 0) {
        bonusArray.push({ name: cName  + ' At ' + time, linkName: detailsLink, time, 
                    subject:  "Bonus/Stock Split Happens in Market"});
    } else if (cName.indexOf('Buy back') >= 0 || cName.indexOf('Buyback') >= 0 ||
                 cName.indexOf('Buy Back') >= 0) {
        bonusArray.push({ name: cName + ' At '+ time, linkName: detailsLink, 
                    time, subject: "Stock Buy Back Program"});
    } else  if (cName.indexOf('Press Release') >= 0) {
        bonusArray.push({ name:  cName + ' At '+ time, linkName: detailsLink, 
                time, subject: "Announcement under Regulation 30 (LODR)-Press Release / Media Release"});
    } else if (cName.indexOf('Rights Issue') >= 0) {
        bonusArray.push({ name: cName  + ' At ' + time, linkName: detailsLink, 
                time, subject: "Rights Issued"});
    }  else if (cName.indexOf("Award_of_Order") >= 0) {
        bonusArray.push({ name: cName  + ' At ' + time, linkName: detailsLink, time, 
                subject: "New Orders for the Company"});
    }
}

function sUpdates() {
    console.log("::Current TimesUpdates:::", new Date());
    let totalRecords = xpath('//*[@id="lblann"]/table/tbody/tr[4]/td/table').length;
    exitouterloop: 
    for (let x=0;x<=totalRecords; x++) {
        let eachRecordDataLength = xpath('//*[@id="lblann"]/table/tbody/tr[4]/td/table['+x+']/tbody/tr').length;
       
        for (let y=1;y<=eachRecordDataLength; y++) {
            if (y == 1) {
                let timeArr = xpath('//*[@id="lblann"]/table/tbody/tr[4]/td/table['+x+']/tbody/tr[2]/td/b');
                let time = timeArr[0].outerText;
                if (time === lastReadDOMTime) {
                    break exitouterloop;
                } else {
                    getBonusSplitAndBuyBack(x);
                }
                
            }
        }
    }

    if (bonusArray.length)
        lastReadDOMTime = bonusArray[0].time;

    let finalDOMElementsArray = bonusArray;
    console.log(":::::::lastReadDOMTime::::::", lastReadDOMTime);
    // We have to make Global Array as empty after every request
    bonusArray = [];
	console.error(new Date(), '>>>>>Important and latestOnlyItems<<<<<', finalDOMElementsArray);
	if (finalDOMElementsArray.length > 0) {
		/* Send an API Request to the Rest API with Body Content , where that will send Maik
        to subscribe users */
        postData(finalDOMElementsArray);
	}
    
    /*This is to refresh the content After reading the latest content, and will click submit
        Button to make ready the DOM elements for next execution of setInterval */
    xpath('//*[@id="btnSubmit"]')[0].click()
    // //  // Specifically added clearTimeout to stop queing the requests in the javascript engine queue
    timeoutObj ? clearTimeout(timeoutObj) : null;
    // //  //Again create a New Timeout which run reuirsivery same approach
    timeoutObj = setTimeout(sUpdates, timeLimit);     
}
sUpdates();