L.mapbox.accessToken = 'pk.eyJ1Ijoibm9yYWJlbmVkaWN0IiwiYSI6ImNpdXllbjdkbzA0aHYyeWwxd3BoaDdrYzgifQ.F94DF9486D8vAprIkZSOnQ';
var map = L.mapbox.map('map', 'mapbox.outdoors').setView([40,-100],4);
var info = document.getElementById('info');

var mapLocations = omnivore.kml('locations.kml')
    .on('ready', function() {
      map.fitBounds(mapLocations.getBounds());
    })
    .addTo(map);

var playButton = document.querySelector('#playBtn'),
    toggleMuteButton = document.querySelector('#toggleMuteBtn'),
    timer = document.querySelector('#time'),
    wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'violet',
        progressColor: 'purple',
        interact: false,
        cursorWidth: 0
    });

wavesurfer.load('revolution.mp3');

wavesurfer.on('ready', function() {
    playButton.onclick = function() {
          wavesurfer.playPause();
    };

        toggleMuteButton.onclick = function() {
            wavesurfer.toggleMute();
    };
});

wavesurfer.load('whitey.mp3');

wavesurfer.on('ready', function() {
    playButton.onclick = function() {
        wavesurfer.playPause();
    };

    toggleMuteButton.onclick = function() {
        wavesurfer.toggleMute();
    };
});

wavesurfer.load('southcarolina.mp3');

wavesurfer.on('ready', function() {
    playButton.onclick = function() {
        wavesurfer.playPause();
    };

    toggleMuteButton.onclick = function() {
        wavesurfer.toggleMute();
    };
});
