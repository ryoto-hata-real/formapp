document.addEventListener("DOMContentLoaded", function(){
    $("#question-content").load("html/page1.html");
});

$(document).on('click', '.next2-page', 
function() {
    //テキストボックスから値を取るときに使う
    document.getElementById( "username" ).value = document.getElementById( "InputUserName" ).value;

    //複数選択のチェックボックスなどを使う時に使う
    const answer1_arr = [];
    const answer1 = document.getElementsByName("question1");
    for (let i=0; i<answer1.length;i++){
        if(answer1[i].checked){
            answer1_arr.push(answer1[i].value);
        }
    }
    document.getElementById("answer-1").value = answer1_arr;

    //次のページへの遷移
    $("#question-content").load("html/page2.html");
    
});

$(document).on('click', '.next3-page', 
function() {
    $("#question-content").load("html/page3.html");
    document.getElementById( "answer-2" ).value = "Answer2" ;
});

$(document).on('click', '.next4-page', 
function() {
    $("#question-content").load("html/page4.html");
});

$(document).on('click', '.next5-page', 
function() {
    $("#question-content").load("html/page5.html");
});

$(document).on('click', '.next6-page', 
function() {
    $("#question-content").load("html/page6.html");
});

$(document).on('click', '.next7-page', 
function() {
    $("#question-content").load("html/page7.html");
});

//1つ前にもどる処理
$(document).on('click', '.return-page', 
function(event) {
    beforePageNumber = event.target.value -1;
    beforePagePass = "html/page" + beforePageNumber + ".html";
    $("#question-content").load(beforePagePass);
});