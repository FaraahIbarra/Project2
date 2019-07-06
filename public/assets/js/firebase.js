var firebaseConfig = {
    apiKey: "AIzaSyDr7AS0A86QdJkLFexAIdAipr2X2eM1Q10",
    authDomain: "yazzzz-dcd01.firebaseapp.com",
    databaseURL: "https://yazzzz-dcd01.firebaseio.com",
    projectId: "yazzzz-dcd01",
    storageBucket: "yazzzz-dcd01.appspot.com",
    messagingSenderId: "716932811571",
    appId: "1:716932811571:web:e8f86f008b8ba357"
  };
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();


$("#create_meme").on("click", function (event) {
        event.preventDefault();
        
        console.log("CLICKED!")
    
        var newMeme = {
            mood: window.location.pathname,
            content: convert(),
          
        };
       
        var newRequest = {
            mood: newMeme.mood,
            content: newMeme.content
        };
        database.ref().push(newRequest);
        

});

database.ref().on("child_added", function (dataSnapshot) {
    var data = dataSnapshot.val();
    var content = data.content
    console.log("sent");
    var drop = $('#drop');
    var download = $("<a>").attr("href","#")
    var icon = $("<i>").attr({class:"fas fa-download download", style:"position:absolute !important; right: 25px; top:25px; color:white; z-index: 100"});
    var col = $('<div>').attr({class:"col-xs-12 col-md-6 col-lg-4 col-xl-3 meme", style: "positon:absolute"});
    var img = $('<img>').attr({src: content, alt:"memeImg", height:"auto", width:"100%", style:"margin: 0px; padding:0px; z-index: -2"});
    download.append(img)
    col.append(icon,download);
    drop.append(col);
});


    function convert(){
        var canvas = document.getElementById('meme');
        var dataURL = canvas.toDataURL("image/jpeg", 0.5);
        return (dataURL)
      
    };
