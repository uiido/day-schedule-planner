// Sets current date & time
var $time = $('#currentDay');
var now = currentHour().toJSON();
var time = today.getHours();
var today = dayjs();
$('#currentDay').text(today.format('dddd MMM, D YYYY, h:mm'));

// Sets variables for each time slot
var hour9 = document.querySelector('#hour-9');
var hour10 = document.querySelector('#hour-10');
var hour11 = document.querySelector('#hour-11');
var hour12 = document.querySelector('#hour-12');
var hour13 = document.querySelector('#hour-13');
var hour14 = document.querySelector('#hour-14');
var hour15 = document.querySelector('#hour-15');
var hour16 = document.querySelector('#hour-16');
var hour17 = document.querySelector('#hour-17');

var notes9 = document.querySelector('#text9');
var notes10 = document.querySelector('#text10');
var notes11 = document.querySelector('#text11');
var notes12 = document.querySelector('#text12');
var notes13 = document.querySelector('#text13');
var notes14 = document.querySelector('#text14');
var notes15 = document.querySelector('#text15');
var notes16 = document.querySelector('#text16');
var notes17 = document.querySelector('#text17');

// Local storage
notes9.value = localStorage.getItem('hour9');
notes10.value = localStorage.getItem('hour10');
notes11.value = localStorage.getItem('hour11');
notes12.value = localStorage.getItem('hour12');
notes13.value = localStorage.getItem('hour13');
notes14.value = localStorage.getItem('hour14');
notes15.value = localStorage.getItem('hour15');
notes16.value = localStorage.getItem('hour16');
notes17.value = localStorage.getItem('hour17');

// Array for hours
var hours = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// $(function () {

    // Event listeners and local storage functions for each timeslot
    document.getElementById("button9").addEventListener("click", savePlan9);

     function savePlan9() {
        localStorage.setItem("hour9", notes9.value)
    }

    document.getElementById("button10").addEventListener("click", savePlan10);

     function savePlan10() {
        localStorage.setItem("hour10", notes10.value)
    }

    document.getElementById("button11").addEventListener("click", savePlan11);

     function savePlan11() {
        localStorage.setItem("hour11", notes11.value)
    }

    document.getElementById("button12").addEventListener("click", savePlan12);

     function savePlan12() {
        localStorage.setItem("hour12", notes12.value)
    }

    document.getElementById("button13").addEventListener("click", savePlan13);

     function savePlan13() {
        localStorage.setItem("hour13", notes13.value)
    }

    document.getElementById("button14").addEventListener("click", savePlan14);

     function savePlan14() {
        localStorage.setItem("hour14", notes14.value)
    }

    document.getElementById("button15").addEventListener("click", savePlan15);

     function savePlan15() {
        localStorage.setItem("hour15", notes15.value)
    }

    document.getElementById("button16").addEventListener("click", savePlan16);

     function savePlan16() {
        localStorage.setItem("hour16", notes16.value)
    }

    document.getElementById("button17").addEventListener("click", savePlan17);

     function savePlan17() {
        localStorage.setItem("hour17", notes17.value)
    }

    // functions to change timeslot background based on current time
    // hour 9
    if ($time == 9) {
        document.getElementById('hour-9').style.backgroundColor = "gray";
    } else if (getTime < 9) {
        document.getElementById('hour-9').style.backgroundColor = "Green";
    } else {
        document.getElementById('hour-9').style.backgroundColor = "Red";
    }

    // hour 10

    // hour 11

    // hour 12

    // hour 13

    // hour 14

    // hour 15

    // hour 16

    // hour 17

    

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    // COMPLETE
    
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    // COMPLETE
    
    // TODO: Add code to display the current date in the header of the page.
    // COMPLETE
// });