$(document).ready(function () {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAmxp7GC2D4jxMN4cGuvQ1j5QVPX_UKNxA",
    authDomain: "rps-multiplayer-d9c0f.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-d9c0f.firebaseio.com",
    projectId: "rps-multiplayer-d9c0f",
    storageBucket: "rps-multiplayer-d9c0f.appspot.com",
    messagingSenderId: "586333974897"
  };
  firebase.initializeApp(config);

  var database = firebase.database()
  var isplayerOne = false
  var isplayerTwo = false
  var playerOne 
  var playerTwo

  var user = firebase.auth().currentUser;

    // Capture Username
    $("#submit").on("click", function (event) {
        event.preventDefault();
        // Capture User Inputs and store them into variables
        var user = $("#userInput").val().trim();
        $("#userInput").val("");
        $(".usernameDiv").hide()
        if (isplayerOne=true) {
            database.ref().push({
                username: user,
            });
            // Output username into the relevant HTML sections
            $("#player2").append(" - " + user)
            $(".p2").append("<button type='button' class='btn btn-secondary options' id='rock'>Rock</button><button type='button' class='btn btn-secondary options' id='paper'>Paper</button><button type='button' class='btn btn-secondary options' id='scissors'>Scissors</button>")
        }
        playerOne = user
        isplayerOne= true

        database.ref().push({
            username: user,
        });
        // Output username into the relevant HTML sections
        $("#player1").append(" - " + user)
        $(".lead").html("Please choose rock, paper, or scissors!")
        $(".p1").append("<button type='button' class='btn btn-secondary options' id='rock'>Rock</button><button type='button' class='btn btn-secondary options' id='paper'>Paper</button><button type='button' class='btn btn-secondary options' id='scissors'>Scissors</button>")
    return false
    })

    $("#send").on("click", function (event) {
        event.preventDefault();
        // Capture User Inputs and store them into variables
        var chatline = $("#chatInput").val().trim();
        $("#chatInput").val("");
        database.ref().push({
            chat: chatline,
        });
        // Output username into the relevant HTML sections
        $("#chatBox").append("<p id='chats'>"+ playerOne +": " + chatline + "</p>")
        return false
    })

    // Game function to check what each player selected and who won //
})