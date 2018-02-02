(function () {
    var $listArtist = $('#list-artist');
    var $listAlbum = $('#list-album');
    var $listTrack = $('#list-track');
    $('form').submit(function (e) {
        e.preventDefault();
        var artistToSearch = $('#searchinput').val();
        $listArtist.children().remove();
        $listAlbum.children().remove();
        $listTrack.children().remove();
        spotifyApi.searchArtists(artistToSearch, function (artistsList) {
            artistsList.forEach(function (artist) {
                $listArtist.append('<li>' + artist.name + ' <a href="#' + artist.id + '">➡️</a></li>');
            });
        });
    });
    $(document).click(function (e) {
        var $target = $(e.target);
        if ($target.is('#list-artist a')) {
            var artistId = $target.attr('href').slice(1);
            $listAlbum.children().remove();
            $listTrack.children().remove();
            spotifyApi.retrieveAlbums(artistId, function (albumsAndSinglesList) {
                albumsAndSinglesList.forEach(function (albumOrSingle) {
                    $listAlbum.append('<li>' + albumOrSingle.name + ' <a href="#' + albumOrSingle.id + '">➡️</a></li>')
                });
            });
        }
        if ($target.is('#list-album a')) {
            var albumOrSingleId = $target.attr('href').slice(1);
            $listTrack.children().remove();
            spotifyApi.retrieveAlbumTracks(albumOrSingleId, function (trackList) {
                trackList.forEach(function (track) {
                    $listTrack.append('<li>' + track.name + ' <a href="#' + track.id + '">🎵</a></li>')
                });
            });
        }
        if ($target.is('#list-track a')) {
            var trackId = $target.attr('href').slice(1);
            var $playSong = $('#playsong');
            $playSong.children().remove();
            spotifyApi.retrieveTrack(trackId, function (track) {
                $playSong.append('<audio controls><source src="'+track.preview_url+'" type="audio/mpeg"></audio>');
            });
        }
    });
})();
