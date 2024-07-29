// Query for the button with the id sign-now-button and assign that to the variable signNowButton.
const signNowButton = document.getElementById('sign-now-button');

// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form
const validateForm = (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  const email = document.getElementById('email');
  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;

  // Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    // Validate the value of each input
    // If the input we're checking is less than 2 characters, it is invalid.
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add('error');
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  // Validate email format separately
  if (!email.value.includes('@') || !email.value.includes('.com')) {
    containsErrors = true;
    email.classList.add('error');
  } else {
    email.classList.remove('error');
  }

  // If no errors, call addSignature() and clear fields
  if (!containsErrors) {
    addSignature();
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
  }
}

// Function to add a signature
const addSignature = () => {
  // Get the inputs submitted
  const name = document.getElementById('name').value;
  const city = document.getElementById('city').value;

  // Create a new paragraph element
  const newSignature = document.createElement('p');

  // Format the signature
  newSignature.textContent = `🖊️ ${name} from ${city} supports this.`;

  // Find where the signatures section is and append the new signature there
  const signaturesSection = document.querySelector('.signatures');
  signaturesSection.appendChild(newSignature);

  // Update the counter
  const oldCount = document.getElementById('counter');
  oldCount.remove();
  count += 1;
  const newCount = document.createElement('p');
  newCount.id = 'counter';
  newCount.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;
  signaturesSection.appendChild(newCount);
}

let count = 4; // Initial count (4 people have already signed)

// Add click event listener to the "Sign Now" button
signNowButton.addEventListener('click', validateForm);
