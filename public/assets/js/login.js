$(document).ready(function () {
    // Getting references to our form and inputs
    var usernameInput = $("#loginUsername");
    var passwordInput = $("#loginPassword");

    // When the form is submitted, we validate there's an email and password entered
    $("#login_submit").on("click", function (event) {
        event.preventDefault();
        var userData = {
            username: usernameInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.username || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.username, userData.password);
        usernameInput.val("");
        passwordInput.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(username, password) {
        $.post("/api/login", {
            username: username,
            password: password
        })
            .then(function () {
                window.location.replace("/addTrip");
                // If there's an error, log the error
            })
            .fail(function (err) {
                alert("Invalid Username/Passsword!");
                console.log(err);
            });
    }
});