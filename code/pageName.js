document.addEventListener("DOMContentLoaded", function() {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    var pageName = page.split(".")[0];

    pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

    document.title = "Top móveis - " + pageName;
});