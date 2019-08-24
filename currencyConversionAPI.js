// set endpoint and your access key
endpoint = 'latest'
access_key = 'API_KEY';

// get the most recent exchange rates via the "latest" endpoint:
$.ajax({
    url: 'http://data.fixer.io/api/' + endpoint + '?access_key=' + access_key,   
    dataType: 'jsonp',
    success: function(json) {

        // exchange rata data is stored in json.rates
        alert(json.rates.GBP);
        
        // base currency is stored in json.base
        alert(json.base);
        
        // timestamp can be accessed in json.timestamp
        alert(json.timestamp);
        
    }
});