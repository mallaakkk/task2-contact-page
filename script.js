const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const email = document.getElementById("email").value.trim();
    const healthIssue = document.getElementById("healthIssue").value.trim();
    if (!name || !age || !email || !healthIssue) {
        alert("Please fill in all fields");
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
    }
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;

    const appointmentRequest = {
        patient_id: email,
        name: name,
        age: age,
        healthIssue: healthIssue,
        date: formattedDate,
        time: formattedTime,
        status: "PENDING"
    };
    //fetch()
    console.log("Sending to Backend...");
    console.log(appointmentRequest);

    alert("Form submitted successfully!");
    form.reset();

});
