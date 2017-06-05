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
 var hue = [120, 80, 60, 45, 30, 0, 330, 285, 260, 235, 190, 160]
//  hsl(key, valence, energy)
//  key = 11 = B = 160
//  valence = 0.818 * 100 = 81.1
//  energy = 0.578 * 100 = 57.8
//  = hsl(160, 81.1, 57.8)

//  Colour Picker:
//  Key = Hue
//  Valence = Saturation
//  Engergy = Luminance
//
//  Tempo
//  Danceability
//  Loudness
//  Mode (Major=1/Minor=0)

var sToken = "BQB5Y-meng32LNf7ZHrDkZhUNr7-S2s34aUxqDIiweE2Yzy2Rbi4DriBJhOFN45QaQ44UIZaYBClBYsjwNzGVw"
var s = new SpotifyWebApi()
s.setAccessToken(sToken)

var songID = "4ZgRu1DdjHZXrqwKA1YlSr"
function songFeature() {
  s.getAudioFeaturesForTrack(songID, function(err, data) {
    var mySong = {}
    if (err) console.error(err)
    else {
     mySong.item = data
     return mySong
    }
  })
}

function setup() {

}
