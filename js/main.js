document.addEventListener("DOMContentLoaded", () => {
  initLangToggle();
  initContactForm();
});

function initLangToggle() {
  const buttons = document.querySelectorAll("[data-lang-switch]");
  const body = document.body;
  const stored = localStorage.getItem("lang") || "tr";

  const applyLang = (lang) => {
    const langCode = lang === "en" ? "en" : "tr";
    body.classList.remove("lang-tr", "lang-en");
    body.classList.add(`lang-${langCode}`);
    document.documentElement.lang = langCode;
    localStorage.setItem("lang", langCode);
    buttons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.langSwitch === langCode);
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      applyLang(btn.dataset.langSwitch);
    });
  });

  applyLang(stored);
}

function initContactForm() {
  const form = document.querySelector("form[data-contact-form]");
  const noticeBox = document.querySelector("[data-notice]");

  if (form && noticeBox) {
    form.addEventListener("submit", (e) => {
      const name = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const message = form.querySelector("textarea[name='message']").value.trim();

      if (!name || !email || !message) {
        e.preventDefault();
        noticeBox.textContent =
          "Lütfen tüm zorunlu alanları doldurun. / Please fill all required fields.";
        noticeBox.className = "notice error";
        return;
      }

      // Validation başarılı, form FormSubmit'e gönderilecek
      noticeBox.textContent =
        "Gönderiliyor... / Sending...";
      noticeBox.className = "notice";
    });
  }
}

