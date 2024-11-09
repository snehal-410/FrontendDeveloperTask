document.querySelectorAll('.interactive-box').forEach(box => {
    box.addEventListener('click', () => {
        // Collapse any other expanded boxes
        document.querySelectorAll('.interactive-box').forEach(otherBox => {
            if (otherBox !== box) {
                otherBox.classList.remove('expanded');
                 // Find and check the radio button within the clicked box
            const radioButton = box.querySelector('input[type="radio"]');
            radioButton.checked = true;
            
            }
        });
        
        
        // Toggle the expanded class on the clicked box
        box.classList.toggle('expanded');
        
    });
});



