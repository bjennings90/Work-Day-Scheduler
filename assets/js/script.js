$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var now = moment().format("H");
console.log(now);

var onePM = parseInt($("#onePM").text())+12;
var twoPM = parseInt($("#twoPM").text())+12;
var threePM = parseInt($("#threePM").text())+12;
var fourPM = parseInt($("#fourPM").text())+12;
var fivePM = parseInt($("#fivePM").text())+12;

var nineAM = parseInt($("#nineAM").text());
var tenAM = parseInt($("#tenAM").text());
var elevenAM = parseInt($("#eleventhAM").text());
var twelvePM = parseInt($("#twelvePM").text());

if (elevenAM === now) {
    elevenAM.addClass("present");
}

$(document).ready(function() {
    $(".saveBtn").click(function() {
        var time = $(this).parent().attr("id");
        console.log(time);
        var value = $(this).siblings(".description").value();
        localStorage.setItem(time, value)
})
})

