document.addEventListener("DOMContentLoaded", () => {
  console.log("JS cargado correctamente ✔");

  // Año footer
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Botones carpeta
  const folders = document.querySelectorAll(".folder");

  // Tabs
  const tabs = {
    home: document.getElementById("tab-home"),
    cuentas: document.getElementById("tab-cuentas"),
    wsp: document.getElementById("tab-wsp"),
    unete: document.getElementById("tab-unete"),
  };

  // Validación (muy importante)
  if (!folders.length) {
    console.error("❌ No se encontraron botones .folder");
    return;
  }

  for (const [key, tab] of Object.entries(tabs)) {
    if (!tab) {
      console.error(`❌ Falta el div con id="tab-${key}"`);
      return;
    }
  }

  function showTab(name) {
    Object.values(tabs).forEach(t => t.classList.remove("is-active"));
    folders.forEach(f => f.classList.remove("folder--active"));

    tabs[name].classList.add("is-active");

    const activeBtn = document.querySelector(`.folder[data-tab="${name}"]`);
    if (activeBtn) activeBtn.classList.add("folder--active");

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Click carpetas
  folders.forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      console.log("Click carpeta:", tab);
      showTab(tab);
    });
  });

  // Botones de la mini landing
  document.querySelectorAll("[data-goto]").forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.goto;
      console.log("Click landing:", tab);
      showTab(tab);
    });
  });

  // Tab inicial
  showTab("home");
});
