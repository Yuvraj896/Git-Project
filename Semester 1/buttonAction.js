document.getElementById("redirectButton").addEventListener("click", function() {
    var selectedCourse = document.getElementById("semester").value;
    var selectedOption = document.getElementById("Branch").value;

    var courseUrls = {
        "ic100": {
            "notes": "IC100/ic100.html",
            "other": "IC100/ic100tut.html"
        },
        "ic101": {
            "notes": "ic101_notes.html",
            "other": "ic101_tut.html"
        },
        "ic103": {
            "notes": "ic103_notes.html",
            "other": "ic103_tut.html"
        },
        "ic104": {
            "notes": "ic104_notes.html",
            "other": "ic104_tut.html"
        },
        "ic105": {
            "notes": "ic105_notes.html",
            "other": "ic105_tut.html"
        }
    };

    if (courseUrls[selectedCourse]) {
        var url = courseUrls[selectedCourse][selectedOption] || courseUrls[selectedCourse]["other"];
        window.location.href = url;
    }
});
