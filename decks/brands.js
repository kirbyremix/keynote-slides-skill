// ABOUTME: Shared brand profiles for keynote decks in this repo.
// ABOUTME: Loaded by deck HTML to keep entity styling consistent.

// Brand profiles for keynote decks.
// Remix Partners is the primary brand; example brands follow.
window.KEYNOTE_BRANDS = {
  remix: {
    label: "Remix Partners",
    tokens: {
      "brand-ink": "#1D1D1C",
      "brand-ink-soft": "#3a3a39",
      "brand-paper": "#FFFFFF",
      "brand-paper-deep": "#f2f3f5",
      "brand-accent": "#E0F61F",
      "brand-accent-strong": "#c8db00",
      "brand-sage": "#5D6E96",
      "brand-slate": "#A77E5A",
      "brand-line": "rgba(29, 29, 28, 0.12)",
      "brand-glow": "rgba(224, 246, 31, 0.35)",
    },
    // Extended palette (available for per-slide overrides and AI prompts)
    extendedTokens: {
      "brand-mauve": "#A04473",
      "brand-mauve-light": "#CEBAB3",
      "brand-sage-light": "#DEE2EB",
      "brand-slate-light": "#C1B59C",
      "brand-purple": "#AD8FFF",
    },
    fonts: {
      display: "\"Studio Feixen Edgy\", \"Arial\", sans-serif",
      body: "\"Studio Feixen Sans\", \"Arial\", sans-serif",
      mono: "\"Studio Feixen Mono\", \"Roboto Mono\", monospace",
    },
    fontLabel: "Display: Studio Feixen Edgy. Headings/Body: Studio Feixen Sans. CTAs/Mono: Studio Feixen Mono.",
    mediaPromptPrefix: "3D rendered minimalist scene, warm bronze and beige tones, soft pink and mauve accents, clean minimal composition, wide angle, warm ambient lighting, gradient background in soft pink-to-purple or warm neutral hues, contemplative serene atmosphere, premium consulting aesthetic",
    defaultDeckType: "pitch",
    deckPreferences: {
      pitch: {
        voice: "confident but not salesy, specific but not overcommitted, strategic but practical",
        headlineStyle: "clear value proposition, outcome-focused, no hype language",
        narrative: ["Context", "Challenge", "Approach", "Proof", "Next Steps"],
        density: "low",
        visualFocus: "hero visual + single insight per slide",
        avoid: ["hype language", "empty superlatives", "vague promises", "dense paragraphs"],
      },
      strategy: {
        voice: "direct, evidence-focused, respectful of client intelligence",
        headlineStyle: "clear verdicts with concrete next steps",
        narrative: ["Situation", "Analysis", "Recommendation", "Roadmap"],
        density: "medium",
        visualFocus: "tables, timelines, process maps",
        avoid: ["jargon stacks", "unactionable recommendations", "quantified impact claims"],
      },
      workshop: {
        voice: "engaging, practical, hands-on",
        headlineStyle: "action-oriented, what participants will do",
        narrative: ["Foundation", "Demonstration", "Practice", "Application"],
        density: "medium-low",
        visualFocus: "diagrams, step-by-step flows, interactive prompts",
        avoid: ["hour-by-hour breakdowns", "walls of text", "passive descriptions"],
      },
    },
  },
  northwind: {
    label: "Northwind Labs",
    tokens: {
      "brand-ink": "#1a1a2e",
      "brand-ink-soft": "#2d2d44",
      "brand-paper": "#fafbfc",
      "brand-paper-deep": "#f0f2f5",
      "brand-accent": "#ed8936",
      "brand-accent-strong": "#dd6b20",
      "brand-sage": "#00b5d8",
      "brand-slate": "#4a5568",
      "brand-line": "rgba(26, 26, 46, 0.12)",
      "brand-glow": "rgba(237, 137, 54, 0.35)",
    },
    fonts: {
      display: "\"Inter\", \"Helvetica Neue\", sans-serif",
      body: "\"Inter\", \"Helvetica Neue\", sans-serif",
    },
    fontLabel: "Display: Inter. Body: Inter.",
    mediaPromptPrefix: "modern tech palette, amber and cyan highlights, clean studio lighting",
    defaultDeckType: "pitch",
    deckPreferences: {
      pitch: {
        voice: "confident, data-driven, outcome-focused",
        headlineStyle: "clear value proposition, concrete metrics",
        narrative: ["Problem", "Solution", "Traction", "Team", "Ask"],
        density: "low",
        visualFocus: "hero visual + single insight per slide",
        avoid: ["dense paragraphs", "multi-idea slides"],
      },
      strategy: {
        voice: "direct, actionable, evidence-focused",
        headlineStyle: "clear verdicts with concrete next steps",
        narrative: ["Situation", "Analysis", "Recommendation", "Roadmap"],
        density: "medium",
        visualFocus: "tables, timelines, action lists",
        avoid: ["vague strategy-speak", "unactionable recommendations"],
      },
    },
  },
  apex: {
    label: "Apex Consulting",
    tokens: {
      "brand-ink": "#1a1a1a",
      "brand-ink-soft": "#333333",
      "brand-paper": "#f5f1e8",
      "brand-paper-deep": "#e8dcc6",
      "brand-accent": "#b8956f",
      "brand-accent-strong": "#9a7a57",
      "brand-sage": "#d4a574",
      "brand-slate": "#666666",
      "brand-line": "rgba(26, 26, 26, 0.12)",
      "brand-glow": "rgba(184, 149, 111, 0.35)",
    },
    fonts: {
      display: "\"Helvetica Neue\", \"Segoe UI\", \"Helvetica\", sans-serif",
      body: "\"Helvetica Neue\", \"Segoe UI\", \"Helvetica\", sans-serif",
    },
    fontLabel: "Display: System sans. Body: System sans.",
    mediaPromptPrefix: "warm parchment palette, refined brass accents, minimal editorial lighting",
    defaultDeckType: "pitch",
    deckPreferences: {
      pitch: {
        voice: "confident, concise, design-led",
        headlineStyle: "short, verb-led, outcome first",
        narrative: ["Context", "Problem", "Solution", "Proof", "Ask"],
        density: "low",
        visualFocus: "hero visual + single insight per slide",
        avoid: ["dense paragraphs", "multi-idea slides"],
      },
    },
  },
  coastal: {
    label: "Coastal Biotech",
    tokens: {
      "brand-ink": "#0e2841",
      "brand-ink-soft": "#1a3a57",
      "brand-paper": "#f6f7f9",
      "brand-paper-deep": "#e8e8e8",
      "brand-accent": "#156082",
      "brand-accent-strong": "#0f9ed5",
      "brand-sage": "#196b24",
      "brand-slate": "#0e2841",
      "brand-line": "rgba(14, 40, 65, 0.12)",
      "brand-glow": "rgba(21, 96, 130, 0.32)",
    },
    fonts: {
      display: "\"Avenir Next\", \"Helvetica Neue\", sans-serif",
      body: "\"Avenir Next\", \"Helvetica Neue\", sans-serif",
    },
    fontLabel: "Display: Avenir Next. Body: Avenir Next.",
    mediaPromptPrefix: "navy biotech palette, teal accents, high-clarity lab lighting",
    defaultDeckType: "partner",
    deckPreferences: {
      partner: {
        voice: "strategic, collaborative, opportunity-focused",
        headlineStyle: "mutual value and pathway clarity",
        narrative: ["Opportunity", "Mechanism", "Validation", "Pathway", "Next steps"],
        density: "medium-low",
        visualFocus: "process maps, milestones",
        avoid: ["overly technical walls of text"],
      },
    },
  },
};

window.KEYNOTE_DEFAULT_ENTITY = "remix";
