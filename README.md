# 🎯 WellPack Prediction Event

> 🚀 *Event-aware campaign prediction tool for WellPack.*
> 🗕️ Integrates local & national events to optimize SMS / RCS marketing timing and messaging.
> ⚙️ Built with Python, data analysis, and API integration.

---

## 📖 Overview

**Prediction Event** is a module designed to enhance **WellPack’s existing campaign prediction tool**.
It leverages real-world event data (local and national) to improve predictions for **SMS and RCS marketing campaigns**, helping marketers choose the **best time and message** to engage users.

For example:

* ⚽ During a major football match, a fast-food campaign may perform **better**.
* 🏡 A real-estate campaign sent right before the same event might be **ignored**.
  This module automatically accounts for such event-based effects.

---

## 🎯 Goals

* ✅ Integrate real-world event data into the campaign prediction engine.
* ✅ Detect events occurring on proposed campaign dates (local or national).
* ✅ Evaluate each event’s potential **impact by sector**.
* ✅ Recommend **optimal send times** and **messaging windows** based on context.
* ✅ Deliver clean, documented, and integrable Python code.

---

## ⚙️ Specifications

**Inputs:**

* Proposed campaign dates
* Geographic area
* Campaign message & sector

**Process:**

1. Fetch events from public APIs (Google Events, Eventbrite, etc.).
2. Match event categories (sports, culture, politics…) to relevant sectors.
3. Adjust campaign timing predictions accordingly.

**Outputs:**

* 🗕️ Suggested send time
* 🗓️ List of relevant nearby events
* 📊 Event impact score
* 💬 Recommendation summary

**Tech Stack:**
`Python`, `Pandas`, `Requests`, `scikit-learn`, `Jupyter`, `API integrations`

---

## 🧠 Methodology

1. **Data Integration**
   Merge WellPack’s historical campaign dataset (~30k rows) with live event data.

2. **Event Impact Analysis**
   Define scoring rules per event type (e.g., “sports = +fast food / –finance”).

3. **Model Adaptation**
   Adjust timing predictions based on detected event overlaps.

4. **Evaluation**
   Test against past campaigns and measure engagement uplift.

---

## 🧉 Repository Structure

```
prediction-event/
│
├── README.md
├── requirements.txt
├── .gitignore
├── LICENSE
│
├── data/
│   ├── sample_data.csv
│   └── event_samples.json
│
├── notebooks/
│   └── exploration.ipynb
│
├── src/
│   ├── main.py
│   ├── event_api.py
│   ├── preprocess.py
│   ├── prediction_model.py
│   ├── impact_analysis.py
│   └── utils.py
│
├── tests/
│   ├── test_event_api.py
│   └── test_prediction_model.py
│
└── docs/
    ├── technical_documentation.md
    ├── integration_guide.md
    └── architecture_diagram.png
```

---

## 🧪 Installation & Usage

```bash
# Clone the repo
git clone https://github.com/wellpack/wellpack-prediction-event.git
cd wellpack-prediction-event

# Install dependencies
pip install -r requirements.txt
```

```bash
# Run the module
python src/main.py
```

Or open `examples/example_usage.ipynb` for a Jupyter Notebook demo.

---

## 🧯 Example Output

```
🗕️ Proposed campaign: 2025-11-12
📍 Location: Paris
🏷️ Sector: Fast Food

✅ Detected Events:
- UEFA Champions League Match (20:45 CET)
- Local Food Festival (12:00 CET)

📊 Recommendation:
Best send window: 18:30–19:30 CET  
Reason: Audience engagement high before sports events.
```

---

## 🗖️ Project Milestones

| Phase                         | Description                      | Duration |
| ----------------------------- | -------------------------------- | -------- |
| **1. Setup & Review**         | Explore dataset & existing tool  | Week 1–2 |
| **2. Event Data Integration** | Connect APIs & clean data        | Week 3–4 |
| **3. Impact Analysis**        | Link events to campaign outcomes | Week 5–6 |
| **4. Testing & Delivery**     | Validate & document              | Week 7   |

---

## 👥 Team

**Company:** [WellPack](https://www.wellpack.fr)
**Project Manager:** Meddy Neboud – [meddy.neboud@wellpack.fr](mailto:meddy.neboud@wellpack.fr)
**Team:** Data & AI Group (2025)

---

## 🌟 Acknowledgements

Special thanks to the WellPack team for their expertise in digital marketing, data collection, and RCS innovation.

---

### 💬 “Turning events into insights — and insights into smarter campaigns.”
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> 8427313 (Initial Commit)
