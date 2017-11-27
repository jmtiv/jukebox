/*globalWavesurferobject*/
var wavesurfer;





    document.addEventListener('DOMContentLoaded', function() {
        var playButton = document.querySelector('#playBtn'),
            toggleMuteButton = document.querySelector('#toggleMuteBtn'),
            setMuteOnButton = document.querySelector('#setMuteOnBtn'),
            setMuteOffButton = document.querySelector('#setMuteOffBtn');

        // Init wavesurfer
        var wavesurfer = WaveSurfer.create({
          container: '#waveform',
          waveColor: 'violet',
          progressColor: 'purple',
          interact: false,
          cursorWidth: 0
        });
        // // Init wavesurfer
        // wavesurfer = WaveSurfer.create({
        //     container: '#waveform',
        //     waveColor: 'black',
        //     interact: false,
        //     cursorWidth: 0
        // });


        wavesurfer.load('southcarolina.mp3');

        wavesurfer.on('ready', function() {
            playButton.onclick = function() {
                wavesurfer.playPause();
            };

            toggleMuteButton.onclick = function() {
                wavesurfer.toggleMute();
            };

            setMuteOnButton.onclick = function() {
                wavesurfer.setMute(true);
            };

            setMuteOffButton.onclick = function() {
                wavesurfer.setMute(false);
            };
        });
    });
