
import { GoogleGenAI } from "@google/genai";
import { STUDENT_INFO, SKILLS, PROJECTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

const SYSTEM_PROMPT = `
You are the personal AI assistant for ${STUDENT_INFO.name}, a first-year Computer Science student.
Your goal is to answer questions about ${STUDENT_INFO.name}'s skills, projects, and educational background.

Key Information about ${STUDENT_INFO.name}:
- University: ${STUDENT_INFO.university}
- Skills: ${SKILLS.map(s => `${s.name} (${s.category})`).join(", ")}
- Projects: ${PROJECTS.map(p => p.title).join(", ")}
- Bio: ${STUDENT_INFO.bio}

Guidelines:
1. Be professional, friendly, and encouraging.
2. If asked about a project, provide a brief summary based on the provided data.
3. If asked about contact info, provide ${STUDENT_INFO.name}'s email: ${STUDENT_INFO.email}.
4. Keep responses concise (under 3 sentences).
5. If someone asks something outside of ${STUDENT_INFO.name}'s professional/academic scope, politely pivot back to his portfolio.
`;

export const getGeminiResponse = async (history: { role: string, content: string }[]) => {
  try {
    const contents = history.map(h => ({
      role: h.role,
      parts: [{ text: h.content }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: contents as any,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
        maxOutputTokens: 250,
      }
    });

    return response.text || "I'm having trouble thinking right now. Please try again!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, I encountered an error. How else can I help you today?";
  }
};
