document.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded");

  const contactForm = document.querySelector("#contactForm");
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
      firstname: document.querySelector("#firstname").value,
      lastname: document.querySelector("#lastname").value,
      email: document.querySelector("#email").nodeValue,
      subject: document.querySelector("#subject").value,
      message: document.querySelector("#message").value,
    };
    console.log(data);
  });
});
