const gemini = require('./gemini-model');

gemini("Write a sonnet about a programmers life, but also make it rhyme.").then((response) => {
    console.log(response);
});
