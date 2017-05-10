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

            },
            error: function(errorMessage) {
                alert("Error");
            }
        });
    });


});