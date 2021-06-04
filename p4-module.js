const { data } = require("./p4-data.js");

function getQuestions() {
  return data.map(({ question }) => question);
}
//console.log(getQuestions(data))

function getAnswers() {
  return data.map(({ answer }) => answer);
}
//console.log(getAnswers(data))

function getQuestionsAnswers() {
  return (clone = [...data]);
}
//console.log(getQuestionsAnswers(data))

function getQuestion(number = "") {
  // Process number to go from 1 => "Q1"
  //number = "Q" + number;

  //return data({question}, "1")
  //Empty obj
  //For loop
  //    Filter
  //  Object is now vaild
  // question = null;
  //  for (q of data) {
  //    if (q.question == number) {
  //       question = q;
  //   }
  //  }
  let ques = {
    error: "",
    question: "",
    number: "",
    //error : ""
  };
  if (!Number.isInteger(number)) {
    ques.error = 'Question number must be an integer';
  } else if (number < 1) {
    ques.error = 'Question number must be >= 1';
  } else if (number > 3) {
    ques.error =
      'Question number must be less than  the number of questions (3)';
  }
  //if (number < 1 || number > 3) {
  //   ques.error = 'Question not in range'
  // }
  else {
    ques.question = data[number - 1].question;
    ques.number = number;
  }
  return ques;
  //return {question: num, number: number, error: ''}
}
//console.log(getQuestion("2"))

function getAnswer(number = "") {
  let ans = {
    error: "",
    answer: "",
    number: "",
   // error: "",
  };
 // if (number < 1 || number > 3) {
   // ans.error = "Answer not in range";
   if (!Number.isInteger(number)) {
    ans.error = 'Answer number must be an integer';
  } else if (number < 1) {
    ans.error = 'Answer number must be >= 1';
  } else if (number > 3) {
    ans.error =
      'Answer number must be less than  the number of questions (3)';
  }
   else {
    ans.answer = data[number - 1].answer;
    ans.number = number;
  }
  return ans;
  //return {question: num, number: number, error: ''}
}
//console.log(getAnswer("1"))

function getQuestionAnswer(number = "") {
  /*let both = {
    error: "",
    question: "",
    number: "",
    answer: ""
    //number: "",
    //error: "",
  };
  // let ques = {
  // question: "",
  // number : "",
  // error : ""
  //}
  //if (number < 1 || number > 3) {
  //  both.error = "Answer not in range";
    //ques.error = 'Question not in range'
    if (!Number.isInteger(number)) {
        both.error = "Question number must be an integer";
      } else if (number < 1) {
        both.error = "Question number must be >= 1";
      } else if (number > 3) {
        both.error =
          "Question number must be less than  the number of questions (3)";
      }
   else {
    both.question = data[number - 1].question;
    both.answer = data[number - 1].answer;
    both.number = number;
  }
  return both;*/
  let q = getQuestion(number)
  let a = getAnswer(number)
  if (q.error !== "" ){
      return q
  }
  else if(a.error !== ""){
      return a
  }
  else {
      return {error: '', question: q.question, number: q.number, answer: a.answer}
  }
}

// extra credit
//8
function addQuestionAnswer(info = {}){
    if (info.question != undefined && info.answer != undefined){
        data.push(info)
        let num = info.question.split("Q")
        return {error: "", message: "Question added", number: num}
    }
    else if(info.question == undefined && info.answer != undefined){
    return {error: "Object question property required", message: "", number: -1}
    }
    else if(info.answer == undefined && info.question != undefined){
        return {error: "Object answer property required", message: "", number: -1}
    }
    else {
        return {error: "Object question property required", message: "", number: -1}
    }
}

//10
//function deleteQuestionAnswer(info = {}){
//if(){}
//else if(){}
//else{
//return {error :'', message : 'Question added', number: 4}
//}
//}
//return {question: num, number: number, error: ''}
//console.log(getQuestionAnswer("4"))

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
  console.log(`\n** Testing ${category} **`);
  console.log("-------------------------------");
  for (const o of args) {
    console.log(`-> ${category}${o.d}:`);
    console.log(o.f);
  }
}

// Set a constant to true to test the appropriate function
const testGetQs = false;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = false;
const testAdd = true; // Extra credit
const testUpdate = false; // Extra credit
const testDelete = false; // Extra credit

// getQuestions()
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() }, // Extra credit: +1
    { d: "(0)", f: getQuestion(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) } // Extra credit: +1
  );
}

// getAnswer()
if (testGetA) {
  testing(
    "getAnswer",
    { d: "()", f: getAnswer() }, // Extra credit: +1
    { d: "(0)", f: getAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getAnswer(1) },
    { d: "(4)", f: getAnswer(4) } // Extra credit: +1
  );
}

// getQuestionAnswer()
if (testGetQA) {
  testing(
    "getQuestionAnswer",
    { d: "()", f: getQuestionAnswer() }, // Extra credit: +1
    { d: "(0)", f: getQuestionAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestionAnswer(1) },
    { d: "(4)", f: getQuestionAnswer(4) } // Extra credit: +1
  );
}

// addQuestionAnswer()
if (testAdd) {
    testing(
      "addQuestionAnswer",
      { d: "()", f: addQuestionAnswer() },
      { d: "({})", f: addQuestionAnswer({}) },
      { d: '(question: "Q4")', f: addQuestionAnswer({ question: "Q4" }) },
      { d: '(answer: "A4")', f: addQuestionAnswer({ answer: "A4" }) },
      {
        d: '(question: "Q4", answer: "A4")',
        f: addQuestionAnswer({ question: "Q4", answer: "A4" }),
      }
    );
  }
  
module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer
}
