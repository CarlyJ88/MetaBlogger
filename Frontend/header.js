import back from "./arrowback_111142.png";
// import write from "./new.png";
// import save from "./save.png";

const backButton = () => {
  let backButton = document.createElement("img");
  const backButtonContainer = document.createElement("a");
  backButtonContainer.dataset.link = true;
  backButton.src = back;
  backButton.alt = "Back button";
  backButton.width = 40;
  backButton.height = 40;
  // backButton.id = 'header-back-button'
  backButtonContainer.append(backButton);

  backButtonContainer.addEventListener("click", () => {
    window.history.go(-1);
  });
  return backButtonContainer;
};

const title = (text) => {
  let title = document.createElement("h2");
  // title.id = 'header-title'
  title.innerHTML = text;
  // title.style.fontSize = '24px';
  return title;
};

const newItemButton = (link, icon, alt, callback) => {
  console.log(icon, "icon");
  let newItemButton = document.createElement("img");
  const linkContainer = document.createElement("a");
  linkContainer.dataset.link = true;
  newItemButton.src = icon;
  linkContainer.href = link;
  newItemButton.alt = alt;
  newItemButton.width = 40;
  newItemButton.height = 40;
  newItemButton.id = "header-new-item-button";
  linkContainer.append(newItemButton);
  linkContainer.addEventListener("click", callback);
  return linkContainer;
};

export default function header(text, icon, link, alt, callback) {
  const header = document.createElement("div");
  header.className = "header";
  header.append(backButton());
  header.append(title(text));
  header.append(newItemButton(link, icon, alt, callback));
  // body.append(header);
  return header;
}
