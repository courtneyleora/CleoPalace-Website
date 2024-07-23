const form = document.getElementById('subForm');

const printName = (event) => {
  // Get the name of the requester
  let name = document.getElementById('name').value;

  // Print the name
  console.log("Thank you",name, "for the sub <3");

  // Prevent default behavior
  event.preventDefault();
}

// Add event listener to the form submission
form.addEventListener('submit', printName);

