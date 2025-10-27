const colorsDictionary = {
    red: "rojo",
    orange: "naranja",
    yellow: "amarillo",
    green: "verde",
    blue: "azul",
    purple: "morado",
    indigo: "añil",
  };
  
  // Function to translate English word to Spanish
  function translateToSpanish(word) {
    if (colorsDictionary.hasOwnProperty(word)) {
        let info = "Your spanish version is ";
      return info + colorsDictionary[word];
    } else {
      return "Translation not found";
    }
  };

  function translateColor() {
    const inputElement = document.getElementById("englishColor");
    const translatedColorElement = document.getElementById("translatedColor");
    const inputColor = inputElement.value.toLowerCase();
    const translatedColor = translateToSpanish(inputColor);
    translatedColorElement.textContent = translatedColor;

    // Set the color of the translated text
    if (colorsDictionary.hasOwnProperty(inputColor)) {
      translatedColorElement.style.color = inputColor;
    } else {
      translatedColorElement.style.color = "black"; // Default color if not found
    }

    inputElement.value = ""; // Clear the input field
  };
