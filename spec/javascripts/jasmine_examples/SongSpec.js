describe("Song", function(){
  var player;
  var song;

  beforeEach(function(){
    player = new Player();
    song = new Song();
  });

  it("should have play a song", function(){
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);
  })

})