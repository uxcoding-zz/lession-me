$(document).ready(function () {
    $("#navButton").on("click", function () {
        $(this).toggleClass("corss");
        $("#navBar").toggleClass("active");
    });
});
