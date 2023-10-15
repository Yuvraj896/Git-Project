document.getElementById("redirectButton").addEventListener("click", function() {
    var selectedCourse = document.getElementById("semester").value;
    var selectedOption = document.getElementById("Branch").value;

<<<<<<< HEAD
    if (selectedCourse === "ic100") {
        if (selectedOption === "notes") {
            window.location.href = "ic100_notes.html";
        } else {
            window.location.href = "ic100_tut.html";
        }
    }
    if (selectedCourse === "ic101") {
        if (selectedOption === "notes") {
            window.location.href = "ic101_notes.html";
        } else {
            window.location.href = "ic101_tut.html";
        }
    }
    if (selectedCourse === "ic103") {
        if (selectedOption === "notes") {
            window.location.href = "ic103_notes.html";
        } else {
            window.location.href = "ic103_tut.html";
        }
    }
    if (selectedCourse === "ic104") {
        if (selectedOption === "notes") {
            window.location.href = "ic104_notes.html";
        } else {
            window.location.href = "ic104_tut.html";
        }
    }
    if (selectedCourse === "ic105") {
        if (selectedOption === "notes") {
            window.location.href = "ic105_notes.html";
        } else {
            window.location.href = "ic105_tut.html";
        }
=======
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
>>>>>>> master
    }
});
