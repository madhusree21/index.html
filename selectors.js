// Check whether JavaScript file is connected
console.log("selectors.js is connected!");

// Add click event to button
document.getElementById("btn").addEventListener("click", function () {

    // Selecting by ID
    const title = document.getElementById("title");
    console.log("Element with ID 'title':", title);

    // Selecting by Class Name
    const descriptions = document.getElementsByClassName("description");
    console.log("Elements with class 'description':", descriptions);

    // Selecting by Tag Name
    const allParagraphs = document.getElementsByTagName("p");
    console.log("All <p> elements:", allParagraphs);

    // Selecting by Name
    const buttonByName = document.getElementsByName("myButton");
    console.log("Button with name 'myButton':", buttonByName);

    // Using querySelector
    const firstParagraph = document.querySelector(".description");
    console.log("First element with class 'description':", firstParagraph);

    // Using querySelectorAll
    const allDescriptions = document.querySelectorAll(".description");
    console.log("All elements with class 'description':", allDescriptions);

});
