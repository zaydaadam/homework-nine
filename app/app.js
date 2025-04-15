import { pages } from "./model.js";
import { showHelpMessage } from "./utils.js";

function runPage(pageName) {
  let page = pages[pageName];
  if (page) {
    $("#app").html(page.content);
    document.title = page.title;
  } else {
    console.error("Page not found");
  }
}

function runApp() {
  runPage("dashboard");

  $("nav a").on("click", (e) => {
    e.preventDefault();
    let btnID = e.currentTarget.id;

    if (btnID === "help") {
      showHelpMessage();
    } else {
      runPage(btnID);
    }
  });
}

$(document).ready(() => {
  runApp();
});
