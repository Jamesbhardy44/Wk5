
(function(){
    document.getElementById("button").onclick=function() 
    { makeRequest('https://github.com/Jamesbhardy44/Wk5/blob/main/wk5JSON.json');
    };
    function makeRequest('https://github.com/Jamesbhardy44/Wk5/blob/main/wk5JSON.json')
    {
    var httpRequest= new XMLHttpRequest();
        if(!httpRequest) {
            alert('error');
            return false;
        }
        httpRequest.onreadystatechange = alertContents;

        httpRequest.open('GET', 'https://github.com/Jamesbhardy44/Wk5/blob/main/wk5JSON.json');
        httpRequest.send();
    }
    function alertContents(){
        if(httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.status===200){
                document.write(httpRequest.responseText);
            } 
        } else {
            alert('Error');
        }
    }
}})();      
