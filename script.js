var form = document.querySelector(".needs-validation");

form.addEventListener("submit", function(event) {

    if (!form.checkValidity()) {
        event.preventDefault();
    }

    form.classList.add("was-validated");

});