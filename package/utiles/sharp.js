const sharp = require("sharp");

sharp("./jsimage.png").resize(80).grayscale().toFile("resized.png")