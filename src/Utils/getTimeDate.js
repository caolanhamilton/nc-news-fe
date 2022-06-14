export const getTimeDate = (longFormDate) => {
  const dateObj = new Date(longFormDate)
  const shortFormDate = `${dateObj.toLocaleTimeString().substring(0, 5)} ${dateObj.getDay()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`
  return shortFormDate
}