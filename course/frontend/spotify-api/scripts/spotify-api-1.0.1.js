/**
 * Spotify API client.
 *
 * @version 1.0.1
 */
let spotifyApi;
(() =>{
  'use strict';
  
  const call = (url, token)  => fetch(url, {headers: { Authorization: 'Bearer ' + token }}).then(res => res.json())
  
  spotifyApi = {
    baseUrl: 'https://api.spotify.com/v1/',

    token: /* how to get the token: https://developer.spotify.com/web-api/console/get-search-item/ */
      'BQD0-tWZlqNO1viEhBC3JndDd9trIXTYnci91XsxJU78JQD80JKcZcC0KyfYl-bEBfgqexyRFLVTRlR6Fwmf_XlwHfHUDrOw3S9xpdyg78TSWEZv8dRnmVXKs4YqE3Q6U5VhWNGKB4v6VL_KRprn',

    timeout: 2000,

    /**
     * Searches artists by matching a text.
     *
     * @param {String} query - The text to search.
     */
    searchArtists: function (query) {
      return call(this.baseUrl + 'search?type=artist&q=' + query,this.token).then(results  => results.artists.items)
    },

    /**
     * Retrieve albums from an artist (by artist id).
     *
     * @param {String} artistId - The id of the artist to retrieve the albums from.
     */
    retrieveAlbums: function (artistId) {
      return call(this.baseUrl + 'artists/' + artistId + '/albums',this.token ).then(results  => results.items);
    },

    /**
     * Retrieve tracks from an album (by album id).
     *
     * @param {String} albumId - The id of the album to retrieve the tracks from.
     */
    retrieveAlbumTracks: function (albumId) {
      return call(this.baseUrl + 'albums/' + albumId + '/tracks',this.token).then(results  => results.items);
    },

    /**
     * Retrieve track by id.
     *
     * @param {String} id - The id of the track to retrieve information from.
     */
    retrieveTrack: function (id) {
      return call(this.baseUrl + "tracks/" + id,this.token);
    }
  };
})();
