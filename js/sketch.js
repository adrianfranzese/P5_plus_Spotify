//  Circle of Fifths to Spectrum
//  #   Key     Hz     Colour      Nm (WVLNTH)    Hue (deg)
//  ---------------------------------------------------
//  0   C       523    Green       525            120
//  1   C#/Db   554    Lime        564            80
//  2   D       587    Yellow      570            60
//  3   D#/Eb   622    Y-Orange    580            45
//  4   E       659    Orange      620            30
//  5   F       698    Red         700            0
//  6   F#/Gb   739    Magenta     740            330
//  7   G       392    Violet      435            285
//  8   G#/A    415    Purple      446            260
//  9   A       440    Dark Blue   450            235
//  10  A#/Bb   466    Blue        466            190
//  11  B       493    Aqua        488            160
//
 var songKey = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
 var songHue = [120, 80, 60, 45, 30, 0, 330, 285, 260, 235, 190, 160]
//  hsl(key, valence, energy)
//  key = 11 = B = 160
//  valence = 0.818 * 100 = 81.1
//  energy = 0.578 * 100 = 57.8
//  = hsl(160, 81.1, 57.8)

//  Colour Picker:
//  Key = Hue
//  Valence = Saturation
//  Energy = Luminance
//
//  Tempo = radius
//  Danceability
//  Loudness
//  Mode (Major=1/Minor=0)

var sToken = "BQDLnyySyp1EQ0Xgxn2jHjbsQ8EjLzYozHeP5rAZO2jO4cBejXoND5ctK1dyomj5mUC8swzzGRa7A_tDXMnv1A"
var s = new SpotifyWebApi()
s.setAccessToken(sToken)
var searchList
var mySong
var songID = ""
var penColH
var penColS
var penColB
var radiusSize
var radiusRatio = 1
var q = 0.0

function returnData(responseData){
  return responseData
}

function searchForSong(myInput) {
  myInput = document.getElementById("searchBox").value
  if (myInput == "") {
    songID = ""
    penColH = 0
    penColS = 0
    penColB = 100
    radiusSize = 0
  }
  else {
    s.searchTracks(myInput, function(err, data) {
      if (err) console.error(err)
      else {
        searchList = returnData(data)
        if (searchList.tracks.items == 0) {
          document.getElementById("name").innerHTML = "No Results"
          document.getElementById("artist").innerHTML = "Please try another search"
        }
        else {
          songID = searchList.tracks.items[0].id
          document.getElementById("name").innerHTML = searchList.tracks.items[0].name
          document.getElementById("artist").innerHTML = searchList.tracks.items[0].artists[0].name

          s.getAudioFeaturesForTrack(songID, function(err, data) {
              if (err) console.error(err)
              else {
                mySong = returnData(data)
                penColH = songHue[mySong.key]
                penColS = Math.round(mySong.valence * 100)
                penColB = Math.round(mySong.energy * 100)
                radiusSize = Math.round(mySong.tempo)
                radiusRatio = mySong.mode
              }
          })
          document.getElementById("searchBox").value = ""
          myInput = ""
        }
      }
    })
  }
}

function setup() {
  var canvas = createCanvas(400,400)
  canvas.parent(mySketch)
}

function draw() {
  background(255)
  colorMode(HSB)
  var c = color(penColH, penColS, penColB, 0.5)
  // strokeWeight(1)
  // stroke(0, 0, 100)
  noStroke()
  fill(c)
  translate(width/2, height/2)
  rectMode(RADIUS)
  angleMode(DEGREES)
  // Create ring
  // for (var i =0; i < 40; i++) {
  //   push()
  //   rotate(i / 6.35 )
  //   triangle(0, 0, radiusSize, 0, penColB, 50)
  //   pop()
  // }
  for (var i = 0; i < penColB; i++) {
    rotate(360 / penColB)
    rect(0,0, 1, radiusSize)
  }

  // randomSeed(Date.now())
  // var w = random(-15,15)
  fill(255)
  ellipse(0, 0, radiusSize*1.1, radiusSize*1.1)
  fill(c)
  ellipse(0, 0, radiusSize, radiusSize)

  var cssCol = 'hsl(' + penColH + ',' + penColS + '%,' + penColB + '%)'
  select("#info").style('color', cssCol)
}
