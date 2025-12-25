import React, { useState } from 'react';
import { Globe, Calendar, Send, Download, Sparkles, Clock, TrendingUp, MessageSquare, Target, Zap } from 'lucide-react';

const translations = {
  fr: {
    title: "Predict'IA",
    subtitle: "Prédiction d'Événements SMS",
    language: "Langue",
    campaignPeriod: "Période de Campagne",
    from: "Du",
    to: "au",
    brandName: "Nom de la Marque",
    brandPlaceholder: "Ex: Auchan",
    smsType: "Type de SMS",
    sector: "Secteur",
    operationType: "Type d'Opération",
    messageContent: "Contenu du Message",
    messagePlaceholder: "Entrez votre message de campagne ici...",
    previewWithLink: "Aperçu avec lien",
    includeHoliday: "Inclure les vacances",
    generateMessages: "Générer des Messages",
    generatedMessages: "Messages Générés",
    selectMessage: "Sélectionner",
    predictBestTimes: "Prédire les Meilleurs Horaires",
    aiPredictions: "Prédictions IA - Meilleurs Horaires d'Envoi",
    predictionSubtitle: "Basé sur les données historiques et les taux de conversion",
    selectTime: "Sélectionner cet horaire",
    campaignDetails: "Détails de la Campagne",
    message: "Message",
    date: "Date",
    time: "Heure",
    objective: "Objectif SMS",
    exportJSON: "Exporter en JSON",
    prospection: "Prospection",
    retention: "Rétention",
    notification: "Notification",
    retail: "Commerce de détail",
    finance: "Finance",
    healthcare: "Santé",
    tech: "Technologie",
    smsOnly: "SMS uniquement",
    smsLanding: "SMS + Landing page",
    smsEmail: "SMS + Email",
    viewDetails: "Voir les Détails",
    confidence: "Confiance",
    expectedCTR: "CTR attendu",
    deliverability: "Délivrabilité"
  },
  en: {
    title: "Predict'IA",
    subtitle: "SMS Event Prediction",
    language: "Language",
    campaignPeriod: "Campaign Period",
    from: "From",
    to: "to",
    brandName: "Brand Name",
    brandPlaceholder: "Ex: Auchan",
    smsType: "SMS Type",
    sector: "Sector",
    operationType: "Operation Type",
    messageContent: "Message Content",
    messagePlaceholder: "Enter your campaign message here...",
    previewWithLink: "Preview with link",
    includeHoliday: "Include holiday",
    generateMessages: "Generate Messages",
    generatedMessages: "Generated Messages",
    selectMessage: "Select",
    predictBestTimes: "Predict Best Times",
    aiPredictions: "AI Predictions - Best Sending Times",
    predictionSubtitle: "Based on historical data and conversion rates",
    selectTime: "Select this time",
    campaignDetails: "Campaign Details",
    message: "Message",
    date: "Date",
    time: "Time",
    objective: "SMS Objective",
    exportJSON: "Export as JSON",
    prospection: "Prospection",
    retention: "Retention",
    notification: "Notification",
    retail: "Retail",
    finance: "Finance",
    healthcare: "Healthcare",
    tech: "Technology",
    smsOnly: "SMS only",
    smsLanding: "SMS + Landing page",
    smsEmail: "SMS + Email",
    viewDetails: "View Details",
    confidence: "Confidence",
    expectedCTR: "Expected CTR",
    deliverability: "Deliverability"
  }
};

