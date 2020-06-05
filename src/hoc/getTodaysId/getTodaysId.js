const getTodaysId = () => {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  
    const date = new Date()
    let todaysId = days[date.getDay()] + "-" + date.getDate() + "-"  + months[date.getMonth()] + "-"  + date.getFullYear()
    console.log( "getTodaysId  " + todaysId)

    return todaysId.toString()
}

export default getTodaysId