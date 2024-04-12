
var video = document.getElementById('player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	console.log("Shut down the Auto play");
	console.log("Shut down the Loop")
	video.autoplay = false;
	video.loop = false;
});

// play video
document.querySelector('#play').addEventListener('click', function() {
	console.log("play video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	video.play();
});

// pause video
document.querySelector('#pause').addEventListener('click', function() {
	console.log("pause video");
	video.pause();
});

// slower video
document.querySelector('#slower').addEventListener('click', function() {
	video.playbackRate *= 0.9;
	console.log('New speed: ' + video.playbackRate);
});

// faster video
document.querySelector('#faster').addEventListener('click', function() {
	video.playbackRate /= 0.9;
	console.log('New speed: ' + video.playbackRate);
});

// skip ahead video
document.querySelector('#skip').addEventListener('click', function() {
	console.log('skip ahead video');
	
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log('Current video location: ' + video.currentTime);
});

//mute video
document.querySelector("#mute").addEventListener("click", function () {
	console.log("mute video");
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	  } else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	  }
  });

//volume change
document.querySelector("#slider").addEventListener("input", function () {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = this.value + "%";
	console.log('Current video volume: ' + this.value + "%")
  });

// old school
  document.querySelector("#vintage").addEventListener("click", function () {
	console.log('old school');
	video.classList.add("oldSchool");
  });

// origin
  document.querySelector("#orig").addEventListener("click", function () {
	console.log('origin');
	video.classList.remove("oldSchool");
  });

// function updateVolumeDisplay() {
// 	document.querySelector("#volume").innerHTML = Math.round(video.volume * 100) + "%";
//   }


