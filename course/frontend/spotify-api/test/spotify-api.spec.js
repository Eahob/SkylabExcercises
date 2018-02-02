describe("Spotify API", function() {
  describe("search artists", function() {
    var artists;

    beforeEach(function(done) {
      spotifyApi.searchArtists(
        "madonna",
        function(_artists) {
          artists = _artists;

          done();
        },
        function(error) {
          done();
        }
      );
    });

    it("should get results on search", function() {
      expect(artists).not.toBeUndefined();

      expect(artists.length > 0).toBeTruthy();
    });
  });

  describe("retrieve albums", function() {
    var albums;

    beforeEach(function(done) {
      spotifyApi.retrieveAlbums(
        "6tbjWDEIzxoDsBA1FuhfPW",
        function(_albums) {
          albums = _albums;

          done();
        },
        function(error) {
          done();
        }
      );
    });

    it("should get items on retrieve", function() {
      expect(albums).not.toBeUndefined();

      expect(albums.length > 0).toBeTruthy();
    });
  });
  describe("retrieve album tracks", function() {
    var tracks;
    beforeEach(function(done){
      spotifyApi.retrieveAlbumTracks(
        "4AuTpoHT1Pyb3Wjl3H2C54",
        function (_tracks){
          tracks = _tracks;
          done();
        },
        function(error) {
          done();
        }
      );
    });
    it("should get tracks on retrieve", function() {
      expect(tracks).not.toBeUndefined();

      expect(tracks.length > 0).toBeTruthy();
    });
  });
  describe("retrieve songs", function() {
    var song;
    beforeEach(function(done){
      spotifyApi.retrieveTrack(
        "6JKDMbwz1ZSz3zRFomeH0s",
        function (_song){
          song = _song;
          done();
        },
        function(error) {
          done();
        }
      );
    });
    it("should get track url", function() {
      expect(song.preview_url).not.toBeUndefined();
    });
  });
});
