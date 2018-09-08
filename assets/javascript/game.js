// var ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" ,"p" ,"q" ,"r" ,"s" ,"t" ,"u" , "v" ,"w" ,"x" ,"y" ,"z"]

var randomWordArr = ["earth", "mars", "jupiter", "moon", "pluto"];
var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];

var s;
var count = 0;

var answerArray = [];
// Need more knoledge here
function startUp()
{
    for (var i = 0; i < randomWord.length; i++)
    {
        answerArray[i] = "_";
    }
    s = answerArray.join(" ");
    document.getElementById("answer").innerHTML = s;
}

function letter()
{
    var letter = document.getElementById("letter") .value;

    if (letter.length > 0)
    {
        for (var i = 0; i < randomWord.length; i++)
        {
            if (randomWord[i] === letter)
            {
                answerArray[i] = letter;
            }

        }
        count++;
        document.getElementById("counter").innerHTML = "Number of guesses: " + count;
        document.getElementById("answer").innerHTML = answerArray.join(" ");
    }
    if(count>5)
    {
        document.getElementById("stat").innerHTML = "Come on - you should have guessed it by now";
    }

}



// var Space = [{
//     name : "earth",
//     img : ""
// },
// {
//     name : "mars",
//     img : ""
// },
// {
//   name : "Jupiter",
//   img : ""
// },
// {
//   name : "Moon",
//   img : ""
// },
// {
//   name : "Pluto",
//   img : ""
// }];

// var game = {
//     spaceNum: 0, 
//     GuessNum:0, 
//     remainingGuessed : "",
//     letterGuessed: []
    
// }

// document.onkeypress = function (event) {
//     var letter = event.key.toUpperCase();
//     if (Space[game.spaceNum].name.indexOf(letter) >=0){}
//     else{}
    
// }

// indexOf
// "dave".charAt(1)









// Array of words
// const words = ['tiger', 'cat' , 'mouse', 'dog'];
// let choosenWord = Math.floor(Math.random() words.length);
// console.log (choosenWord)