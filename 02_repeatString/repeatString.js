const repeatString = function(word,number) {
        if (number < 0) {
            return "Error";
        }
        let string = "";
        for (let i = 0;i < number; i++) {
            return string += word;
        }
}
repeatString('hey',3);
repeatString('hello',10);
repeatString('hi',1);
repeatString('bye',0);
repeatString('goodbye',-1);
repeatString('odin',number);
repeatString('',10);

// Do not edit below this line
module.exports = repeatString;
