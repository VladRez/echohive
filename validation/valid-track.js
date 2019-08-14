function validTrack() {
    var fileInput = document.getElementById('file');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.wav|\.mp3|\.ogg|\.flac)$/i;
    if (!allowedExtensions.exec(filePath)) {
        alert('Please upload file having extensions .wav/.mp3/.ogg/.flac only.');
        fileInput.value = '';
        return false;
    } else {
        //Image preview
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                console.log("successful track upload!");
              //  document.getElementById('imagePreview').innerHTML = '<img src="' + e.target.result + '"/>';
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    }
}

module.exports = validTrack;