/**
 * Spotify API client.
 *
 * @version 1.0.0
 */
var spotifyApi;
(function () {
  'use strict';

  function call(url, token, handleSuccess, handleError, timeout) {
    /*
    $.ajax({
      url: url,
      headers: { Authorization: 'Bearer ' + token },
      timeout: timeout,
      success: handleSuccess,
      error: handleError
    });
    */
    fetch(url, {headers: { Authorization: 'Bearer ' + token }})
      .then(res => res.json())
      .then(handleSuccess)
      .catch(handleError)
    
  }

  spotifyApi = {
    baseUrl: 'https://api.spotify.com/v1/',

    token: /* how to get the token: https://developer.spotify.com/web-api/console/get-search-item/ */
      'BQC1ladkMXv6EJZREjK1lMTFRucv3yPNcytWmf-IPEmPunDQ4LpWFafmebmAteXD1mUmannVKcpyXXBF1ZweMiCXV5Ml29HVpSBTNC0fVIL_sUaUgsFxFLQCACXLx4kHwvZu-utKlU3dB_4g8wwn',

    timeout: 2000,

    /**
     * Searches artists by matching a text.
     *
     * @param {String} query - The text to search.
     * @param {Function} handleResults - Handles the results.
     * @param {Function} handleError - Handles an error.
     */
    searchArtists: function (query, handleResults, handleError) {
      call(
        this.baseUrl + 'search?type=artist&q=' + query,
        this.token,
        function (results) {
          handleResults(results.artists.items);
        },
        handleError,
        this.timeout
      );
    },

    /**
     * Retrieve albums from an artist (by artist id).
     *
     * @param {String} artistId - The id of the artist to retrieve the albums from.
     * @param {Function} handleResults - Handles the results.
     * @param {Function} handleError - Handles an error.
     */
    retrieveAlbums: function (artistId, handleResults, handleError) {
      call(
        this.baseUrl + 'artists/' + artistId + '/albums',
        this.token,
        function (results) {
          handleResults(results.items);
        },
        handleError,
        this.timeout
      );
    },

    /**
     * Retrieve tracks from an album (by album id).
     *
     * @param {String} albumId - The id of the album to retrieve the tracks from.
     * @param {Function} handleResults - Handles the results.
     * @param {Function} handleError - Handles an error.
     */
    retrieveAlbumTracks: function (albumId, handleResults, handleError) {
      call(
        this.baseUrl + 'albums/' + albumId + '/tracks',
        this.token,
        function (results) {
          handleResults(results.items);
        },
        handleError,
        this.timeout
      );
    },

    /**
     * Retrieve track by id.
     *
     * @param {String} id - The id of the track to retrieve information from.
     * @param {Function} handleResults - Handles the results.
     * @param {Function} handleError - Handles an error.
     */
    retrieveTrack: function (id, handleResults, handleError) {
      call(
        this.baseUrl + "tracks/" + id,
        this.token,
        handleResults,
        handleError,
        this.timeout
      );
    }
  };
})();
