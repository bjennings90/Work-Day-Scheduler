var textArea = $(".textarea");
var hours = $(".hours");
var currentTime = $("#currentDay");



$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var now = moment().format("H");



var onePM = parseInt($("#onePM").text()) + 12;
var twoPM = parseInt($("#twoPM").text()) + 12;
var threePM = parseInt($("#threePM").text()) + 12;
var fourPM = parseInt($("#fourPM").text()) + 12;
var fivePM = parseInt($("#fivePM").text()) + 12;

var nineAM = parseInt($("#nineAM").text());
var tenAM = parseInt($("#tenAM").text());
var elevenAM = parseInt($("#elevenAM").text());
var twelvePM = parseInt($("#twelvePM").text());
var timeArrayTextArea = [1, 2, 3, 4, 5, 9, 10, 11, 12];
var timeArray = [onePM, twoPM, threePM, fourPM, fivePM, nineAM, tenAM, elevenAM, twelvePM];

// if (elevenAM === now) {
//     elevenAM.addClass("present");
// }

$(document).ready(function () {
    // listen for save button clicks
    $('.saveBtn').on('click', function () {
        // get nearby values
        var value = $(this)
            .siblings('.description')
            .val();
        var time = $(this)
            .siblings()
            .attr('id');

        

        // save in localStorage
        localStorage.setItem(time, value);

        // Show notification that item was saved to localStorage by adding class 'show'
        $('.notification').addClass('show');

        // Timeout to remove 'show' class after 5 seconds
        setTimeout(function () {
            $('.notification').removeClass('show');
        }, 5000);
    });
});

function timeTracker() {
    var curHour = moment().hours();
    for (var i = 0; i < timeArray.length; i++) {
        if (curHour === timeArray[i]) {
            var timeArrayVal = timeArrayTextArea[i];
            timeArrayVal = "#" + timeArrayVal;
            $(timeArrayVal).addClass("present");
        } 
        if (curHour > timeArray[i]) {
            var timeArrayVal = timeArrayTextArea[i];
            timeArrayVal = "#" + timeArrayVal;
            $(timeArrayVal).addClass("past");
        }
        if (curHour < timeArray[i]) {
            var timeArrayVal = timeArrayTextArea[i];
            timeArrayVal = "#" + timeArrayVal;
            $(timeArrayVal).addClass("future");
}
};
}

$(".description").each(timeTracker);
timeTracker();

