// JavaScript code to implement the desired functionality

// Function to initialize the event listeners
function initializeDoctorCards() {
    const doctorCards = document.querySelectorAll('.card');
    const doctorsContainer = document.getElementById('doctor');

    doctorCards.forEach((card) => {
      card.style.transform = 'scale(0.9)'; // Reduce size of the cards
        card.addEventListener('click', function () 
        {
        const doctorName = card.querySelector('.card-title').textContent;
        const specialty = card.querySelector('.card-text strong').textContent + ": " + card.querySelector('.card-text.text-secondary').textContent.split(': ')[1];
        const description = card.querySelector('.data').textContent;
        const imageSrc = card.querySelector('img').src;

        // Create the detailed card dynamically
        const detailedCard = document.createElement('div');
        detailedCard.className = 'card shadow-sm border-0 my-5';
        detailedCard.style.position = 'relative';
        detailedCard.style.width = '400px'; // Set width
        detailedCard.style.height = '500px'; // Set height
        detailedCard.style.margin = '0 auto'; // Center the card
        detailedCard.innerHTML = `
        <button class="btn btn-danger close-button" style="position: absolute; top: 10px; right: 10px;">&times;</button>
        <img src="${imageSrc}" class="card-img-top" alt="${doctorName}" style="height: 50%; object-fit: cover;">
        <div class="card-body text-center">
            <h5 class="card-title text-primary">${doctorName}</h5>
            <p class="card-text text-secondary">${specialty}</p>
            <p class="data">${description}</p>
        </div>
        `;

        // Clear the doctors container and append the new detailed card
        doctorsContainer.innerHTML = '';
        doctorsContainer.appendChild(detailedCard);

        // Add event listener to the close button
        detailedCard.querySelector('.close-button').addEventListener('click', function () {
          // Restore the original view by reloading the page
        window.location.reload();
        });
    });
    });
}  
  // Call the initialization function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeDoctorCards);
