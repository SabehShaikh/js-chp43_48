// Assignment # 38-42 EVENTS

// document.write("<h1> EVENTS </h1>");

// document.write("<h2> Chapter 43-48 </h2>");

/* QUESTION 01
1. 1. Show an alert box on click on a link.  */
// document.write("<h2> Question 01 </h2>")

function showAlert() {
    alert('Hello there, you are going to Github');
}

/* QUESTION 02
2. Display some Mobile images in browser. On click on an
image Show the message in alert to user.
*/

var mobile = document.getElementById('mobile-image');

mobile.addEventListener('click', () => {
    alert("Thankyou for buying phone from us");
})

/* QUESTION 03
3. Display 10 student records in table and each row should contain a delete
button. If you click on a button to delete a record, entire row should be
deleted. 
*/

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

/* QUESTION 04 
4. Display an image in browser. Change the picture on mouseover and set the
first picture on mouseout. */

var image = document.getElementById("image-src")

var originalSrc = image.src;

image.addEventListener('mouseover', () => {
    image.src = 'Images/Galaxy-A33.png'
})
image.addEventListener('mouseout', () => {
    image.src = originalSrc;
})

/* QUESTION 05
5. Show a counter in browser. Counter should increase on click on increase
button and decrease on click on decrease button. And show updated counter
value in browser. */

var counterValue = 0;
var counterElement = document.getElementById("counter");

var increaseBtn = document.getElementById("increaseBtn");
var decreaseBtn = document.getElementById("decreaseBtn");

increaseBtn.addEventListener('click', () => {
    counterValue++;
    counterElement.textContent = counterValue;
});

decreaseBtn.addEventListener('click', () => {
    if (counterValue > 0) {
        counterValue--;
        counterElement.textContent = counterValue;
    }
});