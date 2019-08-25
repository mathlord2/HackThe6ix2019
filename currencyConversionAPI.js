// set endpoint and your API key
var endpoint = 'latest';
var access_key = 'eb6b41d7d579f20927547891fd31bfa4';

var exchangeRates

// get the most recent exchange rates via the "latest"
$.ajax({
    url: 'http://data.fixer.io/api/' + endpoint + '?access_key=' + access_key,  
    dataType: 'jsonp',
    success: function(json) {
        exchangeRates = json.rates;
        console.log("Rates received!")
    }
});

$(function(){
    $("#checkRate").click(function(){
        console.log("Button pressed");

        var fromCurr = $("#fromField").val();
        var toCurr = $("#toField").val();

        console.log(fromCurr);
        console.log(toCurr);
        console.log(exchangeRates.CAD);
        console.log(exchangeRates.USD);
        console.log(exchangeRates[fromCurr]);
        console.log(exchangeRates[toCurr]);

        if (fromCurr in exchangeRates && toCurr in exchangeRates){
            //
            var exchangeValue = exchangeRates[toCurr]/exchangeRates[fromCurr];
            console.log(exchangeValue);

            $("#test").text(exchangeValue);
        }

        else{
            console.log("The currencies do not match or do not exist, please try again");
        }
    });
});