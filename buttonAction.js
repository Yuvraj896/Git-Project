document.getElementById("redirectButton").addEventListener("click", function () {
    const semester = document.getElementById("semester").value;
    const branch = document.getElementById("Branch").value; // Note the capital 'B' in 'Branch'.

    if (semester === "1st") {
        window.location.href = "cse.html";
    } else if (semester === "1st" && branch === "EE") {
        window.location.href = "https://www.google.com"; // Redirect to an external URL (Google in this case).
    } else if (semester === "1st" && branch === "ME") {
        window.location.href = "me.html"; // Redirect to an internal page for Mechanical Engineering.
    } else if (semester === "1st" && branch === "MT") {
        window.location.href = "mt.html"; // Redirect to an internal page for Mechatronics Engineering.

        //here add the files for 2nd sem 3rd sem 4 th sem 
        //eg 2nd sem cse then redirect to the cse_2ndsem.html , this html file will be in folder semester 2 -> cse -> file.html
        } else {
        alert("The selected combination does not have a corresponding page.");
    }
}); 
