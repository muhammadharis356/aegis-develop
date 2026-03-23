const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType, BorderStyle } = require('docx');

const doc = new Document({
    sections: [{
        properties: {},
        children: [
            new Paragraph({
                text: "Final Year Project Proposal",
                heading: HeadingLevel.TITLE,
                spacing: { after: 300 }
            }),
            new Paragraph({
                text: "Project Title: Aegis-AI: An Enterprise-Grade AI Governance and Trust Platform",
                heading: HeadingLevel.HEADING_1,
                spacing: { after: 200 }
            }),

            // 1. Introduction
            new Paragraph({
                text: "1. Introduction",
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 200, after: 100 }
            }),
            new Paragraph({
                text: "The rapid adoption of Artificial Intelligence (AI) in enterprise environments has created a critical need for robust governance frameworks. As organizations deploy Large Language Models (LLMs) and predictive models, they face challenges related to compliance (e.g., EU AI Act), data privacy, and operational risk. Aegis-AI is a comprehensive AI Governance Platform designed to enable organizations to adopt AI safely, responsibly, and in compliance with global standards."
            }),

            // 2. Problem Statement
            new Paragraph({
                text: "2. Problem Statement",
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 200, after: 100 }
            }),
            new Paragraph({
                text: "Current AI governance solutions are often fragmented, relying on manual spreadsheets or disjointed tools to track models, risks, and compliance. This leads to:"
            }),
            new Paragraph({ text: "• Lack of Visibility: Organizations don't know what models they are running or where.", bullet: { level: 0 } }),
            new Paragraph({ text: "• Compliance Gaps: Difficulty in adhering to evolving regulations like the EU AI Act and ISO 42001.", bullet: { level: 0 } }),
            new Paragraph({ text: "• Unchecked Performance: LLMs are often deployed without continuous evaluation for bias, toxicity, or accuracy.", bullet: { level: 0 } }),
            new Paragraph({ text: "• Trust Deficit: Stakeholders (customers, regulators) lack visibility into the organization's AI safety measures.", bullet: { level: 0 } }),

            // 3. Objectives
            new Paragraph({
                text: "3. Objectives",
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 200, after: 100 }
            }),
            new Paragraph({
                text: "The primary objective of this project is to develop a \"Single Pane of Glass\" platform that unifies the entire AI governance lifecycle. Key goals include:"
            }),
            new Paragraph({ text: "• Centralized Inventory: Automate the tracking of AI models, vendors, and projects.", bullet: { level: 0 } }),
            new Paragraph({ text: "• Regulatory Alignment: Provide out-of-the-box mappings for major frameworks (EU AI Act, NIST AI RMF, ISO 42001, ISO 27001).", bullet: { level: 0 } }),
            new Paragraph({ text: "• Technical Evaluation: seamless integration of technical benchmarks (LLM Evals) with governance policies.", bullet: { level: 0 } }),
            new Paragraph({ text: "• Transparency: Enable a public-facing \"AI Trust Center\" to showcase compliance.", bullet: { level: 0 } }),

            // 4. Proposed Solution
            new Paragraph({
                text: "4. Proposed Solution & Key Features",
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 200, after: 100 }
            }),
            new Paragraph({ text: "4.1. Core Governance Dashboard", heading: HeadingLevel.HEADING_3 }),
            new Paragraph({ text: "• Model Inventory: A catalog system to track model metadata, owners, and version history.", bullet: { level: 0 } }),
            new Paragraph({ text: "• Risk Management: A dynamic risk engine that allows users to identify, assess, and mitigate AI-specific risks (e.g., \"Hallucination Risk\", \"Data Privacy Risk\").", bullet: { level: 0 } }),
            new Paragraph({ text: "• Compliance Tracker: Interactive checklists and progress bars for complying with specific regulations like the EU AI Act.", bullet: { level: 0 } }),

            new Paragraph({ text: "4.2. Advanced AI Detection (Shadow AI)", heading: HeadingLevel.HEADING_3, spacing: { before: 100 } }),
            new Paragraph({ text: "• Code Repository Scanning: Automatically scans GitHub/GitLab repositories to detect hidden or undocumented AI model usage.", bullet: { level: 0 } }),
            new Paragraph({ text: "• AI-BOM (Bill of Materials): Generates a comprehensive inventory of all AI dependencies and assets found in the codebase.", bullet: { level: 0 } }),
            new Paragraph({ text: "• Dependency Graph: Visualizes relationships between models, data, and code.", bullet: { level: 0 } }),

            new Paragraph({ text: "4.3. Technical Evaluations (The \"Smart\" Layer)", heading: HeadingLevel.HEADING_3, spacing: { before: 100 } }),
            new Paragraph({ text: "• EvalServer: A dedicated Python-based microservice using FastAPI that runs technical evaluations on LLMs.", bullet: { level: 0 } }),
            new Paragraph({ text: "• LLM Benchmarking: Capabilities to run tests for toxicity, bias, and answer relevance using frameworks like DeepEval.", bullet: { level: 0 } }),

            new Paragraph({ text: "4.4. Transparency & Trust", heading: HeadingLevel.HEADING_3, spacing: { before: 100 } }),
            new Paragraph({ text: "• AI Trust Center: A publishable portal where organizations can share their AI safety certificates and policies with the public.", bullet: { level: 0 } }),
            new Paragraph({ text: "• WatchTower (Observability): A comprehensive event tracker that logs every user action and system event for full auditability and troubleshooting.", bullet: { level: 0 } }),
            new Paragraph({ text: "• Incident Management: A dedicated module to log and track AI-related incidents (e.g., a chatbot producing offensive output).", bullet: { level: 0 } }),

            new Paragraph({ text: "4.5. Enterprise Readiness", heading: HeadingLevel.HEADING_3, spacing: { before: 100 } }),
            new Paragraph({ text: "• RBAC (Role-Based Access Control): Granular permissions for Admins, Risk Officers, and Developers.", bullet: { level: 0 } }),
            new Paragraph({ text: "• Report Generation: Automated generation of audit-ready reports (PDF/DOCX).", bullet: { level: 0 } }),

            // 5. Methodology
            new Paragraph({
                text: "5. Methodology & Technology Stack",
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 200, after: 100 }
            }),
            new Paragraph({
                text: "The project follows a Microservices-inspired architecture to ensure scalability and separation of concerns between the governance logic and heavy-duty evaluation tasks."
            }),
            // Table
            new Table({
                rows: [
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph({ text: "Component", list: { level: 0 } })], width: { size: 20, type: WidthType.PERCENTAGE } }),
                            new TableCell({ children: [new Paragraph({ text: "Technology", list: { level: 0 } })], width: { size: 30, type: WidthType.PERCENTAGE } }),
                            new TableCell({ children: [new Paragraph({ text: "Description", list: { level: 0 } })], width: { size: 50, type: WidthType.PERCENTAGE } }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph("Frontend")] }),
                            new TableCell({ children: [new Paragraph({ text: "React.js (Vite)", style: "Strong" })] }), // bold attempt via style or TextRun better
                            new TableCell({ children: [new Paragraph("A responsive, Single Page Application (SPA) using Material UI for a professional enterprise look.")] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph("Backend API")] }),
                            new TableCell({ children: [new Paragraph("Node.js (Express)")] }),
                            new TableCell({ children: [new Paragraph("Handles business logic, CRUD operations, authentication, and governance workflows.")] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph("AI Engine")] }),
                            new TableCell({ children: [new Paragraph("Python (FastAPI)")] }),
                            new TableCell({ children: [new Paragraph("A dedicated service for running computationally intensive LLM evaluations/benchmarks.")] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph("Database")] }),
                            new TableCell({ children: [new Paragraph("PostgreSQL")] }),
                            new TableCell({ children: [new Paragraph("Relational database for structured data (users, policies, risks).")] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph("Caching/Queue")] }),
                            new TableCell({ children: [new Paragraph("Redis")] }),
                            new TableCell({ children: [new Paragraph("Used for task queues (eval jobs) and caching.")] }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({ children: [new Paragraph("DevOps")] }),
                            new TableCell({ children: [new Paragraph("Docker")] }),
                            new TableCell({ children: [new Paragraph("Containerization for consistent deployment across environments.")] }),
                        ],
                    }),
                ],
            }),

            // 6. Value Proposition
            new Paragraph({
                text: "6. Value Proposition (USP)",
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 200, after: 100 }
            }),
            new Paragraph({
                text: "Unlike standard governance tools that only handle paperwork, Aegis-AI bridges the gap between Governance (Policy) and Engineering (Evals). It doesn't just say a model should be safe; it runs the tests to prove it."
            }),

            // 7. Future Enhancements
            new Paragraph({
                text: "7. Future Enhancements",
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 200, after: 100 }
            }),
            new Paragraph({ text: "• Integration with MLOps platforms (MLFlow, WandB) for automatic model discovery.", bullet: { level: 0 } }),
            new Paragraph({ text: "• Real-time \"Guardrails\" proxy to block harmful prompts in transit.", bullet: { level: 0 } }),
            new Paragraph({ text: "• Blockchain-based audit logs for immutable compliance records.", bullet: { level: 0 } }),
        ],
    }]
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("../fyp_proposal.docx", buffer);
    console.log("Document created successfully");
});
