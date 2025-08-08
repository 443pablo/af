import { instructions } from "./instructions.js";
import { AI } from "./lib.js";
import open from "open";

(async () => {
  const prompt = process.argv[2] ?? process.argv[1];
  const j = await AI.getWebsite(prompt);

  //console.log("Prompt: " + prompt);
  //console.log("Response: " + j.content);
  await open(j.content)
})();
