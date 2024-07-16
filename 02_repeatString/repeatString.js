const repeatString = function(word,number) {
        if (number < 0) {
            return "ERROR";
        }
        let string = "";
        for (let i = 0;i < number; i++) {
            string += word;
        }
        return string;
}
repeatString('hey',3);
repeatString('hello',10);
repeatString('hi',1);
repeatString('bye',0);
repeatString('goodbye',-1);
repeatString('',10);

// Do not edit below this line
module.exports = repeatString;
