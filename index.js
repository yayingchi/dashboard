//Navbar Audio player for Today's Jam
document.addEventListener('DOMContentLoaded', function() {
    new GreenAudioPlayer('.greenPlayer');
});

const galleryCount = 6;   //number of gallery items (to be updated)

//Function to select a random gallery item as the feature (Based on date)
function randFeature() {
    var currDate = new Date();
    var featVal = (currDate.getDate()*31)%galleryCount; //generate a possible gallery number
    return featVal;
}
//Function to set the Feature gallery item based on the output of randFeature()
function setFeature(val){
    // get img src from gallery
    var gVal = "g" + val + "-img";
    var srcImg = document.getElementById(gVal).src;
    // set img src in feature
    document.getElementById("feature").src=srcImg;
    // get img description from gallery
    var srcDesc = document.querySelector("#modal" + val + " .gallery-body").innerHTML;
    // set img cap in feature
    document.getElementById("feature-cap").innerHTML = srcDesc;
    //set img modal
}


//Set the Gallery feature
var featVal = randFeature();
setFeature(featVal);



