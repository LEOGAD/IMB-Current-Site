/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini safely
let ai: GoogleGenAI | null = null;
function getGemini(): GoogleGenAI {
  if (!ai) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.warn("WARNING: GEMINI_API_KEY is not defined. AI Room Generator will use offline fallback presets.");
    }
    ai = new GoogleGenAI({
      apiKey: key || "OFFLINE_FALLBACK",
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return ai;
}

// REST API for AI Room Inspiration
app.post("/api/generate-inspiration", async (req, res) => {
  const { roomType, style, notes } = req.body;

  if (!roomType || !style) {
    res.status(400).json({ error: "roomType and style are required" });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    // Return a beautiful luxurious offline design preset based on their inputs
    res.json(getOfflineFallback(roomType, style, notes));
    return;
  }

  try {
    const geminiClient = getGemini();
    const prompt = `You are an elite, award-winning senior interior designer and Creative Director from Pentagram and Studio McGee.
Create a highly customized, ultra-premium interior design concept for a ${roomType} styled in a ${style} aesthetic.
Custom User Input / Space Constraints: "${notes || "No extra notes specified"}".

Return an exceptionally detailed, luxurious mood board and architectural recommendation in JSON format. Provide exclusive, professional terminology (e.g. vein-cut travertine, unlacquered living brass, 2400K direct cove profiles, bespoke book-matched marble slabs).`;

    const response = await geminiClient.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            themeName: {
              type: Type.STRING,
              description: "A luxurious, creative name for this custom design theme."
            },
            conceptSummary: {
              type: Type.STRING,
              description: "An elegant, poetic, and highly descriptive summary of the spatial concept and atmospheric feel (2-3 sentences)."
            },
            palette: {
              type: Type.ARRAY,
              description: "A luxury neutral and accent color palette.",
              items: {
                type: Type.OBJECT,
                properties: {
                  colorName: { type: Type.STRING },
                  hex: { type: Type.STRING, description: "A valid hexadecimal color code." },
                  rationale: { type: Type.STRING, description: "Why this color was chosen to sculpt this space." }
                },
                required: ["colorName", "hex", "rationale"]
              }
            },
            materials: {
              type: Type.ARRAY,
              description: "List of 4-5 high-end authentic material specifications.",
              items: { type: Type.STRING }
            },
            layoutTips: {
              type: Type.ARRAY,
              description: "List of 3-4 professional architectural and spatial planning recommendations.",
              items: { type: Type.STRING }
            },
            stylingSecrets: {
              type: Type.ARRAY,
              description: "List of 3-4 exclusive, high-end styling tips (e.g., fabric layering, art placement, custom hardware).",
              items: { type: Type.STRING }
            },
            lightingScenario: {
              type: Type.STRING,
              description: "A sophisticated description of the architectural lighting temperature and fixture placement."
            }
          },
          required: ["themeName", "conceptSummary", "palette", "materials", "layoutTips", "stylingSecrets", "lightingScenario"]
        }
      }
    });

    const textOutput = response.text;
    if (!textOutput) {
      throw new Error("No response text from Gemini API");
    }

    const data = JSON.parse(textOutput.trim());
    res.json(data);
  } catch (error: any) {
    console.error("Gemini Generation Error, fallback applied:", error);
    res.json(getOfflineFallback(roomType, style, notes));
  }
});

// Offline Fallback Presets for seamless UX without APIs
function getOfflineFallback(roomType: string, style: string, notes: string) {
  const resolvedNotes = notes ? `incorporating "${notes}"` : "";
  return {
    themeName: `${style} ${roomType} Sanctuary`,
    conceptSummary: `A spectacular composition celebrating the purity of the ${style} philosophy within your ${roomType}, ${resolvedNotes}. Every line is designed with architectural honesty to emphasize spatial release, material integrity, and luxurious silence.`,
    palette: [
      { colorName: "Warm Alabaster", hex: "#F2EFE9", rationale: "Acts as a bright, matte canvas to amplify diffuse natural daylight." },
      { colorName: "Smoked Espresso", hex: "#2A2421", rationale: "Introduces rich, architectural grounding lines through furniture and joinery outlines." },
      { colorName: "Aurelia Gold", hex: "#C9A96E", rationale: "Refined, hand-rubbed metal touches to bring micro-contrast to organic fibers." },
      { colorName: "Earthy Clay", hex: "#B88A76", rationale: "Brings soft warmth and localized texture to custom ceramic styling pieces." }
    ],
    materials: [
      "Vein-cut Honed Arabescato Marble",
      "Brushed Smoked White Oak Millwork",
      "Antwerp Heavy-Weight Flax Linen draperies",
      "Hand-applied Italian microcement walls"
    ],
    layoutTips: [
      "Establish a primary visual axis matching natural window entries to draw the eye outward.",
      "Incorporate flush-integrated storage behind panels to remove visible clutter from sightlines.",
      "Utilize low-profile modular furniture layouts to emphasize high ceilings and expansive negative space."
    ],
    stylingSecrets: [
      "Layer heavily-textured linen pillows with raw silk accents on neutral fabrics for subtle warmth.",
      "Place a single, large-scale monolithic ceramic vase on your low table instead of multiple small objects.",
      "Use unlacquered brass hardware which patinates gently, reflecting a story of tactile living."
    ],
    lightingScenario: "A sophisticated warm dimming system utilizing concealed 2400K LED linear coves and low-profile darklight spot profiles, creating a cinematic, evening-focused glow."
  };
}

async function start() {
  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

start();
