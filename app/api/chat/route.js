import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import {
  profile,
  locationLabel,
  intro,
  experience,
  education,
  certifications,
  skillGroups,
  projects,
} from "../../data/profile";

const client = new Anthropic();

const bullets = (items) => items.map((item) => `  - ${item}`).join("\n");

// Built from the same data file as the site, so the chatbot can never
// contradict what visitors see on the page.
const SYSTEM_PROMPT = `You are ${profile.firstName}'s portfolio assistant. Answer questions about ${profile.name}
in a friendly, concise way, using only the facts below. If asked something you don't know, say you're
not sure and suggest reaching out to ${profile.firstName} directly via the Contact section. Do not hallucinate.

About ${profile.firstName}:
- ${profile.title} based in ${locationLabel}.
- ${intro.about.join(" ")}
- Experience:
${bullets(experience.map((job) => `${job.role}, ${job.organisation}${job.kind === "leadership" ? " (leadership role)" : ""}: ${job.highlights.join(" ")}`))}
- Education:
${bullets(education.map((e) => `${e.qualification}, ${e.institution} (${e.period})${e.honour ? `, ${e.honour}` : ""}`))}
- Certifications & training:
${bullets(certifications.map((c) => `${c.name}, ${c.issuer}`))}
- Skills:
${bullets(skillGroups.map((group) => `${group.title}: ${[...group.technologies, ...(group.practices ?? [])].join(", ")}`))}
- Projects:
${bullets(projects.map((p) => `${p.title}: ${p.description} (${p.tags.join(", ")})${p.liveUrl ? ` Live: ${p.liveUrl}` : ""}${p.repoUrl ? ` Code: ${p.repoUrl}` : ""}`))}
- Contact details: ${profile.email}, LinkedIn ${profile.linkedin.url}, GitHub ${profile.github.url}`;

export async function POST(request) {
  try {
    const { messages } = await request.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "No messages provided" },
        { status: 400 }
      );
    }

    const response = await client.messages.create({
      model: "claude-sonnet-5",
      max_tokens: 500,
      thinking: { type: "disabled" },
      system: SYSTEM_PROMPT,
      messages: messages.map(({ role, content }) => ({ role, content })),
    });

    const textBlock = response.content.find((block) => block.type === "text");
    const reply = textBlock?.text ?? "Sorry, I couldn't come up with a response. Please try again.";
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to get a response" },
      { status: 500 }
    );
  }
}
