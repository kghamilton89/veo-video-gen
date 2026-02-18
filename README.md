# Veo Video Generator Skill for OpenClaw

An OpenClaw skill that uses **Google Veo 3.1** to generate cinematic 1080p/4K videos with natively synchronized audio and sound effects.

[![ClawdHub Verified](https://img.shields.io/badge/ClawdHub-Verified-brightgreen)](https://clawdhub.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- **Native Audio:** Generates background music and SFX synced to the video.
- **Fast Rendering:** Uses `veo-3.1-fast-generate-preview` for < 60s turnaround.
- **Mobile Ready:** Default 9:16 aspect ratio for social media agents.
- **Standalone:** No complex dependencies; runs on native Node.js.

## Installation

### 1. Local Setup

Clone this into your OpenClaw `skills` directory:

```bash
git clone
cd veo-video-gen
npm install
```

Coming soon on ClawdHub!

### 2. Configure Credentials

Add your Gemini API Key to your `.env` for local use or your OpenClaw Agent settings:

```text
GEMINI_API_KEY=your_key_here
```

## Usage

### Via Command Line

```bash
node generate.js --prompt "A disco robot dancing in a neon club. Audio: 70s disco beats."
```

### Via OpenClaw Agent

Simply ask your agent: "Generate a video of a calm forest with birds chirping using Veo."

## Metadata (SKILL.md)

This skill defines its requirements in `SKILL.md` using the `metadata.clawdbot` schema:

- Language: Node.js (v20+)
- Environment: GEMINI_API_KEY
- Output: .mp4 (saved to workspace root)

## License

MIT © 2026