$(document).ready(function() {
    // Stuff to do as soon as the DOM is ready

    $('#click').on('click', function() {
        var input = $('#searchbox').val();
        console.log(input);
        var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=' + input + '&gsrlimit=10&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max'

        $.ajax({
            type: "GET",
            url: url,
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function(data) {
                console.log(data);
                var obj = data.query.pages;

                Object.keys(obj).forEach(function(key) {
                    console.log(key, obj[key].pageid);
                    console.log(key, obj[key].extract);
                    var pageLink = "https://en.wikipedia.org/?curid=" + obj[key].pageid;
                    target = "_blank"

                    $('#output').prepend("<li><p> " + obj[key].title + "</p></li>");
                    $('li').click(function() {
                        console.log(pageLink);

                        window.open($(this).find("a").attr(pageLink, "_blank"));

                    });

                });
                // var result = Object.keys(data).map(function(e) {
                //     return [Number(e), data[e]];
                // });






            },
            error: function(errorMessage) {
                alert("Error");
            }
        });
    });


});