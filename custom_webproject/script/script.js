(function () {
    var name = document.getElementById("userName");
    var email = document.getElementById("emailAddress");
    var message = document.getElementById("message");
    var submitButton = document.getElementById("submitButton");
    submitButton.disabled = true;

    var validateContactData = function () {
        var emailLength = email.value.length;
        var emailHu = email.value.substring((emailLength - 3), emailLength);
        var emailCom = email.value.substring((emailLength - 4), emailLength);

        if (name.value.trim() === "" || name.value.length < 3 || name.value.length > 30) {
            return false;
        }
        else if (email.value.trim() === "" || emailHu != ".hu" && emailCom != ".com") {
            return false;
        }
        else if (email.value.trim() === "" || message.value.length < 20 || message.value.length > 500) {
            return false;
        }
        return true;
    };

    var showMessage = function () {
        var siteMsg = "Your message has been sent successfully!" + "\n";
        var inputMsg = "\t" + "Name: " + name.value +
            "\n" + "\t" + "Email: " + email.value +
            "\n" + "\t" + "Message: " + message.value;

        alert(siteMsg + inputMsg);
    };

    var checkInputs = function () {
        if (validateContactData() != false) {
            submitButton.disabled = false;
            submitButton.addEventListener("click", showMessage);
        }
        else {
            submitButton.disabled = true;
        }
    };

    name.addEventListener("change", checkInputs);
    email.addEventListener("change", checkInputs);
    message.addEventListener("change", checkInputs);
}());