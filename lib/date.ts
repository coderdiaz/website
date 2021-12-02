import { format } from 'date-fns-tz'
const getLocale = () => require('date-fns/locale/es/index.js')
const formatISO = (date) => require('date-fns/formatISO/index')(date)

function capitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export const formatDate = (date: string | number | Date, formatStyle: string) => {
  const formatted = format(date, formatStyle, {
    locale: getLocale(),
    timeZone: 'America/Mexico_City',
  })

  return {
    iso: formatISO(date),
    formatted: capitalizeFirstLetter(formatted),
  }
}

export const showDate = (date: string, format: string = 'LLLL dd, yyyy') => {
  // https://stackoverflow.com/questions/48172772/time-zone-issue-involving-date-fns-format
  const dt = new Date(date)
  const dtDateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000)

  return formatDate(dtDateOnly, format)
}