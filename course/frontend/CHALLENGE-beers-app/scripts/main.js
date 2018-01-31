(function ($) {
    $('form').submit(function (e) {
        e.preventDefault();
        var query = $('#searchinput').val();
        var $box = $('#box');
        $box.children().remove();

        $.ajax({
            url: 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + query,
            success: makeList
        });
        function makeList(beers) {
            //console.log(result);
            beers.forEach(function (beer) {
                $box.append('<a href="#'+beer.id+'">' + beer.name + '</a>');
            });
            $box.find('a').addClass('list-group-item list-group-item-action');
        }
    });

    $(document).click(function (e) {
        var $target = $(e.target);
        if ($target.is('a')) {
            $('#info').hide();
            $('#info img').attr('src','')
            $('#info .card-header').text('');
            $('#info .card-text').text('');
            var beerId = $target.attr('href').slice(1);
            $.ajax({
                url: "https://quiet-inlet-67115.herokuapp.com/api/beer/" + beerId,
                success: showBeerInfo
            });
            function showBeerInfo (beer) {
                console.log(beer);
                $('#info img').attr('src',beer.labels.medium || '')
                $('#info .card-header').text(beer.name || 'No title');
                $('#info .card-text').text(beer.description || 'No description');
                $('#info').show();
            }
        }
    });
})(jQuery);
