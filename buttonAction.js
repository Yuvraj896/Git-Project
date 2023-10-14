document.getElementById("redirectButton").addEventListener("click", function () {
    const semester = document.getElementById("semester").value;
    const branch = document.getElementById("branch").value;

    if (semester === "1st" && branch === "CSE") {
        window.location.href = "cse.html";
    } else if (semester === "1st" && branch === "EE") {
        window.location.href = "ee.html"; // Replace with the correct URL for Electrical Engineering.
    } else if (semester === "1st" && branch === "ME") {
        window.location.href = "me.html"; // Replace with the correct URL for Mechanical Engineering.
    } else if (semester === "1st" && branch === "MT") {
        window.location.href = "mt.html"; // Replace with the correct URL for Mechatronics Engineering.
    } else {
        alert("The selected combination does not have a corresponding page.");
    }
});
