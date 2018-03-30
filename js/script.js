    var linkFeedback = document.querySelector(".js-modal");
    var popup = document.querySelector(".modal");
    var overlay = document.querySelector(".overlay");
    var modalClose = document.querySelector(".modal-close");
    var formFeedback = popup.querySelector("form");
    var nameFeedback = popup.querySelector("[name=feedback-name]");
    var emailFeedback = popup.querySelector("[name=feedback-email");
    var messageFeedback = popup.querySelector("[name=feedback-message]");

    linkFeedback.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
        overlay.classList.add("overlay-show");                
        nameFeedback.focus();
    });    

    modalClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        overlay.classList.remove("overlay-show");
        popup.classList.remove("modal-error")
    });

    formFeedback.addEventListener("submit", function (evt) {
        if (!nameFeedback.value || !emailFeedback.value || !messageFeedback.value) {
            evt.preventDefault();
            popup.classList.remove("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");
        }                 
    });