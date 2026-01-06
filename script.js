var questions = [{
      "question": "Which data type is used to store whole numbers?",
      "option1": "float",
      "option2": "int",
      "option3": "char",
      "option4": "double",
      "answer": "2"
}, {
      "question": "Which symbol is used for single-line comments in C / Java?",
      "option1": "/*",
      "option2": "#",
      
      "option3": "//",
      "option4": "<!-->",
      "answer": "3"

},
{
      "question": "What is the correct way to declare a variable in Java?",
      "option1": "int=x;",
      "option2": "x int;",
      "option3": "int x;",
      "option4": "integer x;",
      "answer": "3"

},
{
      "question": "Which loop is guaranteed to execute at least once?",
      "option1": "for loop",
      "option2": "while loop",
      "option3": "do-while loop",
      "option4": "foreach loop",
      "answer": "3"

},
{
      "question": "Which keyword is used to create a function in Python?",
      "option1": "function",
      "option2": "define",
      "option3": "def",
      "option4": "fun",
      "answer": "3"

},
{
      "question": "What is the output of: print(5 + 2 * 3) in Python?",
      "option1": "21",
      "option2": "11",
      "option3": "16",
      "option4": "7",
      "answer": "2"

},
{
      "question": "Which operator is used to compare two values?",
      "option1": "=",
      "option2": "==",
      "option3": "+=",
      "option4": "!=",
      "answer": "2"

},
{
      "question": "Which data structure stores elements in key-value pairs?",
      "option1": "Array",
      "option2": "Stack",
      "option3": "Dictionary/map",
      "option4": "Queue",
      "answer": "3"

},
{
      "question": "Which of the following is NOT a programming language?",
      "option1": "java",
      "option2": "Python",
      "option3": "HTML",
      "option4": "C++",
      "answer": "3"

},
{
      "question": "What does break do inside a loop?",
      "option1": "Skips one iteration",
      "option2": "Stops the Program",
      "option3": "Exits the loop",
      "option4": "Restarts the loop",
      "answer": "3"

}
]
var quesclass = document.getElementById("qclass")
var hclass = document.getElementById("hclass")
var option1 = document.getElementById("op1")
var option2 = document.getElementById("op2")
var option3 = document.getElementById("op3")
var option4 = document.getElementById("op4")
var result = document.getElementById("result")
var restart = document.getElementById("restart")
var currq = 0
var total = questions.length
var score = 0
var selectedid = document.querySelectorAll("input[name='opt']")
function loadquestion(currq) {
      var data = questions[currq]
      quesclass.textContent = (currq + 1) + "." + data.question
      option1.textContent = data.option1
      option2.textContent = data.option2
      option3.textContent = data.option3
      option4.textContent = data.option4
      selectedid.forEach(radio =>
            radio.checked = false)


}
function getselected() {
      let answer = null
      selectedid.forEach(radio => {
            if (radio.checked) {
                  answer = radio.value
            }
      })
      return answer
}





function loadnextquestion() {
      let selected = getselected()
      if (!selected) {
            alert("please select some option!!")
            return
      }
      if (questions[currq].answer == selected) {
            score = score + 10
      }
      currq = currq + 1
      if (currq == total - 1) {
            document.getElementById("nclass").textContent = "Finish"
      }

      if (currq == total) {

            hclass.style.display = "none"
            result.style.display = ""
            result.innerHTML = '<h1>Your Score:' + score + '</h1><p class="p1class">Congratulations !!👍😊</p><p class="p2class">Your Scored best!!😊</p><buttton class="bclass" onclick="restartgame()">Restart</button>'
            if (score < 100) {
                  result.innerHTML = '<h1>Your Score:' + score + '</h1><p class="pclass">Try to get more score next time 👍😊</p><buttton class="bclass" onclick="restartgame()">Restart</button>'
            }
            return
      }

      loadquestion(currq)

}
function restartgame() {
      result.style.display = "none"
      hclass.style.display = "block"
      currq = 0
      total = questions.length
      score = 0
      document.getElementById("nclass").textContent = "Next->"
      loadquestion(currq)
}
loadquestion(currq)
