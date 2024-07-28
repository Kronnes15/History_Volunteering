function togglePhotos(url, containerId, button) {
    const container = document.getElementById(containerId);
    if (container.innerHTML === "") {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                container.innerHTML = data;
                button.textContent = "Згорнути фото";
            })
            .catch(error => {
                console.error('Error loading photos:', error);
            });
    } else {
        container.innerHTML = "";
        button.textContent = "Розгорнути фото";
    }
}
