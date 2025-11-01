$(document).ready(function () {
  // Animate height
  // height: "300px",  maxHeight: "400px", minHeight: "200px",
  $("#heightAnimateBtn").click(function () {
    $("#heightAnimate").animate({ height: "200px" }, 2000);
  });

  // Animate width
  // width: "300px", maxWidth: "400px", minWidth: "200px",
  $("#widthAnimateBtn").click(function () {
    $("#widthAnimate").animate({ width: "200px" }, 2000);
  });

  //   Animate Margin
  //   margin: "50px", marginBottom: "60px", marginLeft: "40px", marginRight: "40px", marginTop: "30px"
  $("#marginAnimateBtn").click(function () {
    $("#marginAnimate").animate({ marginTop: "70px" }, 2000);
  });

  //  Animate Padding
  //   padding: "30px",paddingBottom: "40px", paddingLeft: "20px",paddingRight: "20px",paddingTop: "25px"
  $("#paddingAnimateBtn").click(function () {
    $("#paddingAnimate").animate({ paddingTop: "30px" }, 2000);
  });

  //  Animate Background positions
  //  backgroundPositionX: "50px", backgroundPositionY: "50px"
  $("#bpositionAnimateBtn").click(function () {
    $("#position-div").animate(
      { backgroundPositionX: "+=100px", backgroundPositionY: "+=200px" },
      2000
    );
  });

  // Animate Border widths
  //   borderWidth: "15px", borderBottomWidth: "20px", borderLeftWidth: "10px", borderRightWidth: "10px", borderTopWidth: "5px"
  $("#borderAnimateBtn").click(function () {
    $("#borderAnimate").animate(
      { borderBottomWidth: "10px", borderTopWidth: "10px" },
      2000
    );
  });

  //   // Font & text
  //   fontSize: "30px", letterSpacing: "5px", wordSpacing: "10px", lineHeight: "2", textIndent: "50px"
  $("#textAnimateBtn").click(function () {
    $("#textAnimate").animate({ fontSize: "20px" }, 2000);
  });

  // Animate Opacity
  //   opacity: 0.7
  $("#opacityAnimateBtn").click(function () {
    $("#opacityAnimate").animate({ opacity: "0.7" }, 2000);
  });

  // Animate Outline
  //   outlineWidth: "10px"
  $("#outlineAnimateBtn").click(function () {
    $("#outlineAnimate").animate({ outlineWidth: "10px" }, 2000);
  });

  // Animate Position
  //   left: "100px", top: "50px", right: "0px", bottom: "0px"
  $("#positionAnimateBtn").click(function () {
    $("#positionAnimate").animate({ left: "400px" }, 2000);
  });

  // Reset height
  $("#heightResetBtn").click(function () {
    $("#heightAnimate").animate({ height: "100px" }, 1500);
  });

  // Reset width
  $("#widthResetBtn").click(function () {
    $("#widthAnimate").animate({ width: "100px" }, 1500);
  });

  //   Reset Margin
  $("#marginResetBtn").click(function () {
    $("#marginAnimate").animate({ marginTop: "5px" }, 2000);
  });

  //  Reset Padding
  $("#paddingResetBtn").click(function () {
    $("#paddingAnimate").animate({ paddingTop: "0px" }, 2000);
  });

  //   Reset background Position
  $("#bpositionResetBtn").click(function () {
    $("#position-div").animate(
      { backgroundPositionX: "0px", backgroundPositionY: "0px" },
      2000
    );
  });

  // Reset Border
  $("#borderResetBtn").click(function () {
    $("#borderAnimate").animate(
      { borderBottomWidth: "2px", borderTopWidth: "2px" },
      2000
    );
  });

  // Reset Text formatting
  $("#textResetBtn").click(function () {
    $("#textAnimate").animate({ fontSize: "16px" }, 2000);
  });

  // Reset Opacity
  $("#opacityResetBtn").click(function () {
    $("#opacityAnimate").animate({ opacity: "1" }, 2000);
  });

  // Reset Outline
  $("#outlineResetBtn").click(function () {
    $("#outlineAnimate").animate({ outlineWidth: "2px" }, 2000);
  });

  // Reset Position
  $("#positionResetBtn").click(function () {
    $("#positionAnimate").animate({ left: "0px" }, 2000);
  });
});
