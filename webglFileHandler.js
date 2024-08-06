// webglFileHandler.js

function uploadImage(index) {
    // Create an input element to select files
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*'; // Accept images only

    // Handle the file selection
    input.onchange = function(event) {
        var file = event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var base64Image = e.target.result.split(',')[1]; // Get base64 part of the data URI
                // Send base64 image data to Unity
                gameInstance.SendMessage('AddGame', 'OnImageUploaded', index + ';' + base64Image);
            };
            reader.readAsDataURL(file);
        }
    };

    // Trigger the file input click event
    input.click();
}
