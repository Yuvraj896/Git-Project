document.getElementById("redirectButton").addEventListener("click", function() {
    var selectedCourse = document.getElementById("semester").value;
    var selectedOption = document.getElementById("Branch").value;

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
    }
});
