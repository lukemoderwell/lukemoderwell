const convertDateToString = (originalDate) => {
  let _date
  if (originalDate instanceof Date) {
    _date = originalDate
  } else {
    _date = new Date(originalDate)
  }
  const DD = String(_date.getDate()).padStart(2, '0')
  const MM = String(_date.getMonth() + 1).padStart(2, '0') //January is 0!
  const YYYY = _date.getFullYear()
  const str = MM + '-' + DD + '-' + YYYY
  return str
}

export default convertDateToString
