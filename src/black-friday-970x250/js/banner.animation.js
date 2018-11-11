'use strict';

/**
 * Run the animation functions.
 */
Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = [
    'images/logo2.svg',
    'images/logo1.svg',
    'images/txt1.svg',
    'images/txt2.svg',
    'images/txt3.svg',
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
  ];

  var _this = this;
  this.preloadImages(this.images, function () {
    _this.createElements();
    _this.setup();
    _this.hidePreloader();
    _this.animate();
    _this.bindEvents();
  });
};

/**
 * Create dom elements.
 */
Banner.prototype.createElements = function () {
  this.img3 = this.smartObject({
    backgroundImage: 'images/img3.jpg',
    retina: true,
    parent: this.banner
  });
  this.img2 = this.smartObject({
    backgroundImage: 'images/img2.jpg',
    retina: true,
    parent: this.banner
  });
  this.img1 = this.smartObject({
    backgroundImage: 'images/img1.jpg',
    retina: true,
    parent: this.banner
  });
  this.divRight = this.smartObject({
    parent: this.banner
  });
  this.logoTop = this.smartObject({
    backgroundImage: 'images/logo2.svg',
    retina: true,
    parent: this.banner
  });
  this.txt1 = this.smartObject({
    backgroundImage: 'images/txt1.svg',
    retina: true,
    parent: this.banner
  });
  this.txt2 = this.smartObject({
    backgroundImage: 'images/txt2.svg',
    retina: true,
    parent: this.banner
  });
  this.txt3 = this.smartObject({
    backgroundImage: 'images/txt3.svg',
    retina: true,
    parent: this.banner
  });
  this.div = this.smartObject({
    parent: this.banner
  });
  this.logo = this.smartObject({
    backgroundImage: 'images/logo1.svg',
    retina: true,
    parent: this.banner
  });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function () {
  this.logoTop.set({ width: '100%', height: '100%', });
  this.txt1.set({ width: '100%', height: '100%', });
  this.txt2.set({ width: '100%', height: '100%', });
  this.txt3.set({ width: '100%', height: '100%', });
  this.img1.set({ width: '100%', height: '100%' });
  this.img2.set({ width: '100%', height: '100%', });
  this.img3.set({ width: '100%', height: '100%', });
  this.div.set({ width: '100%', height: '100%', backgroundColor: "#000" });
  this.divRight.set({ width: '42%', height: '100%', right: "0", left: 'unset', backgroundColor: "#000" });
  this.logo.set({ width: '100%', height: '100%', });
};

/**
 * Hide the preloader.
 */
Banner.prototype.hidePreloader = function () {
  TweenLite.to('.preloader', 1, { autoAlpha: 0 });
};

/**
 * Animation timeline.
 */
Banner.prototype.animate = function () {
  var _this = this;

  function loop() {
    _this.timeline.gotoAndPlay('start');
  }

  var loops = 0;
  var maxLoops = 1;

  var banner = document.querySelector('.banner')

  this.timeline = new TimelineMax({ repeat: maxLoops, paused: false, })
    .addLabel('start', 0)
    .add(TweenMax.set(".banner", { autoAlpha: 1 }))
    .add(TweenMax.to(this.logo, 0.1, { autoAlpha: 0, ease: Sine.easeOut, delay: 1 }))
    .add(TweenMax.to(this.div, 1, { xPercent: 100, ease: Sine.easeOut }))
    .add(TweenMax.to(this.div, 0.1, { autoAlpha: 0 }))
    .add(TweenMax.to(this.div, 0.1, { xPercent: -100, }))
    .add(TweenMax.from(this.logoTop, 0.1, { autoAlpha: 0, ease: Sine.easeOut, }))
    .add(TweenMax.from(this.txt1, 0.4, { autoAlpha: 0, ease: Sine.easeOut, delay: 1 }))
    .add(TweenMax.from(this.txt3, 0.4, { autoAlpha: 0, ease: Sine.easeOut, delay: 1 }))
    .add(TweenMax.to(this.txt1, 0.4, { autoAlpha: 0, ease: Sine.easeOut, delay: 2 }))
    .add(TweenMax.to(this.img1, 1, { autoAlpha: 0, ease: Sine.easeOutOut, delay: -0.1 }))
    .add(TweenMax.from(this.txt2, 0.4, { autoAlpha: 0, ease: Sine.easeOut, delay: -0.2 }))
    .call(function () {

      if (loops === maxLoops) {
        this.timeline.pause();
      }
      loops++;

    }.bind(_this))
    .add(TweenMax.to(this.div, 0.1, { autoAlpha: 1, }))
    .add(TweenMax.to([this.logoTop, this.txt2, this.txt3], 0.4, { autoAlpha: 0, ease: Sine.easeOut, delay: 3 }))
    .add(TweenMax.to(this.div, 1, { xPercent: 0, ease: Sine.easeOut, delay: -0.4 }))
    .add(TweenMax.to(this.logo, 0.2, { autoAlpha: 1, ease: Sine.easeOut, delay: 0.4 }))
};