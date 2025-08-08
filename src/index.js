import { instructions } from "./instructions.js";
import { AI } from "./lib.js";

(async () => {

  const prompt = "goog"

  const j = await AI.getWebsite(prompt);

  console.log("Prompt: " + prompt);
  console.log("Response: " + j.content);
})();
