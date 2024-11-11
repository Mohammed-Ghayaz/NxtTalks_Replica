const videos = [
    "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/podcast/landing-section-bg-videos/amazon-video.mp4",
    "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/podcast/landing-section-bg-videos/uber-video.mp4",
    "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/podcast/landing-section-bg-videos/mysys.mp4",
    "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/podcast/landing-section-bg-videos/microsoft-video.mp4",
    "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/podcast/landing-section-bg-videos/slice-video.mp4",
    "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/podcast/landing-section-bg-videos/superk-video.mp4"
];

// Wait for the DOM to load before manipulating the video element
document.addEventListener("DOMContentLoaded", function(){
    videoControl();
    paragraphControl();
    window.onscroll = function () {
        toggleBackToTopButton();
    };
    window.addEventListener('scroll', updateProgressBar);
} );

function updateProgressBar() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    
    // Set the width of the progress bar
    document.getElementById('progress-bar').style.width = scrollPercentage + '%';
}

function toggleBackToTopButton() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  }
  
  // Scroll to top when button is clicked
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


function videoControl(){    
        let videoEl = document.getElementById("backgroundVideo");
        let videoIndex = 0;
    
        videoEl.src = videos[videoIndex];
        videoEl.play();
    
        // Function to change the video
        function changeVideo() {
            videoIndex = videoIndex + 1;  // Move to the next video in the array
            if (videoIndex >= videos.length) {
                videoIndex = 0;  // Loop back to the first video if we reach the end
            }
            videoEl.src = videos[videoIndex];  // Set the next video source
            videoEl.play();  // Play the video
        }
    
        // Set the first video source and play it
        
    
        // Add an event listener for the 'ended' event to change video when it finishes
        setInterval(changeVideo, 3000);

}


function paragraphControl() {
    const paragraphs = document.querySelectorAll('.slider-container h1');
    let currentIndex = 0;
    let nextIndex = 1;
    

    function slideParagraphs() {
        // Remove 'active' from the current paragraph and add 'inactive'
        paragraphs[currentIndex].classList.remove('active');
        paragraphs[currentIndex].classList.add('inactive');
        paragraphs[currentIndex].style.top = "-100%"

        if(nextIndex === 0){
            for(let i=1; i<paragraphs.length-1; i++){
                paragraphs[i].style.top = "100%";
            }
        }
        else if(nextIndex === paragraphs.length - 1){
            paragraphs[0].style.top = "100%";
        }
        else{
            paragraphs[paragraphs.length - 1].style.top = "100%";
        }

        // Activate the next paragraph
        paragraphs[nextIndex].classList.remove('inactive');
        paragraphs[nextIndex].classList.add('active');
        paragraphs[nextIndex].style.top = "0";

        // Update indexes for the next slide
        currentIndex = nextIndex;
        nextIndex = (nextIndex + 1) % paragraphs.length; // Loop through paragraphs

        
    }

    // Initialize: Set the first paragraph as active
    paragraphs[currentIndex].classList.add('active');

    // Automatically slide paragraphs every 3 seconds
    setInterval(slideParagraphs, 3000); // Adjust the time interval as needed
}


