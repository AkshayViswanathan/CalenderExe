
let eventGuid = 0

let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

// Public Holiday

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Today',
    start: todayStr,
    end: '',
  },
  {
    id: createEventId(),
    title: 'Maha Shivarathri',
    start: "2024-03-08",
    end: "",
  }, {
    id: createEventId(),
    title: 'Maundy thursday',
    start: '2024-03-28',
    end: '',
  },
  {
    id: createEventId(),
    title: 'New Year',
    start: '2024-01-01',
    end: '',
  },
  {
    id: createEventId(),
    title: 'Republic day',
    start: '2024-26-01',
    end:'',
  },
  {
    id: createEventId(),
    title: 'Vishu',
    start:"2024-04-14" ,
    end:'',
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: new Date(''),
    end:'',
  }, {
    id: createEventId(),
    title: 'public holiday',
    start: '2024-02-01',
    end: '2024-02-03',
  },
  {
    id: createEventId(),
    title: 'New Year',
    start: new Date('2024-01-01'),
    end: '',
  },
  {
    id: createEventId(),
    title: 'Republic day',
    start: Date('2024-26-01'),
    end:'',
  },

] 

export function createEventId() {
  return String(eventGuid++)
}
