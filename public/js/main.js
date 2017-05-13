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
                var obj = data.query.pages;

                Object.keys(obj).forEach(function(key) {
                    console.log(key, obj[key].pageid);
                    console.log(key, obj[key].extract);
                    var pageLink = "https://en.wikipedia.org/?curid=" + obj[key].pageid;


                    $('#output').prepend("<li><div class='container'><p>" + obj[key].title + "</p><p>" + obj[key].extract + "</p></div></li>");
                    $('li div').addClass('style');
                    $('li').click(function() {
                        // $('a').attr({
                        //     "target": "-blank",
                        //     "href": "pageLink",
                        // });
                        window.open(pageLink, '_blank');


                    });

                });







            },
            error: function(errorMessage) {
                alert("Error");
            }
        });
    });


});