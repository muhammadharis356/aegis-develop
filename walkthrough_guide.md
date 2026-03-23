# Aegis-AI (FYP Showcase) - Walkthrough Guide

This guide is designed to help you demonstrate the key features of Aegis-AI during your Final Year Project presentation.

## Prerequisites
- ensure docker is running: `docker-compose up -d`
- open browser to `http://localhost:5173` (Frontend)
- have the `admin` credentials ready (created on first launch).

## 1. Introduction & Authentication
**Goal:** Show secure access and role management.

1.  **Landing/Login Page**: Start at the login screen.
    *   *Script*: "Aegis-AI starts with a secure authentication layer."
2.  **Registration (if new demo)**: Briefly show the sign-up form.
    *   *Action*: Register a new user (or log in as Admin).
3.  **Dashboard Access**: Successful login redirects to the main Dashboard.
    *   *Script*: "Upon login, we are greeted by the main Executive Dashboard."

## 2. Dashboard & High-Level Overview
**Goal:** Show the "Single Pane of Glass" for AI Governance.

1.  **Widget Overview**: Point out key metrics:
    *   Compliance Score
    *   Active Models
    *   Risk Assessment Summaries
2.  **Navigation**: Quickly hover over the sidebar to show the breadth of features (Projects, Models, Vendors).

## 3. AI Model Inventory & Risk Management
**Goal:** Demonstrate how the system tracks and assesses AI assets.

1.  **Navigate to 'Model Inventory'**.
2.  **Add/View a Model**: Click on an existing model or 'Add Model'.
    *   *Script*: "Here we maintain a comprehensive inventory of all AI models in use."
3.  **Risk Assessment**: Show the 'Risks' tab for a model.
    *   *Action*: Highlight a specific risk (e.g., "Data Privacy").
    *   *Script*: "Each model is assessed against standard frameworks like the EU AI Act or NIST AI RMF."

## 4. LLM Evaluations (The "Cool" Factor)
**Goal:** Show technical depth and integration with actual AI models.

1.  **Navigate to 'LLM Evals'**.
2.  **Run an Evaluation**:
    *   Select a prompt/dataset.
    *   Run a test against a model (mocks might be used if costs are an issue, explain this).
    *   *Script*: "Aegis-AI doesn't just track paperwork; it actively evaluates model performance and safety."
3.  **View Results**: Show the scores/graphs.

## 5. AI Trust Center (Public View)
**Goal:** Show transparency.

1.  **Navigate to 'Trust Center'**.
2.  **Public Resources**: Show how external stakeholders view the organization's AI posture.
    *   *Script*: "This is the public-facing trust center, building confidence with our customers."

## 6. Closing
*   *Script*: "Aegis-AI provides an end-to-end solution for responsible AI adoption, covering everything from inventory to real-time technical evaluation."
