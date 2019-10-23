$(document).ready(function(){
    
    //Click for Color Section
    var $clickForColor = $("#click-for-color");
    var $colorParagraph = $("#color-paragraph");
    $clickForColor.click (function () {
        $colorParagraph.css("color", "#F1B92D")
    })

    //Hide the Paragraph Section
    var $hideTheParagraph = $("#hide-the-paragraph");
    var $paragraphBecomesHidden = $("#paragraph-becomes-hidden");
    $hideTheParagraph.click (function () {
        $paragraphBecomesHidden.hide();
    })
  
    //Show the Paragraph Section
    var $showTheParagraph = $("#show-the-paragraph");
    var $paragraphIsShown = $("#paragraph-is-shown");
    $showTheParagraph.click (function () {
        $paragraphIsShown.show();
    })

    //Toggle Section
    var $toggleButton = $("#toggle-button");
    var $makeToggle = $("#make-toggle");
    $toggleButton.click (function () {
        $makeToggle.toggle();
    })

    //Slide Down Section
    var $slideDownButton = $("#slide-down-button");
    var $makeSlideDown = $("#make-slide-down");
    $slideDownButton.click (function () {
        $makeSlideDown.slideDown();
    })

     //Slide Up Section
     var $slideUpButton = $("#slide-up-button");
     var $makeSlideUp = $("#make-slide-up");
     $slideUpButton.click (function () {
         $makeSlideUp.slideUp();
     })

     //Slide Toggle Section
     var $slideToggleButton = $("#slide-toggle-button");
     var $makeSlideToggle = $("#make-slide-toggle");
     $slideToggleButton.click (function () {
         $makeSlideToggle.slideToggle();
     })

     //Fade In Section
     var $fadeInButton = $("#fade-in-button");
     var $makeFadeIn = $("#make-fade-in");
     $fadeInButton.click (function () {
         $makeFadeIn.fadeIn();
     })

     //Fade Out Section
     var $fadeOutButton = $("#fade-out-button");
     var $makeFadeOut = $("#make-fade-out");
     $fadeOutButton.click (function () {
         $makeFadeOut.fadeOut();
     })

     //Add Class Section
     var $addClassButton = $("#add-class-button");
     var $makeAddClass = $("#make-add-class");
     $addClassButton.click (function () {
         $makeAddClass.addClass("border red-color");
     })


});
















//THIS IS THE VANILLA JS WAY OF DOING THINGS:

// var clickForColor = document.getElementById("click-for-color");

// var colorParagraph = document.getElementById("color-paragraph");


// clickForColor.addEventListener("click", function () {
//     colorParagraph.style.color = "red";
// })
