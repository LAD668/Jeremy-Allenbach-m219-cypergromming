import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { HelpHotline } from '../components/ui/HelpHotline';

export const Home: React.FC = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-[#FAF8F5] py-32 md:py-40">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] text-[#1A1A1A]">
              Cyber-Grooming erkennen.<br />
              Kinder und Jugendliche schützen.
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-[#6B6B6B] leading-relaxed max-w-3xl mx-auto">
              Eine interaktive Lernplattform zur Prävention, Aufklärung und Stärkung von Medienkompetenz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/learning-area">
                <Button 
                  variant="primary" 
                  size="large" 
                  className="text-lg px-10 py-5 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white rounded-full shadow-lg"
                >
                  Lernumgebung starten
                </Button>
              </Link>
              <Link to="/cyber-grooming">
                <Button 
                  variant="outline" 
                  size="large" 
                  className="text-lg px-10 py-5 border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white rounded-full"
                >
                  Mehr erfahren
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal / Curved Card Row */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {[
              { 
                title: 'Unsicherheit', 
                text: 'Verwirrung, Druck, falsches Vertrauen',
                gradient: 'from-gray-200 to-gray-300',
                offset: 'md:-mt-8'
              },
              { 
                title: 'Kontakt', 
                text: 'Freundlich wirkende Fremde im Netz',
                gradient: 'from-amber-200 to-amber-300',
                offset: 'md:-mt-4'
              },
              { 
                title: 'Warnzeichen', 
                text: 'Grenzen werden überschritten',
                gradient: 'from-orange-200 to-orange-300',
                offset: ''
              },
              { 
                title: 'Aufklärung', 
                text: 'Gefahren erkennen',
                gradient: 'from-teal-200 to-teal-300',
                offset: 'md:-mt-4'
              },
              { 
                title: 'Stärke', 
                text: 'Sicher handeln und Hilfe holen',
                gradient: 'from-blue-200 to-blue-300',
                offset: 'md:-mt-8'
              }
            ].map((card, index) => (
              <div 
                key={index} 
                className={`w-full sm:w-[45%] md:w-[18%] ${card.offset} transition-transform hover:scale-105`}
              >
                <Card className="overflow-hidden p-0 h-full shadow-lg hover:shadow-xl">
                  {/* Image Placeholder - Portrait Style */}
                  <div className={`h-64 bg-gradient-to-br ${card.gradient} flex items-center justify-center relative`}>
                    <div className="w-32 h-32 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-5xl font-bold text-white/80">{card.title.charAt(0)}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-8 bg-[#F5F1EB]">
                    <h3 className="text-xl font-bold mb-3 text-[#1A1A1A]">{card.title}</h3>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed">{card.text}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#1A1A1A] leading-tight">
              Alles, was du brauchst, um Cyber-Grooming zu erkennen und richtig zu handeln
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {[
              {
                title: 'Lernumgebung',
                description: 'Interaktive Quiz, Szenarien und Chat-Simulationen',
                link: '/learning-area',
                gradient: 'from-blue-100 to-blue-200',
                size: 'large'
              },
              {
                title: 'Warnzeichen erkennen',
                description: 'Frühwarnsystem für riskante Situationen',
                link: '/protection',
                gradient: 'from-orange-100 to-orange-200',
                size: 'large'
              },
              {
                title: 'Schutz und Prävention',
                description: 'Konkrete Handlungsempfehlungen',
                link: '/protection',
                gradient: 'from-teal-100 to-teal-200',
                size: 'large'
              },
              {
                title: 'Hilfe bekommen',
                description: 'Klare Schritte im Ernstfall',
                link: '/get-help',
                gradient: 'from-amber-100 to-amber-200',
                size: 'large'
              }
            ].map((item, index) => (
              <Link key={index} to={item.link}>
                <Card className="overflow-hidden p-0 h-full hover:shadow-2xl transition-all duration-300">
                  <div className={`h-80 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative`}>
                    <div className="w-40 h-40 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-6xl font-bold text-white/70">{item.title.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="p-10 bg-[#F5F1EB]">
                    <h3 className="text-3xl font-bold mb-4 text-[#1A1A1A]">{item.title}</h3>
                    <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">{item.description}</p>
                    <Button 
                      variant="primary" 
                      size="medium" 
                      className="w-full bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white rounded-full"
                    >
                      Jetzt starten
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-[#1A1A1A] leading-tight">
              Wissen schafft Sicherheit.
            </h2>
            <p className="text-xl md:text-2xl text-[#6B6B6B] mb-16 leading-relaxed">
              Diese Plattform hilft dabei, Cyber-Grooming zu verstehen, Gefahren frühzeitig zu erkennen und Betroffene zu stärken.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: '10+', label: 'Warnzeichen erklärt' },
                { number: '4', label: 'Interaktive Lernmodule' },
                { number: '100%', label: 'Kostenlos und vertraulich' }
              ].map((stat, index) => (
                <Card key={index} className="text-center py-12 bg-[#F5F1EB] hover:shadow-lg transition-shadow">
                  <div className="text-6xl font-bold text-[#1A1A1A] mb-6">{stat.number}</div>
                  <div className="text-[#6B6B6B] text-lg">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Help Hotline Section */}
      <HelpHotline variant="full" />

      {/* Call-to-Action Section */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-[#1A1A1A]">
              Bereit, mehr zu lernen?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-[#6B6B6B] leading-relaxed">
              Starten Sie jetzt mit der interaktiven Lernumgebung und stärken Sie Ihre Medienkompetenz.
            </p>
            <Link to="/learning-area">
              <Button 
                variant="primary" 
                size="large" 
                className="text-lg px-10 py-5 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white rounded-full shadow-lg"
              >
                Lernumgebung starten
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
