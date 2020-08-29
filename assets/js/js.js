$(document).ready(function () {

    $("#button1").on('click', function () {
        check_answer_1();
    });

    $("#button2").on('click', function () {
        check_answer_2();
    });

    $("#button3").on('click', function () {
        check_answer_3();
    });

    $("#button4").on('click', function () {
        check_answer_4();
    });

    $("#button5").on('click', function () {
        check_answer_5();
    });

    $("#button6").on('click', function () {
        check_answer_6();
    });

    $("#button7").on('click', function () {
        check_answer_7();
    });

    $("#button8").on('click', function () {
        check_answer_8();
    });

    $("#button9").on('click', function () {
        check_answer_9();
    });

    $("#button10").on('click', function () {
        check_answer_10();
    });
});

function check_answer_1() {
    var correct_answer = "hola";
    var answer = $('#answer1').val();
    if (correct_answer == answer) {
        alert("The answer is CORRECT :D");
    } else {
        alert("The answer is INCORRECT :(");
    }
}

function check_answer_1() {
    var correct_answer = "19";
    var answer = $('#answer1').val();
    if (correct_answer == answer) {
        alert("The answer is CORRECT :D");
    } else {
        alert("The answer is INCORRECT :(");
    }
}

function check_answer_2() {
    var correct_answer_1 = "Harold";
    var correct_answer_2 = "Bret";
    var correct_answer_3 = "Alex";
    var correct_answer_4 = "Derek";
    var correct_answer_5 = "Fred";
    var correct_answer_6 = "John";
    var correct_answer_7 = "Eddie";
    var correct_answer_8 = "Greg";
    var correct_answer_9 = "Chris";
    var answer1 = $('#answer2_1').val();
    var answer2 = $('#answer2_2').val();
    var answer3 = $('#answer2_3').val();
    var answer4 = $('#answer2_4').val();
    var answer5 = $('#answer2_5').val();
    var answer6 = $('#answer2_6').val();
    var answer7 = $('#answer2_7').val();
    var answer8 = $('#answer2_8').val();
    var answer9 = $('#answer2_9').val();
    if (correct_answer_1 == answer1 && correct_answer_2 == answer2 && correct_answer_3 == answer3) {
        alert("The answer for WEST is CORRECT :D");
    } else {
        alert("The answer is INCORRECT :(");
    }
    if (correct_answer_4 == answer4 && correct_answer_5 == answer5 && correct_answer_6 == answer6) {
        alert("The answer for CENTRE is CORRECT :D");
    } else {
        alert("The answer is INCORRECT :(");
    }
    if (correct_answer_7 == answer7 && correct_answer_8 == answer8 && correct_answer_9 == answer9) {
        alert("The answer for EAST is CORRECT :D");
    } else {
        alert("The answer is INCORRECT :(");
    }
}

function check_answer_3() {
    var correct_answer = "7";
    var answer = $('#answer3').val();
    if (correct_answer == answer) {
        alert("The answer is CORRECT :D");
    } else {
        alert("The answer is INCORRECT :(");
    }
}

function check_answer_4() {
    var correct_answer = "dragon";
    var answer = $('#answer4').val();
    if (correct_answer == answer) {
        alert("The answer is CORRECT :D");
    } else {
        alert("The answer is INCORRECT :(");
    }
}

function check_answer_5() {
    var correct_answer_1 = "m";
    var correct_answer_2 = "fire";
    var correct_answer_3 = "egg";
    var answer1 = $('#answer5_1').val();
    var answer2 = $('#answer5_2').val();
    var answer3 = $('#answer5_3').val();
    var answer = $('#answer5').val();
    if (correct_answer_1 == answer1) {
        alert("The first answer is CORRECT :D");
    } else {
        alert("The first answer is INCORRECT :(");
    }
    if (correct_answer_2 == answer2) {
        alert("The second answer is CORRECT :D");
    } else {
        alert("The second answer is INCORRECT :(");
    }
    if (correct_answer_3 == answer3) {
        alert("The third answer is CORRECT :D");
    } else {
        alert("The third answer is INCORRECT :(");
    }
}

function check_answer_6() {
    var correct_answer = "182";
    var answer = $('#answer6').val();
    if (correct_answer == answer) {
        alert("The answer is CORRECT :D");
    } else {
        alert("The answer is INCORRECT :(");
    }
}

function check_answer_7() {
    var correct_answer = "iris";
    var answer = $('#answer7').val();
    if (correct_answer == answer) {
        alert("The answer is CORRECT :D");
    } else {
        alert("The answer is INCORRECT :(");
    }
}

function check_answer_8() {
    var correct_answer = "38";
    var answer = $('#answer8').val();
    if (correct_answer == answer) {
        alert("The answer is CORRECT :D");
    } else {
        alert("The answer is INCORRECT :(");
    }
}

function check_answer_9() {
    var correct_answer = "hard";
    var answer = $('#answer9').val();
    if (correct_answer == answer) {
        alert("The answer is CORRECT :D");
    } else {
        alert("The answer is INCORRECT :(");
    }
}

function check_answer_10() {
    var correct_answer = "7";
    var answer = $('#answer10').val();
    if (correct_answer == answer) {
        alert("The answer is CORRECT :D");
    } else {
        alert("The answer is INCORRECT :(");
    }
}