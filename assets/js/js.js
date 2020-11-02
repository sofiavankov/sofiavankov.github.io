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

    // $("#button10").on('click', function () {
    //     check_answer_10();
    // });
});

function check_answer_1() {
    var correct_answer = "24";
    var answer = $('#answer1').val();
    if (correct_answer == answer) {
        alert("The answer is CORRECT :D");
        window.open("https://sofiavankov.github.io/b5d5349715-puzzle2.html", "_self")
    } else {
        alert("The answer is INCORRECT :(");
    }
}

function check_answer_2() {

    var correct_answer = "581321";
    var answer = $('#answer2_1').val();
    if (correct_answer == answer) {
        alert("The answer is CORRECT :D");
        window.open("https://sofiavankov.github.io/c7efee1b1-puzzle3.html", "_self")
    } else {
        alert("The answer is INCORRECT :(");
    }
}

function check_answer_3() {
    var correct_answer = "87";
    var answer = $('#answer3').val();
    if (correct_answer == answer) {
        alert("The answer is CORRECT :D");
        window.open("https://sofiavankov.github.io/d98760785a-puzzle4.html", "_self")
    } else {
        alert("The answer is INCORRECT :(");
    }
}

function check_answer_4() {
    var correct_answer = "h";
    var answer = $('#answer4').val();
    if (correct_answer == answer) {
        alert("The answer is CORRECT :D");
        window.open("https://sofiavankov.github.io/e5b8e12c14-puzzle5.html", "_self")
    } else {
        alert("The answer is INCORRECT :(");
    }
}

function check_answer_5() {
    var correct_answer_1 = "handkerchief";
    var answer1 = $('#answer5').val();
    if (correct_answer_1 == answer1) {
        alert("The first answer is CORRECT :D");
        window.open("https://sofiavankov.github.io/f8f436cf2-puzzle6.html", "_self")
    } else {
        alert("The first answer is INCORRECT :(");
    }
}

function check_answer_6() {
    var correct_answer = "devil";
    var answer = $('#answer6').val();
    if (correct_answer == answer) {
        alert("The answer is CORRECT :D");
        window.open("https://sofiavankov.github.io/g173dd3768-puzzle7.html", "_self")
    } else {
        alert("The answer is INCORRECT :(");
    }
}

function check_answer_7() {
    var correct_answer = "6310";
    var answer = $('#answer7').val();
    if (correct_answer == answer) {
        alert("The answer is CORRECT :D");
        window.open("https://sofiavankov.github.io/h9b1f25e67fe-puzzle8.html", "_self")
    } else {
        alert("The answer is INCORRECT :(");
    }
}

function check_answer_8() {
    var correct_answer = "trick or treat?";
    var answer = $('#answer8').val();
    if (correct_answer == answer) {
        alert("The answer is CORRECT :D");
        window.open("https://sofiavankov.github.io/i106264a93-puzzle9.html", "_self")
    } else {
        alert("The answer is INCORRECT :(");
    }
}

function check_answer_9() {
    var correct_answer = "genius";
    var answer = $('#answer9').val();
    if (correct_answer == answer) {
        alert("WELL DONE! You found all the clues and made it to the rooftop! What can I say, Halloween suits you!");
    } else {
        alert("The answer is INCORRECT :(");
    }
}

// function check_answer_8() {
//     var correct_answer = "38";
//     var answer = $('#answer8').val();
//     if (correct_answer == answer) {
//         alert("The answer is CORRECT :D");
//     } else {
//         alert("The answer is INCORRECT :(");
//     }
// }

// function check_answer_9() {
//     var correct_answer = "hard";
//     var answer = $('#answer9').val();
//     if (correct_answer == answer) {
//         alert("The answer is CORRECT :D");
//     } else {
//         alert("The answer is INCORRECT :(");
//     }
// }

// function check_answer_10() {
//     var correct_answer = "7";
//     var answer = $('#answer10').val();
//     if (correct_answer == answer) {
//         alert("The answer is CORRECT :D");
//     } else {
//         alert("The answer is INCORRECT :(");
//     }
// }