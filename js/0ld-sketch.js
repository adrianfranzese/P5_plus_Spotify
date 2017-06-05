//Spotify cred//
// var clientID = "865f5b5b201c4f16ba15284057e4f26b"
// var clientSecret = "6a0d2df1ca214779831c216aa6c59673"
var clientAuth = "Basic " + window.btoa("865f5b5b201c4f16ba15284057e4f26b:6a0d2df1ca214779831c216aa6c59673").toString()
console.log(clientAuth)

// curl -H "Authorization: Basic ODY1ZjViNWIyMDFjNGYxNmJhMTUyODQwNTdlNGYyNmI6NmEwZDJkZjFjYTIxNDc3OTgzMWMyMTZhYTZjNTk2NzM=" -d grant_type=client_credentials https://accounts.spotify.com/api/token



var sToken = "BQB5Y-meng32LNf7ZHrDkZhUNr7-S2s34aUxqDIiweE2Yzy2Rbi4DriBJhOFN45QaQ44UIZaYBClBYsjwNzGVw"
var s = new SpotifyWebApi()
s.setAccessToken(sToken)




function setup() {
  createCanvas(windowWidth, 500)
  // var songInput = createInput('')
  // songInput.parent('mySketch')
  // songInput.id('songInput')
  // var songName = document.getElementById('songInput').value
  // var searchBttn = createButton('Search')
  // searchBttn.mousePressed(searchSong())
}

function draw() {

}

function searchSong() {
  var searchedTrack
  s.searchTracks("Your best american girl", function(err, data) {
    if (err) console.error(err)
    else {
      // searchedTrack = data
      // searchedTrack = searchedTrack.tracks.items[0]
      return data.tracks.items[0]
    }
  })
  return
}
