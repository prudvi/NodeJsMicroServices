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


let annualReports = [];
let lastReadDOMTime = new Date();

/* This code will be to execute a Submit to get the latest records */
function executeSubmitButton() {
	xpath('//*[@id="btnSubmit"]')[0].click()
}

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

function getAnnualreport(index) {
    let subject = "Annual Reports"
    const { detailsLink, cName, time, type} = getRowObject(index);
    if (type == '' && cName.indexOf('Reg. 34 (1) Annual Report') >= 0) {
        annualReports.push( { name: cName + " At " + time, linkName: detailsLink, time, subject} );
    }
}

function sUpdates() {
    let totalRecords = xpath('//*[@id="lblann"]/table/tbody/tr[4]/td/table').length;
    for (let x=0;x<totalRecords; x++) {
        let eachRecordDataLength = xpath('//*[@id="lblann"]/table/tbody/tr[4]/td/table['+x+']/tbody/tr').length;
       
        for (let y=0;y<eachRecordDataLength; y++) {
            if (y == 1) {
                getAnnualreport(x);
            }
        }
    }
}
console.log("::START TimeUpdates:::", new Date());
//Click the last Button
$x('//*[@id="fontSize"]/div[2]/div[2]/div[1]/div[1]/ul/li[10]/a')[0].click();

let pagination = 3;
let lastCount =  $x('//*[@id="fontSize"]/div[2]/div[2]/div[1]/div[1]/ul/li').length;
console.log(lastCount);
let calculateCount = lastCount-2;
let lastPageNumber =  $x('//*[@id="fontSize"]/div[2]/div[2]/div[1]/div[1]/ul/li['+calculateCount+']/a')[0].outerText;
let paginationFinal = Math.floor(parseInt(lastPageNumber)/5)+1;
console.log(paginationFinal);
//Click the First Button to read Data
$x('//*[@id="fontSize"]/div[2]/div[2]/div[1]/div[1]/ul/li[1]/a')[0].click();
sUpdates();
for (let y=1;y<=paginationFinal; y++) {
    //sUpdates();
    for (let x=4;x<=9; x++) {
        //console.log('LLLLLLLLLL');
        let isElement = $x('//*[@id="fontSize"]/div[2]/div[2]/div[1]/div[1]/ul/li['+x+']/a')[0];
        if (isElement) {
            $x('//*[@id="fontSize"]/div[2]/div[2]/div[1]/div[1]/ul/li['+x+']/a')[0].click();
            sUpdates();
        }
        
    }
}

if (annualReports.length > 0) {
    /* Send an API Request to the Rest API with Body Content , where that will send Maik
    to subscribe users */
    postData(annualReports);
}
console.log("::END TimeUpdates:::", new Date());