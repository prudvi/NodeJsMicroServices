function GetData(){
    console.log("::Start Time:::", new Date());
	var ajaxRequest = new XMLHttpRequest();
	ajaxRequest.onreadystatechange = function(){
		if (ajaxRequest.readyState === 4 && ajaxRequest.status === 200) {
            //responseCode = 200;
            //let jsonResponse =  JSON.parse(ajaxRequest.responseText);
            console.error(ajaxRequest.responseText)
        }
	}
	ajaxRequest.open('GET', 'http://localhost:3001/getStockData', false);
	//ajaxRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	ajaxRequest.send();
   
    console.log('End time:::::', new Date()); 
}
GetData()
setInterval(GetData, 20000)