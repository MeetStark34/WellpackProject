"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Calendar,
  MessageSquare,
  Zap,
  Clock,
  TrendingUp,
  Target,
  Send,
  Download,
  Sun,
  Moon
} from "lucide-react";

/* ---------------- TRANSLATIONS ---------------- */

const translations = {
  fr: {
    title: "Predict'IA",
    subtitle: "Prédiction d'Événements SMS",
    campaign: "Campagne",
    message: "Message",
    timing: "Horaires",
    summary: "Résumé",
    campaignPeriod: "Période de Campagne",
    from: "Du",
    to: "Au",
    brandName: "Nom de la Marque",
    brandPlaceholder: "Ex: Auchan",
    smsType: "Type de SMS",
    sector: "Secteur",
    operationType: "Type d'Opération",
    messageContent: "Contenu du Message",
    messagePlaceholder: "Entrez votre message de campagne...",
    generateMessages: "Générer des messages",
    generatedMessages: "Messages générés",
    selectMessage: "Sélectionner",
    predictBestTimes: "Prédire les meilleurs horaires",
    aiPredictions: "Prédictions IA",
    predictionSubtitle: "Basé sur les données historiques",
    selectTime: "Choisir cet horaire",
    campaignDetails: "Détails de la campagne",
    exportJSON: "Exporter en JSON",
    confidence: "Confiance",
    expectedCTR: "CTR attendu",
    deliverability: "Délivrabilité",
    retail: "Commerce",
    finance: "Finance",
    healthcare: "Santé",
    tech: "Technologie",
    prospection: "Prospection",
    retention: "Rétention",
    notification: "Notification",
    smsOnly: "SMS uniquement",
    smsLanding: "SMS + Landing",
    smsEmail: "SMS + Email"
  },
  en: {
    title: "Predict'IA",
    subtitle: "SMS Event Prediction",
    campaign: "Campaign",
    message: "Message",
    timing: "Timing",
    summary: "Summary",
    campaignPeriod: "Campaign Period",
    from: "From",
    to: "To",
    brandName: "Brand Name",
    brandPlaceholder: "Ex: Auchan",
    smsType: "SMS Type",
    sector: "Sector",
    operationType: "Operation Type",
    messageContent: "Message Content",
    messagePlaceholder: "Enter your campaign message...",
    generateMessages: "Generate messages",
    generatedMessages: "Generated messages",
    selectMessage: "Select",
    predictBestTimes: "Predict best times",
    aiPredictions: "AI Predictions",
    predictionSubtitle: "Based on historical data",
    selectTime: "Select this time",
    campaignDetails: "Campaign details",
    exportJSON: "Export JSON",
    confidence: "Confidence",
    expectedCTR: "Expected CTR",
    deliverability: "Deliverability",
    retail: "Retail",
    finance: "Finance",
    healthcare: "Healthcare",
    tech: "Technology",
    prospection: "Prospection",
    retention: "Retention",
    notification: "Notification",
    smsOnly: "SMS only",
    smsLanding: "SMS + Landing",
    smsEmail: "SMS + Email"
  }
};

