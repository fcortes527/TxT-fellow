
// controls for changing the background
document.getElementById('background-btn').addEventListener('click', function() {
  // if(document.getElementById('background').style.backgroundImage == './assets/91817.jpg') {
  //   document.getElementById('background').style.backgroundImage = "url('../assets/background.jpg')";
  // } else {
    document.getElementById('background').style.backgroundImage = "url('./assets/91817.jpg')";
  // }
});

// BUTTON CONTROLS

// controls for the left button
document.getElementById('left').addEventListener('click', function() {
  var position = document.getElementById('ball').style.left;
  if(parseInt(position) > 0) {
    var newPosition = parseInt(position) - 10;
  }
  document.getElementById('ball').style.left = newPosition + 'px';
});

// controls for the right button
document.getElementById('right').addEventListener('click', function() {
    var position = document.getElementById('ball').style.left;
    if(parseInt(position) + 100 < document.getElementById('ball-container').clientWidth - 5) {
        var newPosition = parseInt(position) + 10;
    }
    document.getElementById('ball').style.left = newPosition + 'px';
});

// controls for the up button
// document.getElementById('up').addEventListener('click', function() {
//     var position = document.getElementById('ball').style.top;
//     if(parseInt(position) > 0) {
//         var newPosition = parseInt(position) - 10;
//     }
//     document.getElementById('ball').style.top = newPosition + 'px';
// });

// controls for the down button
// document.getElementById('down').addEventListener('click', function() {
//     var position = document.getElementById('ball').style.top;
//     if(parseInt(position) + 100 < document.getElementById('ball-container').clientHeight - 5) {
//         var newPosition = parseInt(position) + 10;
//     }
//     document.getElementById('ball').style.top = newPosition + 'px';
// });
