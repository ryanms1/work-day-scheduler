//GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


const currentDay = $('#currentDay')[0];
const currentTime = moment().hour();
// const currentTime = 12

// display current day 
currentDay.innerText = moment().format('dddd, MMMM Do')

//color code textareas based on current time vs time of event
$("textarea").each(function(){
    let eventTime = $(this).attr('id')
    if(eventTime < currentTime) {
        $(this).addClass('past')
    }
    else if (eventTime == currentTime){
        $(this).addClass('present')
    }
    else {
        $(this).addClass('future')
    }  
})

//save task function
function saveTask(){
    const event = $(this).siblings('.description').val()
    const eventTime = $(this).siblings('.description').attr('id')

    console.log(eventTime, event)
    localStorage.setItem(eventTime, event)
}

$(".saveBtn").click(saveTask)

//display saved tasks
$('#9')[0].innerHTML = localStorage.getItem(9)
$('#10')[0].innerHTML = localStorage.getItem(10)
$('#11')[0].innerHTML = localStorage.getItem(11)
$('#12')[0].innerHTML = localStorage.getItem(12)
$('#13')[0].innerHTML = localStorage.getItem(13)
$('#14')[0].innerHTML = localStorage.getItem(14)
$('#15')[0].innerHTML = localStorage.getItem(15)
$('#16')[0].innerHTML = localStorage.getItem(16)
$('#17')[0].innerHTML = localStorage.getItem(17)




