const skills = document.querySelectorAll(".skill-row");

skills.forEach(function(Skill)  {
    Skill.addEventListener("click", () => {
        Skill.classList.toggle("active");
        // alert("hello");
    })
});