---
name: veo-video-gen
description: Generates high-fidelity 4K videos with AI audio using Google Veo 3.1.
metadata:
  clawdbot:
    emoji: "🎬"
    requires:
      env: ["GEMINI_API_KEY"]
      bins: ["node"]
    primaryEnv: "GEMINI_API_KEY"
---

# Veo Video Generator
This skill allows you to generate cinematic video clips with synchronized sound effects and music.

## Instructions
1. Check if the `GEMINI_API_KEY` environment variable is available.
2. Execute: `node generate.js --prompt "<prompt>"`
3. Inform the user when the `.mp4` is ready.