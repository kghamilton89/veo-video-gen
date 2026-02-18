---
name: veo-video-generator
description: Generates high-fidelity 4K videos with synced audio using Google Veo 3.1. Use when the user asks to create, generate, or render a video clip from text.
version: 1.0.0
metadata:
  clawdbot:
    emoji: "🎬"
    requires:
      env: ["GEMINI_API_KEY"]
      bins: ["node"]
    primaryEnv: "GEMINI_API_KEY"
    category: "Video & Media"
---

# Veo Video Generator
This skill enables the agent to generate cinematic video clips with natively synchronized sound effects and music using the Google Veo 3.1 API.

## Instructions
1. **Trigger**: Activate this skill when the user requests video generation (e.g., "Make a video of...", "Generate a clip...").
2. **Environment Check**: Ensure the `GEMINI_API_KEY` is available in the environment before execution.
3. **Execution**: Run the generation script using Node.js:
   `node generate.js --prompt "<user_prompt>"`
4. **Resolution**: By default, the skill targets 1080p at a 9:16 aspect ratio, optimized for mobile previews and social sharing.
5. **Output**: Once the `.mp4` file is saved to the workspace, provide the final filename to the user.

## Prompting Best Practices for Veo 3.1
To get the best results with audio, encourage prompts that include an "Audio:" block:
- **Example**: "A neon-lit cyberpunk street in the rain. Audio: Muffled techno music and heavy rainfall."

## Security & Privacy
- This skill only sends text prompts to the Google Veo API.
- It does not read local files unless they are explicitly provided as reference images.