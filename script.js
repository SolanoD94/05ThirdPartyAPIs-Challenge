// ready function allows the functions inside of it to run only until the page is completely loaded. 
$ (document).ready(function (){

  $(function () {
    var today = dayjs();
    var nowHour = dayjs().format("HH");
    var hours = nowHour.toString() * 100;
    var saveBtn = $(".saveBtn")
    var keys = ["900", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700"]
    var description = $(".description")

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  function render(){
  for (var i = 0; i < keys.length; i++){
    $(description).text(localStorage.getItem(keys[i - 1]))}
console.log(localStorage.getItem(keys[i - 1]))
console.log()
  
  }render()
 
    

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

  
  

// Code to display the current date in the header of the page.
  $('#currentDay').text("Today is " + today.format('dddd,  MMMM D YYYY'));
  $('#currentHour').text("Current hour: " + today.format('HH:mm'));
  
})})
