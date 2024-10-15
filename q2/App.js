function setupTabs() {
  document.querySelectorAll(".tabs__button").forEach((button) => {
    button.addEventListener("click", () => {
      const sideBar = button.parentElement;
      const tabsContainer = sideBar.parentElement;
      const tabsNumber = button.dataset.fortab;
      const tabToActivate = tabsContainer.querySelector(
        `.tabs__content[data-tab="${tabsNumber}"]`
      );
      console.log(sideBar);
      console.log(tabsContainer);
      console.log(tabsNumber);
      console.log(tabToActivate);
      sideBar.querySelectorAll(".tabs__button").forEach((button) => {
        button.classList.remove("tabs__button-active");
      });
      tabsContainer.querySelectorAll(".tabs__content").forEach((tab) => {
        tab.classList.remove("tabs__content-active");
      });
      button.classList.add("tabs__button-active");
      tabToActivate.classList.add("tabs__content-active");
    });
  });
}
setupTabs();
