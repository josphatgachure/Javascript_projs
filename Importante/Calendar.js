
const calendar =document.getElementById('calendar');

const monthEl = document.getElementById('month');
const months = [
    'January','February','March','April',
    'May','June','July','August',
    'September','October','November','December',
];

const days =['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

const today = new Date()
let currentMonth =today.getMonth();
let currentYear = today.getFullYear();

const drawBlankCalender = ()=> {

    for(let i=0 ; i<35; i++){
        const day = document.createElement('div');
        day.classList.add("day");

        const dayText = document.createElement('p');
        dayText.classList.add("day-text");
        dayText.innerText = days[i % 7]; //when it get to 8 it goes back to one cyclically

        const dayNumber = document.createElement('p');
        dayNumber.classList.add("day-number");

        const eventName = document.createElement('small');
        eventName.classList.add("event-Name");

        calendar.appendChild(day);
        day.appendChild(dayText);
        day.appendChild(dayNumber);    
        day.appendChild(eventName);
        

    }
    
   
};

const updateCalendar = (month, year, events)=>{

    const dayElements = document.querySelectorAll('.day');// choosing every div to get a reference to each element

    const theFirst = new Date();
    theFirst.setMonth(month);
    theFirst.setDate(year);

    const thefirstDayofWeek = theFirst.getDay();
    const monthName = months[month];
    const monthWithYear = `${year} - ${monthName}`;
    monthEl.innerText = monthWithYear;
    const daysInMonth = new Date(year,month + 1,0).getDate();


    let dayCounter = 1;
    for (let i=0; i< dayElements.length; i++) {

        const day = dayElements[i]; //these have their own properties ie text and number
        
        
        const dayNumber = day.querySelector('.day-number');
        if(i>=thefirstDayofWeek && dayCounter<=daysInMonth){
            dayNumber.innerText = dayCounter;
            dayCounter++
        }else{
            dayNumber.innerText = " ";
        }
    }

};

const previousMonth =() => {
    if(currentMonth === 0){
        currentMonth = 12;
        currentYear--;
    }
    updateCalendar(--currentMonth,currentYear);
}

const nextMonth =() => {
    if(currentMonth === 11){
        currentMonth = -1;
        currentYear++;
    }
    updateCalendar(++currentMonth,currentYear);
}
drawBlankCalender();
updateCalendar(currentMonth,currentYear);