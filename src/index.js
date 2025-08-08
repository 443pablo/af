import { AI } from "./lib.js";
import open from "open";
import { bangs } from "./bangs.js";
import { homedir } from "os";

(async () => {
  const configPath = `${homedir()}/.af_config.json`
  const prompt = process.argv[2] ?? process.argv[1];
  const matchedBang = bangs.find(bang => bang.t === prompt);
  const isBang = !!matchedBang;

  let url;
  

  if (!isBang) {const j = await AI.getWebsite(prompt); url = j.content;} else {url = matchedBang.u;}

  //console.log("Prompt: " + prompt);
  //console.log("Response: " + j.content);
  await open(url);
})();
