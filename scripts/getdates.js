// Function to get and set the current year
function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
}

// Function to get and set the last modified date without seconds
function setLastModifiedDate() {
    const lastModified = new Date(document.lastModified);
    const formattedDate = lastModified.toLocaleDateString("en-US") + " " + lastModified.getHours() + ":" + lastModified.getMinutes();
    document.getElementById("lastModified").textContent = "Last Modified: " + formattedDate;
}

// Call functions after the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    setCurrentYear();
    setLastModifiedDate();
});
