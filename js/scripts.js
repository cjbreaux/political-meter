$(document).ready(function(){
  $("form#formOne").submit(function(){
    var total = 0;
    var input1 = $("input:radio[name=politic]:checked").val();
    input1 = parseInt(input1);

    var input2 = $("input:radio[name=politic2]:checked").val();
    input2 = parseInt(input2);


    var score = input1 + input2;

    if (score <= 2) {
      alert("liberal");

    }

    if (score > 2 && score <= 4) {
      alert("Moderate");
    }

    if (score >= 5) {
      alert("Conservative");
    }

  });

});
