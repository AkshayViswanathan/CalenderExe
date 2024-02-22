<template>
   
  <div class='demo-app'>
    

    <div class='demo-app-main'>
      <FullCalendar  :options="calendarOptions" />
    </div>
  </div>
</template>


<script setup>
import { ref, watch } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from './event-utils';


const fullCalendarRef = ref("");
const searchDate = ref('');


const calendarOptions = {
  plugins: [dayGridPlugin, timeGridPlugin,interactionPlugin],
  
  initialView: 'dayGridMonth',

  headerToolbar: {
    left: 'prev today next',
    center: 'title',
    right: 'dayGridMonth timeGridWeek timeGridDay'
  },


  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  events: INITIAL_EVENTS,
  select: handleDateSelect,
  eventClick: handleEventClick,
};

function handleDateSelect(selectInfo) {
  const title = prompt('Please enter your event');
  if (title) {
    const calendarApi = selectInfo.view.calendar;
    calendarApi.addEvent({
      id: createEventId(),
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay
    });
  }
}
function handleEventClick(clickInfo) {
  if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'?`)) {
    clickInfo.event.remove();
  }
}
watch(searchDate, () => {
  highlightDate();
});
function highlightDate() {
  const calendarApi = fullCalendarRef.value.getApi();
  
  if (searchDate.value) {
    calendarApi.gotoDate(searchDate.value);
    const backgroundEvents = calendarApi.getEvents().filter(event => event.groupId === 'backgroundHighlight');
    backgroundEvents.forEach(event => event.remove());
    calendarApi.addEvent({
      start: searchDate.value,
      end: searchDate.value,
      display: 'background',
      color: 'cyan',
      groupId: 'backgroundHighlight',
    });
  }
}
</script>
<style scoped>
h2 {
  margin: 0;
  font-size: 16px;
}
ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}
li {
  margin: 1.5em 0;
  padding: 0;
}
b { 
  margin-right: 3px;
}
.demo-app {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}
.demo-app-sidebar {
  width: 300px;
  line-height: 1.5;
  background: #eaf9ff;
  border-right: 1px solid #d3e2e8;
}
.demo-app-sidebar-section {
  padding: 2em;
}
.demo-app-main {
  flex-grow: 1;
  padding: 3em;
  background-color: rgb(255, 255, 255);
  color: rgb(4, 80, 95);
}
.fc { 
  max-width: 1100px;
  margin: 0 auto;
  color: rgb(5, 79, 109)
}



</style>
