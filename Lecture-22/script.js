$(document.body).ready(() => {
  console.log("Runnning my script!");

  // DIFFERENCE BETWEEN ATTRIBUTE AND PROPERTIES
  console.log($("#check").attr("checked"));
  console.log($("#check").prop("checked"));

  $("#check").attr("checked", "true");
  console.log($("#check").prop("checked"));

  $("#check").attr("checked", "garbage");
  console.log($("#check").prop("checked"));

  // Chaining in jQuery
  $("#div")
    .css("background-color", "black")
    .css("color", "white")
    .append(" Learning jQuery!");

  // Selecting multiple elements? How it works?
  $(".item").text("Random Text").css("font-size", "30px");

  $("div~div").attr("class", "box");

  $(".box")
    .css('border','1px solid black')
    .css('margin-top','5px')
    .addClass('myclass')

    $('#addtask').click((ev)=>{
        // Sabse pehle new task ko pick karlo
        let newTask = $('#newtask').val();
        $('#tasklist').append(
            $('<li>').text(newTask)
        )
    })
    
    let ul = $('#tasklist');
    ul.click((ev)=>{
        console.log(ev.target);
        $(ev.target).css('text-decoration','line-through');
    })
});

// alert('Hi!!');
