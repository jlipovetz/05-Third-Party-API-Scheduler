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
text99 = $('#9-text');
text100 = $('#10-text');
text101 = $('#11-text');
text102 = $('#12-text');
text103 = $('#13-text');
text104 = $('#14-text');
text105 = $('#15-text');
text106 = $('#16-text');
text107 = $('#17-text');


hour9.on('click', function() {
  var text9 = document.getElementById("9-text").value
  localStorage.setItem('text9', JSON.stringify(text9))
  console.log(text9)
})

hour10.on('click', function() {
  var text10 = document.getElementById("10-text").value
  localStorage.setItem('text10', JSON.stringify(text10))
  console.log(text10)
})

hour11.on('click', function() {
  var text11 = document.getElementById("11-text").value
  localStorage.setItem('text11', JSON.stringify(text11))
  console.log(text11)
})

hour12.on('click', function() {
  var text12 = document.getElementById("12-text").value
  localStorage.setItem('text12', JSON.stringify(text12))
  console.log(text12)
})

hour13.on('click', function() {
  var text13 = document.getElementById("13-text").value
  localStorage.setItem('text13', JSON.stringify(text13))
  console.log(text13)
})

hour14.on('click', function() {
  var text14 = document.getElementById("14-text").value
  localStorage.setItem('text14', JSON.stringify(text14))
  console.log(text14)
})

hour15.on('click', function() {
  var text15 = document.getElementById("15-text").value
  localStorage.setItem('text15', JSON.stringify(text15))
  console.log(text15)
})

hour16.on('click', function() {
  var text16 = document.getElementById("16-text").value
  localStorage.setItem('text16', JSON.stringify(text16))
  console.log(text16)
})

hour17.on('click', function() {
  var text17 = document.getElementById("17-text").value
  localStorage.setItem('text17', JSON.stringify(text17))
  console.log(text17)
})



function readtasksFromStorage() {
  var text9 = localStorage.getItem('text9');
  var text10 = localStorage.getItem('text10');
  var text11 = localStorage.getItem('text11');
  var text12 = localStorage.getItem('text12');
  var text13 = localStorage.getItem('text13');
  var text14 = localStorage.getItem('text14');
  var text15 = localStorage.getItem('text15');
  var text16 = localStorage.getItem('text16');
  var text17 = localStorage.getItem('text17');
  if (text9) {
    text9 = JSON.parse(text9);
  } else {
    text9 = ""
  }
  if (text10) {
    text10 = JSON.parse(text10);
  } else {
    text10 = ""
  }
  if (text11) {
    text11 = JSON.parse(text11);
  } else {
    text11 = ""
  }
  if (text12) {
    text12 = JSON.parse(text12);
  } else {
    text12 = ""
  }
  if (text13) {
    text13 = JSON.parse(text13);
  } else {
    text13 = ""
  }
  if (text14) {
    text14 = JSON.parse(text14);
  } else {
    text14 = ""
  }
  if (text15) {
    text15 = JSON.parse(text15);
  } else {
    text15 = ""
  }
  if (text16) {
    text16 = JSON.parse(text16);
  } else {
    text16 = ""
  }
  if (text17) {
    text17 = JSON.parse(text17);
  } else {
    text17 = ""
  }
  return text99.text(text9), text100.text(text10), text101.text(text11), text102.text(text12), text103.text(text13), text104.text(text14), text105.text(text15), text106.text(text16), text107.text(text17);
}

readtasksFromStorage()



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