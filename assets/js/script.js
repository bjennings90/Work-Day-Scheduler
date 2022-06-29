var textArea = $(".textarea");
var hours = $(".hours");
var currentTime = $("#currentDay");



$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var now = moment().format("H");
console.log(now);

var onePM = parseInt($("#onePM").text()) + 12;
var twoPM = parseInt($("#twoPM").text()) + 12;
var threePM = parseInt($("#threePM").text()) + 12;
var fourPM = parseInt($("#fourPM").text()) + 12;
var fivePM = parseInt($("#fivePM").text()) + 12;

var nineAM = parseInt($("#nineAM").text());
var tenAM = parseInt($("#tenAM").text());
var elevenAM = parseInt($("#eleventhAM").text());
var twelvePM = parseInt($("#twelvePM").text());

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

        console.log(time, value)

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

// function timeTracker() {
//     var curHour = moment().hours(); { 
        
//         if (currentTime > aSpecificTimeBlock) {
//         aSpecificTimeBlock.className = ".past";
//      } if else { (currentTime < aSpecificTimeBlock); {
//         aSpecificTimeBlock.className = ".present";
//      } else {
//         aSpecificTimeBlock.className = ".future";
//      };
//     };
// };
// };
function timeTracker() {
    var curHour = moment().hours();
    console.log(curHour);
    console.log(onePM);
    console.log($(".description").each());
    if (curHour) {
        
        $(".description").each(function (timeTracker) {
            if ($("textArea").removeClass(".present").addClass(".past"));
            if ($("textArea").removeClass(".present").addClass(".future"));

        });
    }
};

timeTracker();



// $(".description").each(function() {
//     console.log(index + ":" + $(this).text());
//     $("textArea").removeClass(".present").addClass(".past");
// });

// $(".description").each(function(index) {
//     console.log(index + ":" + $(this).text());
//     $("textArea").removeClass(".present").addClass(".future");
// });

