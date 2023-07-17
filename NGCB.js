<script>
  // Calculate age based on date of birth
  function calculateAge() {
    var dobInput = document.getElementById("dob");
    var dob = new Date(dobInput.value);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    alert("Age: " + age);
  }

  // Play videos in the gallery
  function playVideo(videoId) {
    var videoElement = document.getElementById(videoId);
    if (videoElement) {
      videoElement.play();
    }
  }
</script>
