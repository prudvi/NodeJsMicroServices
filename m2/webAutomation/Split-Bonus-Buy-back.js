function postData(data){
	var ajaxRequest = new XMLHttpRequest();
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			if(ajaxRequest.status == 200){
				var HERO = JSON.parse(ajaxRequest.responseText);
				console.log(HERO);
			}
		}			
	}
	ajaxRequest.open('POST', 'http://localhost:3001/receiveData');
	ajaxRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	ajaxRequest.send(JSON.stringify({data: data}));
}

// execute every 30 seconds
let timeLimit = 30 * 1000;

function executeSubmitButton() {
	xpath('//*[@id="btnSubmit"]')[0].click()
}

function getRowObject(index) {
    let cNameArr = xpath('//*[@id="lblann"]/table/tbody/tr[4]/td/table['+index+']/tbody/tr[1]/td[1]/a/text()');
    let cName = cNameArr[0].data;
    let typeArr = xpath('//*[@id="lblann"]/table/tbody/tr[4]/td/table['+index+']/tbody/tr[1]/td[2]');
    let type = typeArr[0].outerText;
    let timeArr = xpath('//*[@id="lblann"]/table/tbody/tr[4]/td/table['+index+']/tbody/tr[2]/td/b');
    let time = timeArr [0].outerText;
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

let oldBonusArray = [];
/*
This logic is used to remove the older DOM elements, because in 1 minute
Maximum 2-5 elements will added, as previously added elements need to be removed
to redundatnlty send the mail for the older DOM Content
*/
function removeOldDOMElementsFromNewDOM(newData) {
    // extract only names from oldData to check witn new Data
    let existingItems = [];
    for (let x=0; x<oldBonusArray.length; x++) {
        existingItems.push(oldBonusArray[x].name);
    }
    if (existingItems.length > 0) {
        return newData.filter(function(item) {
			if (existingItems.indexOf(item.name) <= -1)
                return item;
        });
    }
    return newData;
}


function sUpdates() {
    //setTimeout(executeSubmitButton, 0);   
	let splitText = 'Sub-Division';
	let spl = 'Split';
	let bons= 'Bonus';
	let bonusArray= [];
	xpath('//*[@id="lblann"]/table/tbody/tr[4]/td/table').map(function(r, index) {
        xpath('//*[@id="lblann"]/table/tbody/tr[4]/td/table['+index+']/tbody/tr').map(
            function(rr, nindex) {
                if (nindex == 1) {
                    const { detailsLink, cName, time, type} = getRowObject(index);
                    if (type == 'Corp. Action') {
                        if (cName.indexOf(splitText) >= 0 || cName.indexOf(spl) >= 0 || cName.indexOf(bons) >= 0)
                            bonusArray.push({ name: cName  + ' At ' + time, linkName: detailsLink});
                    } else if (type == 'Company Update') {
                        if (cName.indexOf('Buy back') >= 0) {
                            bonusArray.push({ name: 'Buy Back Program:::'+ cName + ' At '+ time, linkName: detailsLink});
                        }
                    }
                    
                }
            }
        )
	})
    oldBonusArray = removeOldDOMElementsFromNewDOM(bonusArray);
	console.error('>>>>>Important <<<<<', bonusArray);
	if (bonusArray.length > 0) {
		/* Send an API Request to the Rest API with Body Content , where that will send Maik
        to subscribe users */
        postData(bonusArray);
	}
    
    /*This is to refresh the content After reading the latest content, and will click submit
        Button to make ready the DOM elements for next execution of setInterval */
     xpath('//*[@id="btnSubmit"]')[0].click()
     
}

sUpdates();
setInterval(sUpdates, timeLimit);