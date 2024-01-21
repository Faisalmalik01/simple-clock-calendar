
function updateCalendar() {
    const calendarContainer = document.getElementById('calendarContainer');
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
  
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
    let calendarHTML = `<div class="calendar-grid">`;
  
    // Days of the week
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    daysOfWeek.forEach(day => {
      calendarHTML += `<div class="calendar-day">${day}</div>`;
    });
  
    let day = 1;
  
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayOfMonth) || day > daysInMonth) {
          calendarHTML += `<div class="calendar-day"></div>`;
        } else {
          const isCurrentDay = day === now.getDate() && currentMonth === now.getMonth();
          calendarHTML += `<div class="calendar-day ${isCurrentDay ? 'currentDay' : ''}">${day}</div>`;
          day++;
        }
      }
    }
  
    calendarHTML += `</div>`;
    calendarContainer.innerHTML = calendarHTML;
  }
  
  updateCalendar(); // Call this function when the page loads
  
  
  setInterval(updateCalendar, 60000); // Update calendar every minute
  