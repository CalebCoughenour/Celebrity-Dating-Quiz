$(document).ready(function() {
  $("form#answerForm").submit(function(event) {
    const height = parseInt($("input#height").val());
    const personality = $("input:radio[name=personality]:checked").val();
    const handed = $("input:radio[name=hand]:checked").val();



      if (height >= 6 && personality === 'introvert' && handed === 'left') {
        $("#firstCeleb").show();
      } else if (height >= 6 && personality === 'extrovert' && handed === 'left') {
        $("#firstCeleb").show();
      } else if (height < 6 && personality === 'extrovert' && handed === 'left') {
        $("#secondCeleb").show();
      } else if (height < 6 && personality === 'extrovert' && handed === 'left') {
        $("#secondCeleb").show();
      } else {
        $("#secondCeleb").show();
      }
      

    event.preventDefault();
  });
});