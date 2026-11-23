
// Navegación móvil
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    // Abrir y cerrar menú
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Cerrar menú al seleccionar una sección
    document.querySelectorAll("#navLinks a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
        });
    });
}

// Inscripción interactiva a talleres de capacitación
const enrollButtons = document.querySelectorAll(".btn-enroll");
const enrolledList = document.getElementById("enrolledList");
const enrolledCount = document.getElementById("enrolledCount");

enrollButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const courseName = btn.getAttribute("data-course") || "Taller cultural";

        // Verificar si ya está en la lista
        const existingItems = Array.from(document.querySelectorAll(".enrolled-header strong"));
        const alreadyEnrolled = existingItems.some(item => item.textContent.trim() === courseName);

        if (alreadyEnrolled) {
            alert(`Ya estás inscrito en el taller: "${courseName}". ¡Revisa tu progreso en Mi Perfil!`);
            const perfilSection = document.getElementById("perfil");
            if (perfilSection) perfilSection.scrollIntoView({ behavior: "smooth" });
            return;
        }

        // Agregar al perfil
        if (enrolledList) {
            const newItem = document.createElement("div");
            newItem.className = "enrolled-item";
            newItem.innerHTML = `
                <div class="enrolled-header">
                    <strong>${courseName}</strong>
                    <span>0% completado · ¡Nuevo!</span>
                </div>
                <div class="progress-bar"><div class="progress-fill" style="width: 10%;"></div></div>
            `;
            enrolledList.prepend(newItem);
        }

        // Actualizar contador
        if (enrolledCount) {
            let count = parseInt(enrolledCount.textContent) || 0;
            enrolledCount.textContent = count + 1;
        }

        btn.textContent = "✓ INSCRITO";
        btn.style.background = "#2e7d32";
        btn.style.color = "#ffffff";

        alert(`¡Inscripción exitosa! Has sido inscrito en "${courseName}". Hemos actualizado tu sección "Mi Perfil".`);

        const perfilSection = document.getElementById("perfil");
        if (perfilSection) {
            perfilSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Modificar datos de perfil
const editProfileBtn = document.getElementById("editProfileBtn");
const profileName = document.getElementById("profileName");
const profileCity = document.getElementById("profileCity");

if (editProfileBtn) {
    editProfileBtn.addEventListener("click", () => {
        const currentName = profileName ? profileName.textContent.trim() : "Elena Quiñónez";
        const currentCity = profileCity ? profileCity.textContent.trim() : "San Lorenzo, Esmeraldas";

        const newName = prompt("Ingresa tu nombre completo:", currentName);
        if (newName && newName.trim() !== "") {
            if (profileName) profileName.textContent = newName.trim();
        }

        const newCity = prompt("Ingresa tu ciudad / comunidad:", currentCity);
        if (newCity && newCity.trim() !== "") {
            if (profileCity) profileCity.textContent = newCity.trim();
        }
    });
}

// Mensaje de bienvenida en consola
console.log("Bienvenidos a AfroConecta 🌍 | Plataforma de Cultura y Capacitación Afroecuatoriana");
