$(document).ready(function() {

    // VARIABLES



    // START

    $('button').click(function() {

        var $input = $('input[name=fName]').val();
        $('h1').html('Hello, ' + $input + '!');

        $('input[name="fName"]').val('');

        $('ul').append('<li>' + $input + '</li>');

    });

    $(document).on('click', 'ul li', function() {

        $(this).remove();

    });


    $('.clearAll').click(function() {

        $('ul').empty();

    });

});
