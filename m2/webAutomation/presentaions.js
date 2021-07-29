
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


// execute every 1 minutes
let timeLimit = 60 * 1000;

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
function getPresentation() {
    let presentation = [];
    xpath('//*[@id="lblann"]/table/tbody/tr[4]/td/table').map(function(r, index) {
        xpath('//*[@id="lblann"]/table/tbody/tr[4]/td/table['+index+']/tbody/tr').map(
            function(rr, nindex) {
                if (nindex == 1) {
                const { detailsLink, cName, time, type} = getRowObject(index);
                if (cName.indexOf('Press Release / Media Release') >= 0) {
                    presentation.push({ name: 'Press Release / Media Release::'+ cName + ' At '+ time, linkName: detailsLink});
                }
                else if (cName.indexOf('Investor Presentation') >= 0)
                    presentation.push({ name: cName, linkName: detailsLink});
            }
        })
    });
    console.error("presentation Report::::", presentation);
}