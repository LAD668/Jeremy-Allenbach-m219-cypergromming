import React from 'react';
import { Card } from './Card';

interface Hotline {
  name: string;
  phone: string;
  description: string;
  hours?: string;
  link?: string;
  email?: string;
  chatLink?: string;
}

interface HelpHotlineProps {
  variant?: 'full' | 'compact';
}

const hotlines: Hotline[] = [
  {
    name: 'Pro Juventute - Beratung + Hilfe 147',
    phone: '147',
    description: 'Kostenlose, anonyme Beratung fuer Kinder und Jugendliche rund um die Uhr. Unterstützung bei Cyber-Mobbing, digitaler Gewalt und Cyber-Grooming.',
    hours: '24/7 verfuegbar',
    link: 'https://www.projuventute.ch/de/beratung-hilfe-147',
    chatLink: 'https://www.147.ch/'
  },
  {
    name: 'Kinderschutz Schweiz - Clickandstop',
    phone: '0800 117 117',
    description: 'Nationale Meldestelle fuer paedokriminelle Inhalte. Anonyme Meldung und umfassende Beratungsangebote.',
    hours: 'Mo-Fr, 09:00-17:00',
    link: 'https://www.clickandstop.ch/',
    email: 'info@clickandstop.ch'
  },
  {
    name: '#NetzCourage - Fachstelle gegen Digitale Gewalt',
    phone: '044 586 86 86',
    description: 'Fachstelle gegen digitale Gewalt. Unterstützung fuer Betroffene von Cyber-Grooming und anderen Formen digitaler Gewalt.',
    hours: 'Mo-Fr, 09:00-17:00',
    link: 'https://netzcourage.ch/',
    email: 'info@netzcourage.ch'
  }
];

export const HelpHotline: React.FC<HelpHotlineProps> = ({ variant = 'full' }) => {
  if (variant === 'compact') {
    return (
      <div className="bg-[#F5F1EB] rounded-3xl p-6">
        <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">Hilfe-Telefon Schweiz</h3>
        <div className="space-y-3">
          {hotlines.slice(0, 1).map((hotline) => (
            <div key={hotline.phone} className="bg-white rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold text-[#1A1A1A]">{hotline.phone}</span>
                <span className="text-sm text-[#6B6B6B]">{hotline.name}</span>
              </div>
              <p className="text-sm text-[#6B6B6B]">{hotline.description}</p>
              {hotline.hours && (
                <p className="text-xs text-[#6B6B6B] mt-2">Oeffnungszeiten: {hotline.hours}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1A1A1A] text-center">
            Hilfe-Telefon Schweiz
          </h2>
          <p className="text-lg text-[#6B6B6B] text-center mb-10 leading-relaxed">
            Kostenlose und vertrauliche Unterstützung fuer Betroffene von Cyber-Grooming und deren Angehoerige.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotlines.map((hotline) => (
              <Card key={hotline.phone} className="bg-white hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">📞</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#1A1A1A] text-center">{hotline.name}</h3>
                  <div className="text-center mb-4">
                    <a 
                      href={`tel:${hotline.phone.replace(/\s/g, '')}`}
                      className="text-3xl font-bold text-[#1A1A1A] hover:text-[#2A2A2A] transition-colors"
                    >
                      {hotline.phone}
                    </a>
                  </div>
                </div>
                
                <p className="text-[#6B6B6B] mb-4 leading-relaxed">{hotline.description}</p>
                
                {hotline.hours && (
                  <p className="text-sm text-[#6B6B6B] mb-4">
                    <span className="font-semibold">Oeffnungszeiten:</span> {hotline.hours}
                  </p>
                )}
                
                <div className="space-y-2 pt-4 border-t border-gray-200">
                  {hotline.link && (
                    <a
                      href={hotline.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-[#1A1A1A] hover:underline font-medium"
                    >
                      → Weitere Informationen
                    </a>
                  )}
                  {hotline.email && (
                    <a
                      href={`mailto:${hotline.email}`}
                      className="block text-sm text-[#1A1A1A] hover:underline font-medium"
                    >
                      → E-Mail senden
                    </a>
                  )}
                  {hotline.chatLink && (
                    <a
                      href={hotline.chatLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-[#1A1A1A] hover:underline font-medium"
                    >
                      → Online-Chat
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
