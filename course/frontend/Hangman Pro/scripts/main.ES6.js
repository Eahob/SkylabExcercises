$(document).ready(function () {
    let game,data;
    let $gameset = $("#gameset");
    $("#gamestart").submit(event => {
        event.preventDefault();
        $gameset.show();
        $("#gamestart").hide();
    });
    $gameset.submit(event => {
        event.preventDefault();
        let word = $('#gameset input[type="text"]').val();
        let attempts = $('#gameset input[type="number"]').val()
        $('#hanged span').text(attempts);
        game = new Hangman(word, attempts);
        $("#gamedata, section:first-child").show();
        for (let i = 0; i < word.length; i++) {
            $('#letters').append($('<span>_</span>'));
        }
        $gameset.hide();
    });
    $("#gamedata").submit(event => {
        event.preventDefault();
        data = game.try($('#gamedata input[type="text"]').val());
        data.board.forEach( (letter, index) => {
            //$('#letters span:nth-child(' + (index + 1) + ')').text(letter).addClass('borderless');
            $(`#letters span:nth-child(${index + 1})`).text(letter).addClass('borderless');
        });
        $('#hanged span').text(data.attempts);
        $('#message').text(data.message)
        if (data.win || data.gameOver) {
            $('button').show();
            $(this).hide();
        }
    })
    $('button').click( () => {
        $gameset.show();
        $('button').hide();
        $('#gamedata, section:first-child').hide();
        $('#message').text('')
        $('#letters span').remove();
    });
});
