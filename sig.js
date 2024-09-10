// Query for the button with the id 'sign-now-button'
const signNowButton = document.getElementById('sign-now-button');
const modal = document.getElementById("thanks-modal"); // Declare modal globally
const closeModalButton = document.getElementById('close-modal-button');
let intervalId; // Declare intervalId globally for access in both modal and close button

// TODO: Complete validation form
const validateForm = (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  const email = document.getElementById('email');
  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;

  const person = {
    email: petitionInputs[1].value,
    city: petitionInputs[2].value, // Changed to "city" to match addSignature function
    name: petitionInputs[0].value
  }

  // Validate the name input
  if (person.name.length < 2) {
    containsErrors = true;
    petitionInputs[0].classList.add('error'); // Only apply error to the name input
  } else {
    petitionInputs[0].classList.remove('error');
  }

  // Validate email format separately
  if (!person.email.includes('@') || !person.email.includes('.com')) {
    containsErrors = true;
    email.classList.add('error');
  } else {
    email.classList.remove('error');
  }

  // If no errors, call addSignature() and clear fields
  if (!containsErrors) {
    addSignature(person); // Pass the person object to addSignature
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = ""; // Clear the form fields
    }
    toggleModal(person); // Show modal with thank you message
  }
}

// Function to add a signature
const addSignature = (person) => {
  // Create a new paragraph element for the signature
  const newSignature = document.createElement('p');

  // Format the signature
  newSignature.textContent = `🖊️ ${person.name} from ${person.city} supports this.`;

  // Append the new signature
  const signaturesSection = document.querySelector('.signatures');
  signaturesSection.appendChild(newSignature);

  // Update the counter
  const oldCount = document.getElementById('counter');
  if (oldCount) {
    oldCount.remove(); // Check if the counter exists before removing
  }
  count += 1;
  const newCount = document.createElement('p');
  newCount.id = 'counter';
  newCount.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;
  signaturesSection.appendChild(newCount);
}

// Toggle Modal
const toggleModal = (person) => {
  let modalContent = document.getElementById("thanks-modal-content");
  modal.style.display = 'flex';
  modalContent.textContent = `Thank you so much ${person.name}! ${person.city} represent!`;

  // Start the image scaling animation
  intervalId = setInterval(scaleImage, 500);

  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId); // Stop the animation
  }, 4000); // Set timeout to 4 seconds
}

// Image scaling function for animation
let scaleFactor = 1;
let modalImage = document.querySelector("#thanks-modal img"); // Select the image within the modal

function scaleImage() {
  if (scaleFactor === 1) {
    scaleFactor = 0.8;
  } else {
    scaleFactor = 1;
  }
  modalImage.style.transform = `scale(${scaleFactor})`;
}

let count = 4; // Initial count (4 people have already signed)

// Close modal on button click
closeModalButton.addEventListener('click', () => {
  modal.style.display = "none";
  clearInterval(intervalId); // Stop the animation when the user manually closes the modal
});

// Add click event listener to the "Sign Now" button
signNowButton.addEventListener('click', validateForm);
