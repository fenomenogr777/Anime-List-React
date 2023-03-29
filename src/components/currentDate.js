function currentDate() {
   const now = new Date().toISOString()
   const date = now.split('T')[0]
   const time = now.split('T')[1].split('.')[0]

   const test = new Date(date, time)
   console.log(test)
   console.log(now)
   console.log(date)
   console.log(time)

   return now
}
export default currentDate
