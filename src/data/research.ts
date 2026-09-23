import type { ResearchArea, ResearchProject, Publication } from "@/types";

export const researchAreas: ResearchArea[] = [
  {
    id: "ra-ai",
    name: "Artificial Intelligence",
    summary:
      "Machine learning, natural language processing, and applied AI for low-resource contexts.",
    leadIds: ["staff-002"],
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "ra-systems",
    name: "Distributed Systems",
    summary:
      "Consensus, fault tolerance, edge computing, and large-scale infrastructure.",
    leadIds: ["staff-001"],
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "ra-hci",
    name: "Human-Computer Interaction",
    summary:
      "Design and evaluation of interactive systems, with a focus on education and civic technology.",
    leadIds: ["staff-003"],
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "ra-networks",
    name: "Networks and Security",
    summary: "Network protocols, wireless systems, and security analysis.",
    leadIds: ["staff-004"],
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
];

export const researchProjects: ResearchProject[] = [
  {
    id: "rp-1",
    title: "Consensus Protocols for Constrained Edge Devices",
    areaId: "ra-systems",
    summary:
      "Investigating lightweight consensus algorithms suitable for low-power edge deployments.",
    status: "ongoing",
    leadIds: ["staff-001"],
    startDate: "2024-09-01T00:00:00.000Z",
    createdAt: "2024-09-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "rp-2",
    title: "Speech Recognition for Under-Resourced Languages",
    areaId: "ra-ai",
    summary:
      "Building ASR systems for languages with limited transcribed corpora, using self-supervised methods.",
    status: "ongoing",
    leadIds: ["staff-002"],
    startDate: "2024-01-15T00:00:00.000Z",
    createdAt: "2024-01-15T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "rp-3",
    title: "Classroom-Facing Educational Software",
    areaId: "ra-hci",
    summary:
      "Studying how teachers integrate interactive software into existing classroom practice.",
    status: "ongoing",
    leadIds: ["staff-003"],
    startDate: "2023-05-01T00:00:00.000Z",
    createdAt: "2023-05-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
];

export const publications: Publication[] = [
  {
    id: "pub-1",
    title: "Lightweight Consensus for Edge Networks",
    authors: ["Adaeze Okonkwo", "Ifeoma Umeh"],
    venue: "Journal of Distributed Computing",
    year: 2024,
    doi: "10.0000/jdc.2024.001",
    createdAt: "2024-06-01T00:00:00.000Z",
    updatedAt: "2024-06-01T00:00:00.000Z",
  },
  {
    id: "pub-2",
    title: "Designing Civic Technologies with Communities",
    authors: ["Funmi Adegoke"],
    venue: "ACM CHI",
    year: 2023,
    createdAt: "2023-04-01T00:00:00.000Z",
    updatedAt: "2023-04-01T00:00:00.000Z",
  },
];

export const getResearchAreaById = (id: string) =>
  researchAreas.find((r) => r.id === id);