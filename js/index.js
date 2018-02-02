var questions = [];
var correctA = [];
var incorrectA = [];
var possibleA = []; //may need to change to null
var questionsh = $('.card-title');

var populateCards = function() {
	for (var i = 0; i <questions.length; i++) {
		var question = questions[i]
		$(questionsh[i]).text(question);
	}
}

var populateAnswers = function () {
	for(var i = 0; i<correctA.length;i++){
		possibleA.push(incorrectA[i]);
		possibleA[i].push(correctA[i]);	
	}
	console.log(possibleA[1]);
	//shuffle
	for(var i= 0;i<possibleA.length;i++){
		var change;
		for(var j = possibleA.length-1;j>0;j--) {
			var randomNUm = Math.floor(Math.random() * (j + 1));
			change = possibleA[i][j];
			possibleA[i][j] = possibleA[i][randomNUm];
			possibleA[i][randomNUm] = change;
		}
	}
	console.log(possibleA[1]);
}

$(document).ready(function() {
	$.get('https://opentdb.com/api.php?amount=9&category=9&difficulty=easy&type=multiple').done(function(data){
		// console.log(data.results[0].question);
		data.results.forEach(function(obj){
			questions.push(obj.question);
			correctA.push(obj.correct_answer);
			incorrectA.push(obj.incorrect_answers);
			
		});
		populateCards();
		populateAnswers();
	});
});















//   $("button").on("click", function() {
//     // e.preventDefault();
//     // console.log("in the click");
//     var searchString = document.forms["imageform"].elements["imagebox"].value;
//     $.get('https://www.reddit.com/search.json', {
//       q: searchString
//     }).done(function(data) {
//       // var results = data.data.children;
//       var results = data.data.children;
//       console.log(data);
//       results.forEach(function(item) {
//         if (item.data.thumbnail !== 'default') {
//           $("#results").append("<img src='" + item.data.thumbnail + "'>");
//         }
//       });

//     });
//   });
// });
