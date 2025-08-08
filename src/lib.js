import { instructions } from './instructions.js';

export class AI {
    constructor() {

    }
    static async getWebsite(shorthand) {
        try {
            const response = await fetch("https://ai.hackclub.com/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages: [
                        {
                            role: "system",
                            content: instructions,
                        },
                        {
                            role: "user",
                            content: `What is the full URL for the website with shorthand name "${shorthand}"?`
                        }
                    ]
                }),
            })

            const data = await response.json();
            const rawResponse = data.choices?.pop()?.message?.content || "";
            
            const thinkRegex = /^<think>([\s\S]+)<\/think>([\s\S]+)$/;
            const [, think, content] = thinkRegex.exec(rawResponse) || [null, undefined, rawResponse];

            return {
                content: content?.replace(/^[\n\r]+|[\n\r]+$/g, ''),
                think: think?.replace(/^[\n\r]+|[\n\r]+$/g, ''),
                raw: data,
            }
        } catch (error) {
            console.error("Error fetching website:", error);
            throw error;
        }
    }
}