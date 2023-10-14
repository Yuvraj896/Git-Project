document.getElementById("redirectButton").addEventListener("click", function () {
    const semester = document.getElementById("semester").value;
    const branch = document.getElementById("Branch").value; // Note the capital 'B' in 'Branch'.

    if (semester === "1st") {
        window.location.href = "semester 1/selectcourse.html";
    }
    else if (semester === "2nd" && branch === "CSE") {
        window.location.href = "semester 2/CSE/selectcourse.html";
    } else if (semester === "2nd" && branch === "EE") {
        window.location.href = "semester 2/EE/selectcourse.html"; // Redirect to an external URL (Google in this case).
    } else if (semester === "2nd" && branch === "ME") {
        window.location.href = "semester 2/ME/selectcourse.html"; // Redirect to an internal page for Mechanical Engineering.
    } else if (semester === "2nd" && branch === "MT") {
        window.location.href = "semester 2/MT/selectcourse.html"; // Redirect to an internal page for Mechatronics Engineering.

        //here add the files for 2nd sem 3rd sem 4 th sem 
        //eg 2nd sem cse then redirect to the cse_2ndsem.html , this html file will be in folder semester 2 -> cse -> file.html
    } else if (semester === "3rd" && branch === "CSE") {
            window.location.href = "semester 3/CSE/selectcourse.html";
        } else if (semester === "3rd" && branch === "EE") {
            window.location.href = "semester 3/EE/selectcourse.html"; // Redirect to an external URL (Google in this case).
        } else if (semester === "3rd" && branch === "ME") {
            window.location.href = "semester 3/ME/selectcourse.html"; // Redirect to an internal page for Mechanical Engineering.
        } else if (semester === "3rd" && branch === "MT") {
            window.location.href = "semester 3/MT/selectcourse.html";
         }
         else if (semester === "4th" && branch === "CSE") {
            window.location.href = "semester 4/CSE/selectcourse.html";
        } else if (semester === "4th" && branch === "EE") {
            window.location.href = "semester 4/EE/selectcourse.html"; // Redirect to an external URL (Google in this case).
        } else if (semester === "4th" && branch === "ME") {
            window.location.href = "semester 4/ME/selectcourse.html"; // Redirect to an internal page for Mechanical Engineering.
        } else if (semester === "4th" && branch === "MT") {
            window.location.href = "semester 4/MT/selectcourse.html";
         } else {
        alert("The selected combination does not have a corresponding page.");
    }
});
