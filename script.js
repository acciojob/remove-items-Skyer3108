//your JS code here. If required.

document.addEventListener('DOMContentLoaded', function() {
    // Get the button and dropdown elements
    const button = document.querySelector('input[type="button"]');
    const select = document.getElementById('colorSelect');

    // Add click event listener to the button
    button.addEventListener('click', function() {
        // Get the index of the selected option
        const selectedIndex = select.selectedIndex;

        // Remove the selected option if one is selected
        if (selectedIndex !== -1) {
            select.remove(selectedIndex);
        }
    });
});
