/*https://codepen.io/DIDIx13/pen/veVdXZ*/
var line1 = $('.line1');
var line2 = $('.line2');

var line1Spans = $('.line1 > span');
var line2Spans = $('.line2 > span');

// Set tweens
TweenMax.set([line1, line2], {
  x: -15
})
TweenMax.set([line1Spans, line2Spans], {
  alpha: 0
})


// Tween values
var tl = new TimelineMax({
  repeat: -1
});

tl.add(
  TweenMax.to(line1, .75, {
    x: 0,
  }),
  "start"
)

tl.add(
  TweenMax.to(line2, .75, {
    x: 0,
  }),
  "start+=0.15"
)

tl.add(
  TweenMax.staggerTo(line1Spans, .5, {
    alpha: 1,
  }, .05),
  "start"
)

tl.add(
  TweenMax.staggerTo(line2Spans, .5, {
    alpha: .3,
  }, .05),
  "start+=0.15"
)
