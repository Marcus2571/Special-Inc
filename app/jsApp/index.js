const supportedLanguages = {
    "Afrikaans": "af", "Albanian": "sq", "Amharic": "am", "Arabic": "ar", "Armenian": "hy", 
    "Assamese": "as", "Aymara": "ay", "Azerbaijani": "az", "Bambara": "bm",
    "Basque": "eu", "Belarusian": "be", "Bengali": "bn", "Bhojpuri": "bho", "Bosnian": "bs",
    "Bulgarian": "bg", "Catalan": "ca", "Cebuano": "ceb", "Chinese (Simplified)": "zh", 
    "Chinese (Traditional)": "zh-TW", "Corsican": "co", "Croatian": "hr", "Czech": "cs",
    "Danish": "da", "Dhivehi": "dv", "Dogri": "doi", "Dutch": "nl", "English": "en",
    "Esperanto": "eo", "Estonian": "et", "Ewe": "ee", "Filipino (Tagalog)": "fil", "Finnish": "fi",
    "French": "fr", "Frisian": "fy", "Galician": "gl", "Georgian": "ka", "German": "de",
    "Greek": "el", "Guarani": "gn", "Gujarati": "gu", "Haitian Creole": "ht", "Hausa": "ha",
    "Hawaiian": "haw", "Hebrew": "he", "Hindi": "hi", "Hmong": "hmn", "Hungarian": "hu",
    "Icelandic": "is", "Igbo": "ig", "Indonesian": "id", "Irish": "ga", "Italian": "it",
    "Japanese": "ja", "Javanese": "jv", "Kannada": "kn", "Kazakh": "kk", "Khmer": "km",
    "Hinyarwanda": "rw", "Konkani": "gom", "Korean": "ko", "Krio": "kri", "Kurdish": "ku",
    "Kurdish (Sorani)": "ckb", "Kyrgyz": "ky", "Lao": "lo", "Latin": "la", "Latvian": "lv",
    "Lingala": "ln", "Lithuanian": "lt", "Luganda": "lg", "Luxembourgish": "lb","Macedonian": "mk",
    "Maithili": "mai", "Malagasy": "mg", "Malay": "ms", "Malayalam": "ml", "Maltese": "mt",
    "Maori": "mi", "Marathi": "mr", "Meiteilon": "mni-Mtei", "Mizo": "lus", "Mongolian": "mn",
    "Myanmar (Burmese)": "my", "Nepali": "ne", "Norwegian": "no", "Nyanja (Chichewa)": "ny",
    "Odia (Oriya)": "or", "Oromo": "om", "Pashto": "ps", "Persian": "fa", "Polish": "pl",
    "Portuguese (Portugal, Brazil)": "pt", "Punjabi": "pa", "Quechua": "qu", "Romanian": "ro", 
    "Russian": "ru", "Samoan": "sm", "Sanskrit": "sa", "Scots Gaelic": "gd", "Sepedi": "nso",
    "Serbian": "sr", "Sesotho": "st", "Shona": "sn", "Sindhi": "sd", "Sinhala (Sinhalese)": "si",
    "Slovak": "sk", "Slovenian": "sl", "Somali": "so", "Spanish": "es", "Swahili": "sw",
    "Swedish": "sv", "Tagalog (Filipino)": "tl", "Tajik": "tg", "Tamil": "ta", "Tatar": "tt",
    "Telugu": "te", "Thai": "th", "Tigrinya": "ti", "Tsonga": "ts", "Turkish": "tr", "Turkmen": "tk",
    "Twi (Akan)": "ak", "Ukrainian": "uk", "Urdu": "ur", "Uyghur": "ug", "Uzbek": "uz", 
    "Vietnamese": "vi", "Welsh": "cy", "Xhosa": "xh", "Yiddish": "yi", "Yoruba": "yo", "Zulu": "zu"
};

const Spoken = document.getElementById('LanguageSpoken');
const Translate = document.getElementById('LanguageTranslate');


Object.keys(supportedLanguages).forEach((key) => {
    const language = supportedLanguages[key];
    const option = document.createElement("option");
    option.value = language;
    option.text = key;
    Spoken.appendChild(option);
    const clone = option.cloneNode(true);
    Translate.appendChild(clone);
});

document.addEventListener("DOMContentLoaded", () => {
    let video = document.getElementById("vid");
    let mediaDevices = navigator.mediaDevices;
    vid.muted = true;

    // Accessing the user camera and video.
    mediaDevices
        .getUserMedia({
            video: true,
            audio: true,
        })
        .then((stream) => {

            // Changing the source of video to current stream.
            video.srcObject = stream;
            video.addEventListener("loadedmetadata", () => {
                video.play();
            });
        })
        .catch(alert);
});

// document.appendChild(Spoken);
// document.appendChild(Translate);