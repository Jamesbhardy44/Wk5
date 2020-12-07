(function(){
    /*create a self invoking function that sets an event 
    handler on our button that calls makeRequest when clicked*/
    var httprequest;
    document.getElementById("button").onclick=function() { makeRequest('wk5JSON.json');
    };
    function makeRequest(https:///github.com/Jamesbhardy44/Wk5){
    httpRequest=new XMLHttpRequest();
    // if request not successful, exit and alert
        if(!httpRequest) {
            alert('Exiting : Cannot creat XMLHTTP Instance');
            return false;
        }
        httpRequest.onreadystatechange = alertContents;

        httpRequest.open('GET', url);
        httpRequest.send();
}
function alertContents(){
        if(httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.status===200){
                document.write(httpRequest.responseText);
            } else{
                alert("There was a problem with the request.");
            }
        }
    }})();
