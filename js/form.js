document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("telephone").value;
    const entreprise = document.getElementById("entreprise").value;
    const message = document.getElementById("message").value;

    const body = encodeURIComponent(
        "Nom : " + nom + "\n" +
        "Email : " + email + "\n" +
        "Téléphone : " + telephone + "\n" +
        "Entreprise : " + entreprise + "\n\n" +
        "Message :\n" + message
    );

    window.location.href =
        "mailto:tejimmy77@gmail.com?subject=Nouvelle demande de contact&body=" + body;
});