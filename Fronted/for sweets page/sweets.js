function showPopup(button) {
    // Find the corresponding popup for the clicked button
    const popup = button.nextElementSibling;

    // Display the popup
    popup.style.display = 'block';

    // Hide the popup after 2 seconds
    setTimeout(() => {
        popup.style.display = 'none';
    }, 2000);
}