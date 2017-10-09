var feed = new Instafeed({
    get: 'user',
    userId: '1792941761',
    accessToken: '1792941761.1677ed0.ac27da00c99c43d4811ffe1818b8a5aa',
    target: 'instagram--feed',
    sortBy: 'most-recent',
    resolution: 'standard_resolution',
    limit: '6',
    template: '<div class="instagram--item"><a href="{{link}}" target="_blank" rel="noopener noreferrer"><img src="{{image}}" /></a></div>',
    // filter: function(image) {
    //     return image.tags.indexOf('TAG_NAME') >= 0;
    // }
});
feed.run();

// Testimonials Slider
var slider = tns({
    container: '#testimonials--slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    autoplayButtonOutput: false,
    controlsContainer: "#testimonials--slider-controls",
    nav: false,
    mouseDrag: true,
    arrowKeys: true
});


// for (var i = 0; i < document.getElementsByClassName("ignore-click").length; i++) {
//     document.getElementsByClassName("ignore-click")[i].addEventListener('click', function (event) {
//         var elmnt = document.getElementById("contact");
//         elmnt.scrollIntoView();
//     });
// }

var allTags = document.getElementById('nav').getElementsByTagName("a");
for (var i = 0, len = allTags.length; i < len; i++) {
    // allTags[i] is an element within the container object
    // allTags[i].id is the id of the element (if there is one)

    allTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        // var section = this.getAttribute('href');
        // console.log("HREF: " + section);
        // section.scrollIntoView();
        var elmnt = document.getElementById("contact");
        elmnt.scrollIntoView({behavior: "smooth"});
    });

}

// (function(){
    
//     var parallax = document.querySelectorAll(".parallax"),
//         speed = 0.1;

//     window.onscroll = function(){
//         [].slice.call(parallax).forEach(function(el,i){

//             var windowYOffset = window.pageYOffset,
//                 elBackgrounPos = "50% " + -(windowYOffset * speed) + "px";

//             el.style.backgroundPosition = elBackgrounPos;

//         });
//     };

// })();