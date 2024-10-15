const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        let checkedCount = 0;

        // Count checked checkboxes using a for loop
        for (const cb of checkboxes) {
            if (cb.checked) checkedCount++;
        }

        // Uncheck the current checkbox if the limit is exceeded
        if (checkedCount > 2) {
            checkbox.checked = false;
            // alert('You can only select a maximum of 2 options.');
        }
    });
});
