(function() {
  jQuery.fn.animateNumerically = function(from, to, callback) {
    var elm;
    elm = $(this);
    return $({
      property: from
    }).animate({
      property: to
    }, {
      duration: 3000,
      step: function() {
        return elm.text(callback(Math.round(this.property)));
      },
      complete: function() {
        return elm.text(callback(to));
      }
    });
  };
}).call(this);
