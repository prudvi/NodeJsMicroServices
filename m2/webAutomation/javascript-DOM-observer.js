
var xpath = function (xpathToExecute) {
    var result = [];
    var nodesSnapshot = document.evaluate(xpathToExecute, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var i = 0; i < nodesSnapshot.snapshotLength; i++) {
        result.push(nodesSnapshot.snapshotItem(i));
    }
    return result;
}
// Select the node that will be observed for mutations
const targetNode = document.querySelector("#lblann > table > tbody > tr:nth-child(4) > td");

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };
const oldDetails = '';
// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            const newDetails = xpath('//*[@id="lblann"]/table/tbody/tr[4]/td/table[1]/tbody/tr[1]/td[1]/a')[0].outerText;
            if (oldDetails === '') {
                oldDetails = newDetails;
            }
            if (newDetails != oldDetails) {
                const receivedTime = xpath('//*[@id="lblann"]/table/tbody/tr[4]/td/table[1]/tbody/tr[2]/td/b[1]')[0].outerText;
                const finishedTime = xpath('//*[@id="lblann"]/table/tbody/tr[4]/td/table[1]/tbody/tr[2]/td/b[2]')[0].outerText;
                console.error('A child node has been added or removed.', mutation);
                console.error(receivedTime, 'A child node has been added or removed.', finishedTime);
            }
            const receivedTime = xpath('//*[@id="lblann"]/table/tbody/tr[4]/td/table[1]/tbody/tr[2]/td/b[1]')[0].outerText;
            const finishedTime = xpath('//*[@id="lblann"]/table/tbody/tr[4]/td/table[1]/tbody/tr[2]/td/b[2]')[0].outerText;
            console.error('A child node has been added or removed.', mutation);
            console.error(receivedTime, 'A child node has been added or removed.', finishedTime);
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
//observer.disconnect();