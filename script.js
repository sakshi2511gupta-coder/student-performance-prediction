const form = document.getElementById("predictionForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get input values
    const studyHours =
        parseFloat(document.getElementById("studyHours").value);

    const attendance =
        parseFloat(document.getElementById("attendance").value);

    const previousMarks =
        parseFloat(document.getElementById("previousMarks").value);

    const assignmentScore =
        parseFloat(document.getElementById("assignmentScore").value);


    // Convert study hours into percentage
    let studyPercentage = (studyHours / 10) * 100;

    if (studyPercentage > 100) {
        studyPercentage = 100;
    }


    // Calculate predicted performance
    const prediction =
        (studyPercentage * 0.20) +
        (attendance * 0.25) +
        (previousMarks * 0.30) +
        (assignmentScore * 0.25);


    const finalScore = Math.round(prediction);


    // Display result
    document.getElementById("result").classList.remove("hidden");

    document.getElementById("predictionScore").textContent =
        finalScore + "%";


    let performanceLevel;
    let message;


    if (finalScore >= 85) {

        performanceLevel = "Excellent 🌟";
        message = "The student is performing exceptionally well.";

    } else if (finalScore >= 70) {

        performanceLevel = "Good 👍";
        message = "The student is showing good academic performance.";

    } else if (finalScore >= 50) {

        performanceLevel = "Average 📚";
        message = "The student should focus more on studies.";

    } else {

        performanceLevel = "Needs Improvement ⚠️";
        message = "The student needs additional academic support.";

    }


    document.getElementById("performanceLevel").textContent =
        performanceLevel;

    document.getElementById("message").textContent =
        message;


    // Update performance chart

    document.getElementById("studyBar").style.width =
        studyPercentage + "%";

    document.getElementById("attendanceBar").style.width =
        attendance + "%";

    document.getElementById("marksBar").style.width =
        previousMarks + "%";

    document.getElementById("assignmentBar").style.width =
        assignmentScore + "%";

});