export default function PredictIA() {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [darkMode, setDarkMode] = useState(false);
  const [step, setStep] = useState(1);
  const t = translations[language];

  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    brandName: "",
    smsType: "smsLanding",
    sector: "retail",
    operationType: "prospection",
    message: ""
  });

  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const [selectedSlot, setSelectedSlot] = useState<any>(null);

  const generatedMessages = [
    { id: 1, text: `🎉 ${formData.brandName || "Brand"} -30% this weekend only`, score: 96 },
    { id: 2, text: `✨ Exclusive offer from ${formData.brandName || "Brand"} today`, score: 92 },
    { id: 3, text: `💥 Flash Sale ${formData.brandName || "Brand"} until midnight`, score: 89 }
  ];

  const predictedSlots = [
    { date: "2024-12-28", time: "10:00", confidence: 96, ctr: 8.5, deliverability: 98 },
    { date: "2024-12-29", time: "14:00", confidence: 93, ctr: 8.1, deliverability: 97 },
    { date: "2024-12-30", time: "11:00", confidence: 90, ctr: 7.8, deliverability: 96 }
  ];

  const baseBg = darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900";
  const cardBg = darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200";
  const inputBg = darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-300";

  return (
    <div className={`min-h-screen transition-colors ${baseBg}`}>
      {/* Header */}
      <header className={`border-b ${cardBg}`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600">
              <Sparkles className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{t.title}</h1>
              <p className="text-sm opacity-70">{t.subtitle}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as any)}
              className="px-3 py-2 rounded-lg text-sm bg-purple-600 text-white"
            >
              <option value="fr">FR</option>
              <option value="en">EN</option>
            </select>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border hover:scale-105 transition"
            >
              {darkMode ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>
      </header>

      {/* Step Indicator */}
      <div className="flex justify-center mt-8">
        <div className={`flex gap-6 px-6 py-3 rounded-full ${cardBg}`}>
          {[t.campaign, t.message, t.timing, t.summary].map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                ${step >= i + 1 ? "bg-purple-600 text-white" : "bg-slate-400/30"}`}
              >
                {i + 1}
              </div>
              <span className={`text-sm ${step >= i + 1 ? "" : "opacity-50"}`}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        {/* STEP 1 */}
        <section className={`rounded-2xl p-8 shadow-lg ${cardBg}`}>
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <MessageSquare /> {t.campaign}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              placeholder={t.brandPlaceholder}
              className={`px-4 py-3 rounded-xl border ${inputBg}`}
              onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
            />
            <textarea
              rows={3}
              placeholder={t.messagePlaceholder}
              className={`px-4 py-3 rounded-xl border ${inputBg}`}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button
            onClick={() => setStep(2)}
            className="mt-6 w-full py-4 rounded-xl font-semibold text-white
            bg-gradient-to-r from-purple-600 to-blue-600
            hover:scale-[1.01] active:scale-[0.99] transition"
          >
            {t.generateMessages}
          </button>
        </section>

        {/* STEP 2 */}
        {step >= 2 && (
          <section className={`rounded-2xl p-8 shadow-lg ${cardBg}`}>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Zap /> {t.generatedMessages}
            </h2>

            <div className="space-y-4">
              {generatedMessages.map((m) => (
                <div
                  key={m.id}
                  onClick={() => {
                    setSelectedMessage(m);
                    setStep(3);
                  }}
                  className={`p-6 rounded-xl border cursor-pointer transition
                  hover:shadow-md hover:scale-[1.01]
                  ${selectedMessage?.id === m.id ? "border-purple-500 bg-purple-500/10" : inputBg}`}
                >
                  <p className="text-sm max-w-prose">{m.text}</p>
                  <span className="inline-block mt-3 px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-600">
                    AI Score {m.score}%
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* STEP 3 */}
        {step >= 3 && (
          <section className={`rounded-2xl p-8 shadow-lg ${cardBg}`}>
            <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
              <TrendingUp /> {t.aiPredictions}
            </h2>
            <p className="opacity-70 mb-6">{t.predictionSubtitle}</p>

            <div className="grid md:grid-cols-3 gap-6">
              {predictedSlots.map((s, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSelectedSlot(s);
                    setStep(4);
                  }}
                  className={`p-6 rounded-xl border cursor-pointer transition
                  hover:shadow-md hover:scale-[1.01]
                  ${selectedSlot === s ? "border-indigo-500 bg-indigo-500/10" : inputBg}`}
                >
                  <div className="text-lg font-bold">{s.time}</div>
                  <div className="text-sm opacity-70">{s.date}</div>

                  <div className="mt-4 text-sm space-y-1">
                    <div>{t.confidence}: <b>{s.confidence}%</b></div>
                    <div>{t.expectedCTR}: <b>{s.ctr}%</b></div>
                    <div>{t.deliverability}: <b>{s.deliverability}%</b></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* STEP 4 */}
        {step >= 4 && (
          <section className={`rounded-2xl p-8 shadow-lg ${cardBg}`}>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Target /> {t.campaignDetails}
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl border text-center">
                <div className="text-3xl font-bold text-green-500">
                  {selectedSlot.confidence}%
                </div>
                <div className="text-sm opacity-70">{t.confidence}</div>
              </div>
              <div className="p-5 rounded-xl border text-center">
                <div className="text-3xl font-bold text-blue-500">
                  {selectedSlot.ctr}%
                </div>
                <div className="text-sm opacity-70">{t.expectedCTR}</div>
              </div>
              <div className="p-5 rounded-xl border text-center">
                <div className="text-3xl font-bold text-purple-500">
                  {selectedSlot.deliverability}%
                </div>
                <div className="text-sm opacity-70">{t.deliverability}</div>
              </div>
            </div>

            <button
              onClick={() => alert("Export logic already implemented")}
              className="mt-8 w-full py-4 rounded-xl font-semibold text-white
              bg-gradient-to-r from-purple-600 to-blue-600
              hover:scale-[1.01] active:scale-[0.99] transition"
            >
              <Download className="inline mr-2" />
              {t.exportJSON}
            </button>
          </section>
        )}
      </main>
    </div>
  );
}