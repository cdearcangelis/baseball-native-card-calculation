if (window.cordova) {
	var exec = require("cordova/exec");

	var getCardCalculation = {
		getCardBatter: function (successCallback, failureCallback) {
            exec(
            	successCallback,
            	failureCallback,
   				"CardCalculation", "getCardBatter", []);
            console.log('batter ran')
        },
        getCardPitcher: function (successCallback, failureCallback) {
        	exec(
        		successCallback,
            	failureCallback,
   				"CardCalculation", "getCardPitcher", []);

        	console.log('pitcher ran');
        }
	}

	module.exports = getCardCalculation;

	function cardCalculateSuccessCall (){
		console.log('Works');
		//console.log(response);
	}

	function cardCalculateErrorCall (){
		console.log('Failed');
		//console.log(response);
	}
}