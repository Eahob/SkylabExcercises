$(document).ready(function () {
    var game,data;
    var $gameset = $("#gameset");
    $("#gamestart").submit(function (event) {
        event.preventDefault();
        $gameset.show();
        $(this).hide();
    });
    $gameset.submit(function (event) {
        event.preventDefault();
        var word = $('#gameset input[type="text"]').val();
        var attemps = $('#gameset input[type="number"]').val()
        $('#hanged span').text(attemps);
        game = new Hangman(word, attemps);
        $("#gamedata, section:first-child").show();
        for (var i = 0; i < word.length; i++) {
            $('#letters').append($('<span>_</span>'));
        }
        $gameset.hide();
    });
    $("#gamedata").submit(function (event) {
        event.preventDefault();
        data = game.try($('#gamedata input[type="text"]').val());
        data.board.forEach(function (letter, index) {
            $('#letters span:nth-child(' + (index + 1) + ')').text(letter).addClass('borderless');
        });
        $('#hanged span').text(data.attemps);
        $('#message').text(data.message)
        if (data.win || data.gameOver) {
            $('button').show();
            $(this).hide();
        }
    })
    $('button').click(function () {
        $gameset.show();
        $(this).hide();
        $('#gamedata, section:first-child').hide();
        $('#message').text('')
        $('#letters span').remove();
    });
});
