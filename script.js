"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const skillsSelection = document.getElementById('skills');
    const toggleButton = document.getElementById('toggle-skills');
    toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', () => {
        if (skillsSelection) {
            skillsSelection.style.display = skillsSelection.style.display 
        }
    });
});
