// var feed = new Instafeed({
//     get: 'user',
//     userId: '197710895',
//     accessToken: '197710895.1677ed0.0508ad9cddf84edbbb5b38349ab9d1f0',
//     target: 'instagram--feed',
//     sortBy: 'most-recent',
//     resolution: 'standard_resolution',
//     limit: '6',
//     template: '<div class="instagram--item"><a href="{{link}}" target="_blank" rel="noopener noreferrer"><img src="{{image}}" /></a></div>',
//     // filter: function(image) {
//     //     return image.tags.indexOf('TAG_NAME') >= 0;
//     // }
// });
// feed.run();

// Testimonials Slider
var slider = tns({
    container: '#testimonials--slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    autoplayButtonOutput: false,
    // controlsContainer: "#testimonials--slider-controls",
    nav: false,
    mouseDrag: true,
    arrowKeys: true
});


// SCROLL TO ELEMENT
var allTags = document.getElementsByClassName('nav--item');
for (var i = 0, len = allTags.length; i < len; i++) {
    // allTags[i] is an element within the container object
    // allTags[i].id is the id of the element (if there is one)

    allTags[i].addEventListener('click', function (event) {
        event.preventDefault();

        // Get href of element
        var section = this.getAttribute('href');
        section = section.replace("#", "");

        // Get HTML object of element
        var elmnt = document.getElementById(section);
        elmnt.scrollIntoView({ behavior: "smooth", block: "start"});
    });

}

function getDate(){
    var today = new Date();
    var year = today.getFullYear();
    document.getElementById("date--year").innerHTML = year;
}
getDate();


function equalHeights(selector) {
    var elms = document.querySelectorAll(selector);
    var len = elms.length;
    var tallest = 0;
    var elm, elmHeight, x;

    for (x=0; x < len; x++) {
        elm = elms[x];
        elmHeight = elm.offsetHeight;
        tallest = (elmHeight > tallest) ? elmHeight : tallest;
    }

    for (x=0; x < len; x++) {
        elms[x].style.height = tallest + 'px';
    }
}

var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight;

if (x > 640) {
    equalHeights('.services--copy');
}   

// Responsive Menu
var menuBtn = document.getElementById('toggle-nav');
var menu = document.getElementById('nav');

function toggleNav(event, cname) {
    this.classList.toggle(cname);
}

menuBtn.addEventListener('click', toggleNav.bind(menuBtn, event, 'active'), false);
menuBtn.addEventListener('click', toggleNav.bind(menu, event, 'active'), false);