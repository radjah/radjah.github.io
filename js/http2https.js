$(document).ready(function() {
  $("a").each(function() {
    var i = $(this).attr("href");
    var n = i.replace("http://blog.radjah", "https://blog.radjah");
    $(this).attr("href", function() {
    return n
    })
  })
});