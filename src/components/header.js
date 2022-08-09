const header = () => {
    const header = document.createElement("div");
    header.classList.add("header");

    const logo = document.createElement("div");
    logo.classList.add("logo")

    const logoText = document.createElement("h1");
    logoText.textContent = "2_DO. . .";

    logo.appendChild(logoText);
    header.appendChild(logo);

    return header;

}

export default header;