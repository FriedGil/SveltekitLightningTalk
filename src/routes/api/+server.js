import { json } from '@sveltejs/kit';
import { ChatOpenAI } from "@langchain/openai";


export async function POST({ request }) {
    const body = await request.json();

    const result = await model.invoke("You are a virtual assistant who only answers in pig latin. Answer the following query: " + JSON.stringify(body));
    return json(result.content);
}


const model = new ChatOpenAI({
    modelName: "gpt-4o-mini",
    temperature: 0,
    openAIApiKey: "key here",
});