export default function PredictIAEventPrediction() {
  const [language, setLanguage] = useState('fr');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    brandName: '',
    smsType: 'smsLanding',
    sector: 'retail',
    operationType: 'prospection',
    message: '',
    previewWithLink: false,
    includeHoliday: false
  });
  const [selectedMessage, setSelectedMessage] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const t = translations[language];

  const generatedMessages = [
    {
      id: 1,
      text: `🎉 ${formData.brandName || 'Marque'}: Profitez de -30% sur tout le magasin! Offre valable jusqu'au ${formData.endDate || 'XX/XX'}. Cliquez ici: bit.ly/promo2024`,
      score: 95
    },
    {
      id: 2,
      text: `✨ Offre exclusive ${formData.brandName || 'Marque'}! Réductions jusqu'à -30% ce weekend. Ne manquez pas cette occasion! Détails: bit.ly/weekend`,
      score: 92
    },
    {
      id: 3,
      text: `💥 FLASH SALE ${formData.brandName || 'Marque'}: -30% sur une sélection de produits. Valable jusqu'au ${formData.endDate || 'XX/XX'}. Voir l'offre: bit.ly/flash`,
      score: 89
    }
  ];

  const predictedTimeSlots = [
    { date: '2024-12-28', time: '10:00', confidence: 96, ctr: 8.5, deliverability: 98 },
    { date: '2024-12-28', time: '14:00', confidence: 94, ctr: 8.2, deliverability: 97 },
    { date: '2024-12-29', time: '09:00', confidence: 93, ctr: 8.0, deliverability: 98 },
    { date: '2024-12-29', time: '16:00', confidence: 91, ctr: 7.8, deliverability: 96 },
    { date: '2024-12-30', time: '11:00', confidence: 90, ctr: 7.6, deliverability: 97 },
    { date: '2024-12-30', time: '15:00', confidence: 88, ctr: 7.4, deliverability: 96 }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerateMessages = () => {
    if (formData.brandName && formData.message) {
      setStep(2);
    }
  };

  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
    setStep(3);
  };

  const handleSelectTimeSlot = (slot) => {
    setSelectedTimeSlot(slot);
    setStep(4);
  };

  const exportToJSON = () => {
    const campaignData = {
      brand: formData.brandName,
      period: { start: formData.startDate, end: formData.endDate },
      sector: formData.sector,
      operationType: formData.operationType,
      smsType: formData.smsType,
      message: selectedMessage.text,
      scheduledTime: selectedTimeSlot,
      predictions: {
        confidence: selectedTimeSlot.confidence,
        expectedCTR: selectedTimeSlot.ctr,
        deliverability: selectedTimeSlot.deliverability
      }
    };
    
    const blob = new Blob([JSON.stringify(campaignData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `campaign-${formData.brandName}-${Date.now()}.json`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-md border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-3 rounded-xl shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {t.title}
                </h1>
                <p className="text-sm text-slate-600">{t.subtitle}</p>
              </div>
            </div>
            
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg cursor-pointer border-0"
            >
              <option value="fr">🇫🇷 Français</option>
              <option value="en">🇬🇧 English</option>
            </select>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Step 1: Input Form */}
        {step >= 1 && (
          <div className="bg-white rounded-2xl shadow-xl border border-purple-100 p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-100 p-2 rounded-lg">
                <MessageSquare className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Configuration de Campagne</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Campaign Period */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  {t.campaignPeriod}
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">{t.from}</label>
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => handleInputChange('startDate', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">{t.to}</label>
                    <input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => handleInputChange('endDate', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Brand Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">{t.brandName}</label>
                <input
                  type="text"
                  value={formData.brandName}
                  onChange={(e) => handleInputChange('brandName', e.target.value)}
                  placeholder={t.brandPlaceholder}
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              {/* SMS Type */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">{t.smsType}</label>
                <select
                  value={formData.smsType}
                  onChange={(e) => handleInputChange('smsType', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
                  <option value="smsOnly">{t.smsOnly}</option>
                  <option value="smsLanding">{t.smsLanding}</option>
                  <option value="smsEmail">{t.smsEmail}</option>
                </select>
              </div>

              {/* Sector */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">{t.sector}</label>
                <select
                  value={formData.sector}
                  onChange={(e) => handleInputChange('sector', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
                  <option value="retail">{t.retail}</option>
                  <option value="finance">{t.finance}</option>
                  <option value="healthcare">{t.healthcare}</option>
                  <option value="tech">{t.tech}</option>
                </select>
              </div>

              {/* Operation Type */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">{t.operationType}</label>
                <select
                  value={formData.operationType}
                  onChange={(e) => handleInputChange('operationType', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
                  <option value="prospection">{t.prospection}</option>
                  <option value="retention">{t.retention}</option>
                  <option value="notification">{t.notification}</option>
                </select>
              </div>

              {/* Message Content */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">{t.messageContent}</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder={t.messagePlaceholder}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Preview Options */}
              <div className="md:col-span-2 flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.previewWithLink}
                    onChange={(e) => handleInputChange('previewWithLink', e.target.checked)}
                    className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                  />
                  <span className="text-sm font-medium text-slate-700">{t.previewWithLink}</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.includeHoliday}
                    onChange={(e) => handleInputChange('includeHoliday', e.target.checked)}
                    className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                  />
                  <span className="text-sm font-medium text-slate-700">{t.includeHoliday}</span>
                </label>
              </div>
            </div>

            <button
              onClick={handleGenerateMessages}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              <Sparkles className="w-5 h-5" />
              {t.generateMessages}
            </button>
          </div>
        )}

        {/* Step 2: Generated Messages */}
        {step >= 2 && (
          <div className="bg-white rounded-2xl shadow-xl border border-purple-100 p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">{t.generatedMessages}</h2>
            </div>

            <div className="grid gap-4">
              {generatedMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`p-6 border-2 rounded-xl transition-all cursor-pointer ${
                    selectedMessage.id === msg.id
                      ? 'border-purple-500 bg-purple-50 shadow-lg'
                      : 'border-slate-200 hover:border-purple-300 hover:shadow-md'
                  }`}
                  onClick={() => handleSelectMessage(msg)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <p className="text-slate-800 flex-1 leading-relaxed">{msg.text}</p>
                    <div className="ml-4 flex items-center gap-2">
                      <div className="text-right">
                        <div className="text-xs text-slate-500">Score IA</div>
                        <div className="text-lg font-bold text-purple-600">{msg.score}%</div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectMessage(msg);
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedMessage.id === msg.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-purple-100'
                    }`}
                  >
                    {t.selectMessage}
                  </button>
                </div>
              ))}
            </div>

            {selectedMessage && (
              <button
                onClick={() => setStep(3)}
                className="w-full mt-6 flex items-center justify-center gap-3 px-6 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg"
              >
                <Clock className="w-5 h-5" />
                {t.predictBestTimes}
              </button>
            )}
          </div>
        )}

        {/* Step 3: AI Predictions */}
        {step >= 3 && (
          <div className="bg-white rounded-2xl shadow-xl border border-purple-100 p-8 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">{t.aiPredictions}</h2>
            </div>
            <p className="text-slate-600 mb-6 ml-14">{t.predictionSubtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {predictedTimeSlots.map((slot, index) => (
                <div
                  key={index}
                  className={`p-6 border-2 rounded-xl transition-all cursor-pointer ${
                    selectedTimeSlot === slot
                      ? 'border-indigo-500 bg-indigo-50 shadow-lg'
                      : 'border-slate-200 hover:border-indigo-300 hover:shadow-md'
                  }`}
                  onClick={() => handleSelectTimeSlot(slot)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-lg font-bold text-slate-800">{slot.date}</div>
                      <div className="text-2xl font-bold text-indigo-600">{slot.time}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500">{t.confidence}</div>
                      <div className="text-xl font-bold text-green-600">{slot.confidence}%</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">{t.expectedCTR}:</span>
                      <span className="font-semibold text-slate-800">{slot.ctr}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">{t.deliverability}:</span>
                      <span className="font-semibold text-slate-800">{slot.deliverability}%</span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectTimeSlot(slot);
                    }}
                    className={`w-full px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedTimeSlot === slot
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-indigo-100'
                    }`}
                  >
                    {t.selectTime}
                  </button>
                </div>
              ))}
            </div>

            {selectedTimeSlot && (
              <button
                onClick={() => setStep(4)}
                className="w-full mt-6 flex items-center justify-center gap-3 px-6 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg"
              >
                <Target className="w-5 h-5" />
                {t.viewDetails}
              </button>
            )}
          </div>
        )}

        {/* Step 4: Campaign Details */}
        {step >= 4 && selectedTimeSlot && (
          <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-xl border-2 border-purple-200 p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Send className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">{t.campaignDetails}</h2>
              </div>
              <button
                onClick={exportToJSON}
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg"
              >
                <Download className="w-4 h-4" />
                {t.exportJSON}
              </button>
            </div>

            <div className="grid gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-purple-100">
                <label className="text-sm font-semibold text-slate-600 mb-2 block">{t.message}</label>
                <p className="text-lg text-slate-800 leading-relaxed">{selectedMessage.text}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md border border-purple-100">
                  <label className="text-sm font-semibold text-slate-600 mb-2 block">{t.brandName}</label>
                  <p className="text-2xl font-bold text-purple-600">{formData.brandName}</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-purple-100">
                  <label className="text-sm font-semibold text-slate-600 mb-2 block">{t.campaignPeriod}</label>
                  <p className="text-lg font-bold text-slate-800">{formData.startDate} → {formData.endDate}</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-purple-100">
                  <label className="text-sm font-semibold text-slate-600 mb-2 block">{t.date} & {t.time}</label>
                  <p className="text-xl font-bold text-indigo-600">{selectedTimeSlot.date} à {selectedTimeSlot.time}</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-purple-100">
                  <label className="text-sm font-semibold text-slate-600 mb-2 block">{t.sector}</label>
                  <p className="text-lg font-bold text-slate-800 capitalize">{t[formData.sector]}</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-purple-100">
                  <label className="text-sm font-semibold text-slate-600 mb-2 block">{t.operationType}</label>
                  <p className="text-lg font-bold text-slate-800 capitalize">{t[formData.operationType]}</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-purple-100">
                  <label className="text-sm font-semibold text-slate-600 mb-2 block">{t.objective}</label>
                  <p className="text-lg font-bold text-slate-800">{t.smsLanding}</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 shadow-md border-2 border-green-200">
                <h3 className="font-semibold text-slate-700 mb-4 text-lg">Métriques Prédites</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">{selectedTimeSlot.confidence}%</div>
                    <div className="text-sm text-slate-600 mt-1">{t.confidence}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{selectedTimeSlot.ctr}%</div>
                    <div className="text-sm text-slate-600 mt-1">{t.expectedCTR}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">{selectedTimeSlot.deliverability}%</div>
                    <div className="text-sm text-slate-600 mt-1">{t.deliverability}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}