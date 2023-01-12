// ready function allows the functions inside of it to run only until the page is completely loaded. 
$ (document).ready(function (){
  
  $(function () {
    var today = dayjs();
    var nowHour = dayjs().format("HH");
    var hours = nowHour.toString() * 100;
    var saveBtn = $(".saveBtn")
    var keys = ["900", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700"]
    var description = $(".description")

  // Code to display the current date in the header of the page.
  $('#currentDay').text("Today is " + today.format('dddd,  MMMM D YYYY'));
  $('#currentHour').text("Current hour: " + today.format('HH:mm'));

  
    // Show data from local Storage in the DOM when page is reloaded.
  // Function written in jquery
  function render(){
    $(description).each(function(i){
      $(this).text(localStorage.getItem(keys[i]));
    })
  } render()
    

  //Function to save info in local storage when save Button is clicked.
    saveBtn.on("click", function (){
    var timeBlock = $(this).parent().attr("id");
    var savedText = $(this).siblings("textarea").val();
    console.log(timeBlock)
    console.log(savedText)
    localStorage.setItem(timeBlock, savedText)
  
  })
  // Function to change class depending on current hour.
    $(".time-block").each(function(){
    var timeBlock = $(this).attr("id");
  
    if (hours == timeBlock){
      $(this).removeClass("future")
      $(this).removeClass("past")
      $(this).addClass("present")
      $(this).children().eq(1).text("You should be doing this right now!")
    }else if(hours > timeBlock){
      $(this).removeClass("future")
      $(this).addClass("past")
      $(this).removeClass("present")
    }else if(hours < timeBlock){
      $(this).addClass("future")
      $(this).removeClass("past")
      $(this).removeClass("present")
    }
  })

// Function to clear local Storage every new day on minute 00:01
  function clear(){
    const nowHour = dayjs().format("HH:mm")
    if (nowHour == "00:01"){
      localStorage.clear()
    }return
  } clear()


})})