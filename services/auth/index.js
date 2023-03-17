require('dotenv').config();

export const imageGeneratorAuth = (() => {
  try {
    const randomGradient = Math.floor(Math.random() * 5) + 1;
    return JSON.parse(IMAGE_GENERATOR_AUTH[randomGradient]);
  } catch (error) {
    console.error('something went wrong in imageGeneratorAuth ', error);
  }
})();