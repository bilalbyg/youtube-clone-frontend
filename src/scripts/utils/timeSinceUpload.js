const timeSinceUpload = (date) => {
    let uploadDate = date?.split("T")[0]
    const diffInMs = new Date() - new Date(uploadDate)
    const diffInDays = parseInt(diffInMs / (1000 * 60 * 60 * 24))

    let returnedValue;

    if(diffInDays >= 365){
        returnedValue = parseInt(diffInDays / 365) + " years ago"
      }
      else if(diffInDays >= 30){
        returnedValue = parseInt(diffInDays / 30) + " months ago"
      }else if(diffInDays >= 7){
        returnedValue = parseInt(diffInDays / 7) + " weeks ago"
      }else if(diffInDays >= 1){
        returnedValue = diffInDays + " days ago"
      }else{
        returnedValue = "a few hours ago"        
      }
      return returnedValue
}

module.exports = {
    timeSinceUpload
}