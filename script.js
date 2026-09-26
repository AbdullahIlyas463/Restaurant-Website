/* =========================
   MOBILE MENU
========================= */

function toggleMenu()
{
    const nav = document.getElementById("navLinks");

    nav.classList.toggle("active");
}


/* =========================
   CLOSE MOBILE MENU
   AFTER CLICKING A LINK
========================= */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link)
{
    link.addEventListener("click", function()
    {
        document.getElementById("navLinks")
            .classList.remove("active");
    });
});


/* =========================
   CONTACT FORM
========================= */

function submitForm(event)
{
    event.preventDefault();

    alert(
        "Thank you for contacting us! We will get back to you soon."
    );
}