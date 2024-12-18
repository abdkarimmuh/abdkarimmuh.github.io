(() => {
  // Theme switch
  const body = document.body;
  const lamp = document.getElementById("mode");
  const avatar = document.getElementById("author-avatar")

  const initAvatar = (state) => {
    if (state === "dark") {
      avatar.src = "/assets/img/avatar_dark.png";
    } else {
      avatar.src = "/assets/img/avatar.png";
    }
  };

  const toggleTheme = (state) => {
    if (state === "dark") {
      localStorage.setItem("theme", "light");
      body.removeAttribute("data-theme");
    } else if (state === "light") {
      localStorage.setItem("theme", "dark");
      body.setAttribute("data-theme", "dark");
    } else {
      initTheme(state);
    }
  };

  lamp.addEventListener("click", () => {
    toggleTheme(localStorage.getItem("theme"))
    initAvatar(localStorage.getItem("theme"))
  });

  // Blur the content when the menu is open
  const cbox = document.getElementById("menu-trigger");

  cbox.addEventListener("change", function () {
    const area = document.querySelector(".wrapper");
    this.checked
      ? area.classList.add("blurry")
      : area.classList.remove("blurry");
  });
})();
