const fastify = require("fastify")();
const {getQuestions,getAnswers,getQuestionsAnswers,getQuestion,getAnswer,getQuestionAnswer} = require("./p4-module.js");

//cit/question
fastify.get("/cit/question", (request, reply) => {
    reply.code(200)
    .header('Content-Type','application-json')
    .send({error: "",statusCode: 200, questions :getQuestions()})
})
// /cit/answer
fastify.get("/cit/answer", (request, reply) => {
    reply.code(200)
    .header('Content-Type','application-json')
    .send({error: "",statusCode: 200, answers :getAnswers()})
})
// /cit/questionanswer
fastify.get("/cit/questionanswer", (request, reply) => {
    reply.code(200)
    .header('Content-Type','application-json')
    .send({error: "",statusCode: 200, questions_answers :getQuestionsAnswers()})
})
// /cit/question/:number
fastify.get("/cit/question/:number", (request, reply) => {
    const {number} = request.params;
    const q = getQuestion(parseInt(number))
    reply.code(200)
    .header('Content-Type','application-json')
    .send({error: "",statusCode: 200, question :q.question, number:number })
})
// /cit/answer/:number
fastify.get("/cit/answer/:number", (request, reply) => {
    const {number} = request.params;
    const a = getAnswer(parseInt(number))
    reply.code(200)
    .header('Content-Type','application-json')
    .send({error: "",statusCode: 200, answer :a.answer, number:number })
})
// /cit/questionanswer/:number
fastify.get("/cit/questionanswer/:number", (request, reply) => {
    const {number} = request.params;
    const both = getQuestionAnswer(parseInt(number))
    reply.code(200)
    .header('Content-Type','application-json')
    .send({error: "",statusCode: 200, question: both.question, answer :both.answer, number:number })
})
// 
fastify.get("*", (request, reply) => {
    //const {number} = request.params;
    //const both = getQuestionAnswer(parseInt(number))
    reply.code(200)
    .header('Content-Type','application-json')
    .send({error : "Route not found", statusCode: 404 })
    //.send({error: "",statusCode: 200, question: both.question, answer :both.answer, number:number })
})




// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
 if (err) {
   console.log(err);
   process.exit(1);
 }

 console.log(`Server listening on http://${listenIP}:${listenPort}`);
 //console.log(`Server listening on ${listenIP}:${listenPort}`);
}); 