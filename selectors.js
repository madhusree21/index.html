console.log("JavaScript file loaded successfully!");

document.getElementById("btn").addEventListener("click", function () {

    const title = document.getElementById("title");
    console.log("Element with ID 'title':", title);

    const descriptions = document.getElementsByClassName("description");
    console.log("Elements with class 'description':", descriptions);

    const allParagraphs = document.getElementsByTagName("p");
    console.log("All <p> elements:", allParagraphs);

    const buttonByName = document.getElementsByName("myButton");
    console.log("Button with name 'myButton':", buttonByName);

    const firstParagraph = document.querySelector(".description");
    console.log("First element with class 'description':", firstParagraph);

    const allDescriptions = document.querySelectorAll(".description");
    console.log("All elements with class 'description':", allDescriptions);

});
