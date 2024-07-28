const translations = {
    uk: {
        thankYou: `Щиро дякуємо мешканцям за їхню невтомну допомогу і підтримку. 
            Ваша великодушність і турбота, а також речі, які ви приносите для українських людей, мають величезне значення. 
            Ваша доброта і співчуття є справжнім джерелом надії і натхнення.`,
        header: "Історія відправлень допомоги",
        buttonText: "Розгорнути фото",
        headers: [
            "Посилку отримала школа клас психології для релаксу і реабілітації діток",
            "Заголовок 2",
            "Заголовок 3"
        ],
        photoDescriptions: [
            "Опис фото 1 українською",
            "Опис фото 2 українською"
        ]
    },
    en: {
        thankYou: `We extend our heartfelt gratitude to the residents for their tireless help and unwavering support.
            Your generosity and care, along with the items you bring for the Ukrainian people, are invaluable. 
            Your kindness and compassion are a true source of hope and inspiration.`,
        header: "History of Aid Shipments",
        buttonText: "Expand Photos",
        headers: [
            "The parcel was received by the school psychology class for relaxation and rehabilitation of children",
            "Header 2",
            "Header 3"
        ],
        photoDescriptions: [
            "Photo 1 description in English",
            "Photo 2 description in English"
        ]
    },
    fr: {
        thankYou: `Nous exprimons notre profonde gratitude aux habitants pour leur aide infatigable et leur soutien indéfectible. 
            Votre générosité et votre sollicitude, ainsi que les articles que vous apportez pour le peuple ukrainien, sont inestimables. 
            Votre bonté et votre compassion sont une véritable source d'espoir et d'inspiration.`,
        header: "Histoire des envois d'aide",
        buttonText: "Voir les photos",
        headers: [
            "Le colis a été reçu par la classe de psychologie de l'école pour la détente et la réhabilitation des enfants",
            "Titre 2",
            "Titre 3"
        ],
        photoDescriptions: [
            "Description de la photo 1 en français",
            "Description de la photo 2 en français"
        ]
    }
};

function changeLanguage(lang) {
    document.getElementById("main-header").textContent = translations[lang].header;
    document.getElementById("thank-you-message").innerHTML = translations[lang].thankYou;
    document.querySelectorAll(".gallery button").forEach(button => {
        button.textContent = translations[lang].buttonText;
    });
    document.querySelectorAll(".gallery-header").forEach((header, index) => {
        header.textContent = translations[lang].headers[index];
    });
    document.querySelectorAll(".photo-description").forEach((description, index) => {
        description.textContent = translations[lang].photoDescriptions[index];
    });
}

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

// Set default language to Ukrainian
changeLanguage('uk');
