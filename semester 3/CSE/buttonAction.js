document.getElementById("redirectButton").addEventListener("click", function() {
    var selectedCourse = document.getElementById("semester").value;
    var selectedOption = document.getElementById("Branch").value;

    var courseUrls = {
        "ic100": {
            "notes": "IC100/ic100.html",
            "other": "IC100/ic100tut.html"
        },
        "ic101": {
            "notes": "../noContent.html",
            "other": "../noContent.html"
        },
        "ic103": {
            "notes": "../noContent.html",
            "other": "../noContent.html"
        },
        "ic104": {
            "notes": "ic104_notes.html",
            "other": "../noContent.html"
        },
        "ic105": {
            "notes": "../noContent.html",
            "other": "../noContent.html"
        }
    };

    if (courseUrls[selectedCourse]) {
        var url = courseUrls[selectedCourse][selectedOption] || courseUrls[selectedCourse]["other"];
        window.location.href = url;
    }
});
