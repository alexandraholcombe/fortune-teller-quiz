//Business Logic
var rawScore = 0
var Score = 0;
function Calculate() {
  $("input:checkbox[name=fortune]:checked").each(function() {
    rawScore = parseInt($(this).val());
    Score = Score + rawScore;
  });
  if (Score === 0) {
    $(".result").append("ordinary. Not lucky or unlucky")
  } else if (Score < 0) {
    $(".result").append("unlucky")
  } else {
    $(".result").append("lucky")
  }
};

//User Interface
$(document).ready(function() {
  $("form").submit(function(event) {
  event.preventDefault();
  $(".fortune-result").show();
  Calculate();
  });
});
