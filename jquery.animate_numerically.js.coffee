jQuery.fn.animateNumerically = (from, to, callback) ->
  elm = $ this
  $(property: from).animate(property: to, {
    duration: 3000,
    step: ->
      elm.text callback(Math.round(@property))
    complete: ->
      elm.text callback(to)
  })
