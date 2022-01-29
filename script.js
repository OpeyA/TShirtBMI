"use strict";
$(document).ready(function () {
  //validate both forms
  $("#imperial").validate();
  $("#metric").validate();
  //Make the navigation menu a tab
  $("#menu").tabs();
  //code for imperial calculation
  $("#imperial").submit(function (e) {
    //on submit click
    e.preventDefault(); //prevent default
    $("#impBMI").empty(); //empty the BMI result input
    //change the opacity of the picture frame to show because it is set to zero in the stylesheet
    $(".frame").animate(
      {
        opacity: 1,
      },
      200
    );
    //Also let the option to change the tshirt color to show.
    $("#change").animate(
      {
        opacity: 1,
      },
      200
    );
    //save the users imput values from the Imperial form
    let heightFeet = $("#feet").val();
    let heightInch = $("#inches").val();
    let weight = $("#pounds").val();
    //Calculate the BMI via imperial calculation
    let impBMI = calcImperialBMIFeetAndInches(
      heightFeet,
      heightInch,
      weight
    ).toFixed(1); //set BMI fixed to one decimal place
    $("#impBMI").attr("value", impBMI); //change the value to the result
    //Insert this print on the T-shirt with the BMI calculator
    $(".caption").text(`My BMI is ${impBMI} but who cares?! I'm happy!`);
  });
  //code for metric calculation
  $("#metric").submit(function (evt) {
    evt.preventDefault();
    $("#metBMI").empty(); //empty the BMI result input
    //change the opacity of the picture frame to show because it is set to zero in the stylesheet
    $(".frame").animate(
      {
        opacity: 1,
      },
      200
    );
    //Also let the option to change the tshirt color to show.
    $("#change").animate(
      {
        opacity: 1,
      },
      200
    );
    //save the users imput values from the Imperial form
    let heightCM = $("#centimeters").val();
    let weightkilo = $("#kilograms").val();
    let metBMI = calcMetricBMI(heightCM, weightkilo).toFixed(1); ////set BMI fixed to one decimal place
    $("#metBMI").attr("value", metBMI); //change the value to the result
    //Insert this print on the T-shirt with the BMI calculator
    $(".caption").text(`My BMI is ${metBMI} but who cares?! I'm happy!`);
  });
  //When the button to change color is clicked
  $("#color").click(function (e) {
    //change the tchirt image source to a black shirt
    let newSrc = "../images/blacktshirt.jpg";
    $(".tshirt").prop("src", newSrc);
  });
  // On mouse hovers over the tshirt
  $(".tshirt").mouseenter(function () {
    //change the shirt img source back to a white shirt
    let oldSrc = "../images/tshirt2.jpg";
    $(".tshirt").prop("src", oldSrc);
  });
});
