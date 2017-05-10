$(document).ready(function() {
    // Stuff to do as soon as the DOM is ready
    console.log("I'm here ....");
    var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search' + searchVar + "&format=json&callback=?";

    $.getJSON(url, function(data) {




    });
});