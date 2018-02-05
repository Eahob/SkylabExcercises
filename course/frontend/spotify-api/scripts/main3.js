(function () {
    let nameAndIdFormat = (name, id, emoji) => {
        return `<li>${name}<a name="${id}">${emoji}</a></li>`
    }
    $('form').submit(e => {
        e.preventDefault()
        let artistToSearch = $('#searchinput').val();
        $('#list-artist li').remove()
        spotifyApi.searchArtists(artistToSearch)
            .then(artistsList => {
                artistsList.forEach(artist => {
                    $('#list-artist > ul').append(nameAndIdFormat(artist.name, artist.id, '➡️'))
                })
            })
            .catch(console.error)
    })
    $(document).click(e => {
        let $target = $(e.target);
        let targetId;
        const hideAndgetId = () => {
            $target.parent().siblings('.active').removeClass('active')
            $target.parent().addClass('active')
            targetId = $target.attr('name')
        }
        if ($target.is('#list-artist > ul a')) {
            hideAndgetId()
            $('#list-album li').remove()
            spotifyApi.retrieveAlbums(targetId)
                .then(albumsAndSinglesList => {
                    albumsAndSinglesList.forEach(albumOrSingle => {
                        $('#list-album > ul').append(nameAndIdFormat(albumOrSingle.name, albumOrSingle.id, '➡️'));
                    })
                })
                .catch()
        }
        if ($target.is('#list-album > ul a')) {
            hideAndgetId()
            $('#list-track li').remove()
            spotifyApi.retrieveAlbumTracks(targetId)
                .then(trackList => {
                    trackList.forEach(track => {
                        $('#list-track > ul').append(nameAndIdFormat(track.name, track.id, track.preview_url ? '🎵' : '🔇'));
                    })
                })
                .catch(console.error)
        }
        if ($target.is('#list-track > ul a')) {
            hideAndgetId()
            var songPlayer = document.getElementById('songplayer') // I did not find how to do it with jQuery
            songPlayer.pause()
            spotifyApi.retrieveTrack(targetId)
                .then(track => {
                    $('audio source').attr('src', track.preview_url);
                    songPlayer.load()
                    songPlayer.play()
                })
                .catch(console.error)
        }
    })
})()
