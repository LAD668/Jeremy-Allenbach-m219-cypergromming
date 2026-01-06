import React, { useState } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    privacy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns so schnell wie möglich bei Ihnen melden. Für Notfälle rufen Sie bitte 110 an.');
    setFormData({ name: '', email: '', subject: '', message: '', privacy: false });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <PageLayout>
      <section className="bg-gradient-to-r from-[#1D4ED8] to-[#2563eb] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
          <p className="text-xl text-blue-100">Wir sind hier, um zu helfen und Ihre Fragen zu beantworten</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Kontakt aufnehmen</h2>
              <p className="text-gray-700 mb-6">
                Haben Sie Fragen zu Cyber-Grooming, benötigen Sie Ressourcen für Ihre Schule oder möchten Sie eine Sorge melden?
                Wir sind hier, um zu helfen.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-[#1D4ED8]">@</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">E-Mail</h3>
                    <p className="text-gray-600">info@cyberschutz.org</p>
                    <p className="text-gray-600">support@cyberschutz.org</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-[#1D4ED8]">T</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Telefon</h3>
                    <p className="text-gray-600">Allgemeine Anfragen: +49 (0) 123 456 789</p>
                    <p className="text-gray-600">Notfall: 110</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-[#1D4ED8]">A</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Adresse</h3>
                    <p className="text-gray-600">Cyber-Schutz Initiative</p>
                    <p className="text-gray-600">Musterstrasse 123</p>
                    <p className="text-gray-600">12345 Musterstadt</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <h2 className="text-2xl font-bold mb-6">Nachricht senden</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#1D4ED8] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-semibold mb-2">E-Mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#1D4ED8] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block font-semibold mb-2">Betreff *</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#1D4ED8] focus:outline-none"
                  >
                    <option value="">Betreff auswählen...</option>
                    <option value="general">Allgemeine Anfrage</option>
                    <option value="resources">Ressourcen anfordern</option>
                    <option value="report">Sorge melden</option>
                    <option value="school">Schule/Organisation Anfrage</option>
                    <option value="support">Unterstützung benötigt</option>
                    <option value="other">Sonstiges</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block font-semibold mb-2">Nachricht *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#1D4ED8] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      name="privacy"
                      required
                      checked={formData.privacy}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <span className="text-sm text-gray-600">
                      Ich stimme der Datenschutzerklärung zu und verstehe, dass dieses Formular nur für allgemeine Anfragen gedacht ist.
                      Für Notfälle rufen Sie bitte 110 an.
                    </span>
                  </label>
                </div>
                <Button type="submit" variant="primary" fullWidth>
                  Nachricht senden
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
