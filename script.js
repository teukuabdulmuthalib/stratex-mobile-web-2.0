window.addEventListener("load", () => {

  const tapScreen = document.getElementById("tapScreen");
  const bgMusic = document.getElementById("bgMusic");
  const musicBtn = document.getElementById("musicBtn");
  const eq = document.getElementById("eq");

  // TAP TO ENTER
  tapScreen.addEventListener("click", () => {

    tapScreen.style.display = "none";

    bgMusic.volume = 0.4;

    bgMusic.play().catch(err => {
      console.log(err);
    });

    musicBtn.classList.add("visible");

  });

  // MUTE / UNMUTE
  musicBtn.addEventListener("click", () => {

    if(bgMusic.paused){

      bgMusic.play();

      musicBtn.classList.remove("muted");

      if(eq){
        eq.classList.remove("muted");
      }

    } else {

      bgMusic.pause();

      musicBtn.classList.add("muted");

      if(eq){
        eq.classList.add("muted");
      }

    }

  });

});