 document.addEventListener("DOMContentLoaded", () =>{
    const skillsSelection = document.getElementById('skills');

    const toggleButton = document.createElement('button') ;


    toggleButton.textContent = "Toggle Skills Visibility";

    toggleButton.onclick = () => {
        if(skillsSelection){
            skillsSelection.style.display = skillsSelection.style.display 
        }
    };

    document.body.appendChild(toggleButton);
})
