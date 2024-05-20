import config from "@/app/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(config.GEMINI_API);

export async function summaryText(textInput) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = "Read the following text: '" + textInput + "'. " + "Describe it in shorter than 100 words.";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}

export async function assessGrammar(textInput){
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const prompt = "Read the following text: '" + textInput + "'. Consider 2 options: accepted and rejected. Provide your answer in terms of English grammar only, will you accept or reject this text to be published into the library. Just give one word answer(accepted or rejected).";
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
}
