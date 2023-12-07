var timeDisplayEl = $('#currentDay');
hour9 = $('#hour-9')
hour10 = $('#hour-10')
hour11 = $('#hour-11')
hour12 = $('#hour-12')
hour13 = $('#hour-13')
hour14 = $('#hour-14')
hour15 = $('#hour-15')
hour16 = $('#hour-16')
hour17 = $('#hour-17')
hour = dayjs().format('HH')

if( 9 < hour)
hour9.attr('class', 'row time-block past')
else if(9 === hour)
hour9.attr('class', 'row time-block present')
else if(9 > hour)
hour9.attr('class', 'row time-block future')

if( 10 < hour)
hour10.attr('class', 'row time-block past')
else if(10 === hour)
hour10.attr('class', 'row time-block present')
else if(10 > hour)
hour10.attr('class', 'row time-block future')

if( 11 < hour)
hour11.attr('class', 'row time-block past')
else if(11 === hour)
hour11.attr('class', 'row time-block present')
else if(11 > hour)
hour11.attr('class', 'row time-block future')

if( 12 < hour)
hour12.attr('class', 'row time-block past')
else if(12 === hour)
hour12.attr('class', 'row time-block present')
else if(12 > hour)
hour12.attr('class', 'row time-block future')

if( 13 < hour)
hour13.attr('class', 'row time-block past')
else if(13 === hour)
hour13.attr('class', 'row time-block present')
else if(13 > hour)
hour13.attr('class', 'row time-block future')

if( 14 < hour)
hour14.attr('class', 'row time-block past')
else if(14 === hour)
hour14.attr('class', 'row time-block present')
else if(14 > hour)
hour14.attr('class', 'row time-block future')

if( 15 < hour)
hour15.attr('class', 'row time-block past')
else if(15 === hour)
hour15.attr('class', 'row time-block present')
else if(15 > hour)
hour15.attr('class', 'row time-block future')

if( 16 < hour)
hour16.attr('class', 'row time-block past')
else if(16 === hour)
hour16.attr('class', 'row time-block present')
else if(16 > hour)
hour16.attr('class', 'row time-block future')

if( 17 < hour)
hour17.attr('class', 'row time-block past')
else if(17 == hour)
hour17.attr('class', 'row time-block present')
else if(17 > hour)
hour17.attr('class', 'row time-block future')

// function readTextFromStorage() {
//   var text = localStorage.getItem('text');
//   if (text) {
//     text = JSON.parse(text);
//   } else {
//     text = [];
//   }
//   return text;
// }



function saveTextToStorage(text) {
  localStorage.setItem('text', JSON.stringify(text));
}

console.log(hour9)

// hour9.on('click', function (event) {
//   event.preventDefault();

//   var text = {
//     student: student.value,
//     grade: grade.value,
//     comment: comment.value.trim()
//   };
  
//   localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
//   renderMessage();
  
//   });



function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] HH:mm:ss a');
  timeDisplayEl.text(rightNow);
}

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
});
displayTime()
setInterval(displayTime, 1000)
// readTextFromStorage()