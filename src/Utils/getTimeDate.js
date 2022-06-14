export const getTimeDate = (longFormDate) => {
  const dateObj = new Date(longFormDate)
  const shortFormDate = `${dateObj.toLocaleTimeString().substring(0, 5)} on the ${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`
  return shortFormDate
}