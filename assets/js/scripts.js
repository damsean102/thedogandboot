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
    autoplayButtonOutput: false,
    controlsContainer: "#testimonials--slider-controls",
    nav: false,
    mouseDrag: true,
    arrowKeys: true
  });