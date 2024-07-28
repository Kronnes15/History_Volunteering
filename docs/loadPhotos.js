let currentLanguage = 'uk';

const translations = {
    uk: {
        thankYou: `Щиро дякуємо мешканцям за їхню невтомну допомогу і підтримку. 
            Ваша великодушність і турбота, а також речі, які ви приносите для українських людей, мають величезне значення. 
            Ваша доброта і співчуття є справжнім джерелом надії і натхнення.`,
        header: "Історія відправлень допомоги",
        buttonTextExpand: "Розгорнути фото",
        buttonTextCollapse: "Згорнути фото"
    },
    en: {
        thankYou: `We extend our heartfelt gratitude to the residents for their tireless help and unwavering support.
            Your generosity and care, along with the items you bring for the Ukrainian people, are invaluable. 
            Your kindness and compassion are a true source of hope and inspiration.`,
        header: "History of Aid Shipments",
        buttonTextExpand: "Expand Photos",
        buttonTextCollapse: "Collapse Photos"
    },
    fr: {
        thankYou: `Nous exprimons notre profonde gratitude aux habitants pour leur aide infatigable et leur soutien indéfectible. 
            Votre générosité et votre sollicitude, ainsi que les articles que vous apportez pour le peuple ukrainien, sont inestimables. 
            Votre bonté et votre compassion sont une véritable source d'espoir et d'inspiration.`,
        header: "Histoire des envois d'aide",
        buttonTextExpand: "Voir les photos",
        buttonTextCollapse: "Réduire les photos"
    }
};

function changeLanguage(lang) {
    currentLanguage = lang;
    document.getElementById("main-header").textContent = translations[lang].header;
    document.getElementById("thank-you-message").innerHTML = translations[lang].thankYou;
    document.querySelectorAll(".toggle-button").forEach(button => {
        button.textContent = translations[lang].buttonTextExpand;
    });
    document.querySelectorAll(".gallery-header").forEach(header => {
        header.textContent = header.getAttribute(`data-${lang}`);
    });
    document.querySelectorAll(".photo-description").forEach(description => {
        description.textContent = description.getAttribute(`data-${lang}`);
    });
}

function togglePhotos(url, containerId, button) {
    const container = document.getElementById(containerId);
    if (container.innerHTML === "") {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                container.innerHTML = data;
                button.textContent = translations[currentLanguage].buttonTextCollapse;
                addPhotoClickEvents();
                updateDescriptionsLanguage();
            })
            .catch(error => {
                console.error('Error loading photos:', error);
            });
    } else {
        container.innerHTML = "";
        button.textContent = translations[currentLanguage].buttonTextExpand;
    }
}

function addPhotoClickEvents() {
    const photos = document.querySelectorAll('.photo img');
    photos.forEach(photo => {
        photo.addEventListener('click', function() {
            openModal(this.src, this.alt);
        });
    });
}

function openModal(src, alt) {
    const modal = document.getElementById("photo-modal");
    const modalImg = document.getElementById("modal-image");
    const captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = alt;
}

function closeModal() {
    const modal = document.getElementById("photo-modal");
    modal.style.display = "none";
}

function updateDescriptionsLanguage() {
    document.querySelectorAll(".photo-description").forEach(description => {
        description.textContent = description.getAttribute(`data-${currentLanguage}`);
    });
}

// Set default language to Ukrainian
changeLanguage('uk');
