$(function(){

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
				"k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
				"u", "v", "w", "x", "y", "z"];

var sentence ="This is a sample sentence";
var sentenceSub = sentence.toLowerCase().split('');
console.log(sentenceSub);

function showAlphabet(){
	alphabet.forEach(function(letter){
		var a= document.createElement("li");
		a.textContent= letter;
		var alphabetList= document.getElementById("alphabet");
		alphabetList.appendChild(a);
	});
}

function generateBlanks(){
	sentenceSub.forEach(function(letter){
		var b=document.createElement('li');
		b.textContent= letter;
		var sentenceHolder= document.getElementById("sentenceHolder");
		sentenceHolder.appendChild(b);
	})
}


showAlphabet();
generateBlanks();


});