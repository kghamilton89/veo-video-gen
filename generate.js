import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import 'dotenv/config'; // Loads your GEMINI_API_KEY from .env

// 1. Setup Configuration
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("❌ Error: GEMINI_API_KEY is not set in environment variables.");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });
const args = process.argv.slice(2);
const promptArgIndex = args.indexOf("--prompt");
const userPrompt = promptArgIndex !== -1 ? args[promptArgIndex + 1] : null;

if (!userPrompt) {
  console.error("❌ Error: No prompt provided. Usage: node generate.js --prompt \"your description\"");
  process.exit(1);
}

async function runVideoGeneration() {
  try {
    console.log(`🎬 Initiating Veo 3.1 for: "${userPrompt}"`);

    // 2. Start the Generation
    // Using 'veo-3.1-fast-generate-preview' for quicker turnaround
    let operation = await ai.models.generateVideos({
      model: "veo-3.1-fast-generate-preview",
      prompt: userPrompt,
      config: {
        aspectRatio: "9:16",
        resolution: "1080p",
        includeAudio: true,
      },
    });

    // 3. Polling Loop (Waiting for the AI to finish)
    console.log("⏳ Rendering video and generating audio...");
    while (!operation.done) {
      process.stdout.write("."); // Visual progress dots
      await new Promise((resolve) => setTimeout(resolve, 10000)); // Wait 10s
      operation = await ai.operations.getVideosOperation({ operation });
    }

    // 4. Download and Save
    const fileName = `output_${Date.now()}.mp4`;
    await ai.files.download({
      file: operation.response.generatedVideos[0].video,
      downloadPath: fileName,
    });

    console.log(`\n✅ Success! Video saved to: ${fileName}`);
  } catch (error) {
    console.error("\n❌ API Error:", error.message);
  }
}

runVideoGeneration();