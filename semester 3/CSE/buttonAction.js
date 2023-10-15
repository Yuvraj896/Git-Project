document.getElementById("redirectButton").addEventListener("click", function() {
    var selectedCourse = document.getElementById("semester").value;
    var selectedOption = document.getElementById("Branch").value;

    var courseUrls = {
        "cs200": {
            "notes": "CS200(STT2)/cs200.html",
            "other": "CS200(STT2)/cs200tut.html"
        },
        "cs201": {
            "notes": "../../noContent.html",
            "other": "../../noContent.html"
        },
        "cs202": {
            "notes": "../../noContent.html",
            "other": "../../noContent.html"
        },
        "ic202": {
            "notes": "../../noContent.html",
            "other": "../../noContent.html"
        }
    };

    if (courseUrls[selectedCourse]) {
        var url = courseUrls[selectedCourse][selectedOption] || courseUrls[selectedCourse]["other"];
        window.location.href = url;
    }
});
