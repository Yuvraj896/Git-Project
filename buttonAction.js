document.getElementById("redirectButton").addEventListener("click", function () {
    const semester = document.getElementById("semester").value;
    const branch = document.getElementById("Branch").value; // Note the capital 'B' in 'Branch'.
    
    const urlMapping = {
        "1st_CSE": "Semester 1/selectCourse.html",
        "1st_EE": "Semester 1/selectCourse.html",
        "1st_ME": "Semester 1/selectCourse.html",
        "1st_MT": "Semester 1/selectCourse.html",

        "2nd_CSE": "Semester 2/CSE/selectCourse.html",
        "2nd_EE": "Semester 2/EE/selectCourse.html",
        "2nd_ME": "Semester 2/ME/selectCourse.html",
        "2nd_MT": "Semester 2/MT/selectCourse.html",

        "3rd_CSE": "Semester 3/CSE/selectCourse.html",
        "3rd_EE": "Semester 3/EE/selectCourse.html",
        "3rd_ME": "Semester 3/ME/selectCourse.html",
        "3rd_MT": "Semester 3/MT/selectCourse.html",

        "4th_CSE": "Semester 4/CSE/selectCourse.html",
        "4th_EE": "Semester 4/EE/selectCourse.html",
        "4th_ME": "Semester 4/ME/selectCourse.html",
        "4th_MT": "Semester 4/MT/selectCourse.html",

        "5th_CSE": "noContent.html",
        "5th_EE": "noContent.html",
        "5th_ME": "noContent.html",
        "5th_MT": "noContent.html",

        "6th_CSE": "noContent.html",
        "6th_EE": "noContent.html",
        "6th_ME": "noContent.html",
        "6th_MT": "noContent.html",

        "7th_CSE": "noContent.html",
        "7th_EE": "noContent.html",
        "7th_ME": "noContent.html",
        "7th_MT": "noContent.html",

        "8th_CSE": "noContent.html",
        "8th_EE": "noContent.html",
        "8th_ME": "noContent.html",
        "8th_MT": "noContent.html"
    };

    const key = `${semester}_${branch}`;

    if (urlMapping[key]) {
        window.location.href = urlMapping[key];
    } else {
        alert("The selected combination does not have a corresponding page.");
    }
});
