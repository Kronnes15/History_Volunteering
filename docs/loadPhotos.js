const translations = {
    uk: {
        thankYou: `Щиро дякуємо мешканцям за їхню невтомну допомогу і підтримку. 
            Ваша великодушність і турбота, а також речі, які ви приносите для українських людей, мають величезне значення. 
            Ваша доброта і співчуття є справжнім джерелом надії і натхнення.`,
        header: "Історія відправлень допомоги",
        buttonText: "Розгорнути фото"
    },
    en: {
        thankYou: `We extend our heartfelt gratitude to the residents for their tireless help and unwavering support.
            Your generosity and care, along with the items you bring for the Ukrainian people, are invaluable. 
            Your kindness and compassion are a true source of hope and inspiration.`,
        header: "History of Aid Shipments",
        buttonText: "Expand Photos"
    },
    fr: {
        thankYou: `Nous exprimons notre profonde gratitude aux habitants pour leur aide infatigable et leur soutien indéfectible. 
            Votre générosité et votre sollicitude, ainsi que les articles que vous apportez pour le peuple ukrainien, sont inestimables. 
            Votre bonté et votre compassion sont une véritable source d'espoir et d'inspiration.`,
        header: "Histoire des envois d'aide",
        buttonText: "Voir les photos"
    }
};

function changeLanguage(lang) {
    document.getElementById("main-header").textContent = translations[lang].header;
    document.getElementById("thank-you-message").innerHTML = translations[lang].thankYou;
    document.querySelectorAll(".gallery button").forEach(button => {
        button.textContent = translations[lang].buttonText;
    });
}

// Set default language to Ukrainian
changeLanguage('uk');
