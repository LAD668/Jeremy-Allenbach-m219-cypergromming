import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { HelpHotline } from '../components/ui/HelpHotline';

export const GetHelp: React.FC = () => {
  return (
    <PageLayout>
      <section className="bg-gradient-to-r from-[#EF4444] to-[#dc2626] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
              <span className="text-3xl font-bold">!</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">In unmittelbarer Gefahr?</h1>
              <p className="text-xl">Rufen Sie sofort die Notdienste an.</p>
            </div>
          </div>
          <a href="tel:117">
            <Button variant="secondary" size="large" className="bg-white text-[#EF4444] hover:bg-gray-100">
              Jetzt 117 (Polizei) anrufen
            </Button>
          </a>
        </div>
      </section>

      {/* Swiss Help Hotlines Section */}
      <HelpHotline variant="full" />

      {/* Immediate Help Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#1A1A1A]">Soforthilfe-Ressourcen</h2>
            <p className="text-lg text-center text-[#6B6B6B] mb-10 leading-relaxed">
              Wenn Sie oder jemand, den Sie kennen, von Cyber-Grooming betroffen sind, gibt es sofortige Hilfe.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-t-4 border-[#EF4444] text-center bg-white hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-[#EF4444]">117</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1A1A1A]">Polizei (Notruf)</h3>
                <p className="text-[#6B6B6B] mb-4">
                  Rufen Sie sofort an, wenn Sie oder jemand anderes in unmittelbarer koerperlicher Gefahr sind.
                  Die Polizei kann sofort eingreifen und Schutz bieten.
                </p>
                <a href="tel:117" className="inline-block">
                  <Button variant="danger" size="small" className="w-full">
                    Jetzt anrufen
                  </Button>
                </a>
              </Card>
              
              <Card className="border-t-4 border-[#1D4ED8] text-center bg-white hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#1D4ED8]">147</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1A1A1A]">Pro Juventute - Beratung + Hilfe</h3>
                <p className="text-[#6B6B6B] mb-4">
                  Kostenlose, vertrauliche Unterstützung für Kinder und Jugendliche. 24/7 verfügbar.
                  Hier können Sie über alles sprechen, was Sie belastet.
                </p>
                <a href="tel:147" className="inline-block">
                  <Button variant="primary" size="small" className="w-full">
                    Jetzt anrufen
                  </Button>
                </a>
              </Card>
              
              <Card className="border-t-4 border-[#1D4ED8] text-center bg-white hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#1D4ED8]">M</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1A1A1A]">Cyberkriminalitaet melden</h3>
                <p className="text-lg font-bold text-[#1D4ED8] mb-2">Online melden</p>
                <p className="text-[#6B6B6B] mb-4">
                  Melden Sie Cyber-Grooming und Online-Ausbeutung den Behörden.
                  Sie können auch anonym melden.
                </p>
                <Button variant="primary" size="small" className="w-full">
                  Jetzt melden
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide - Expanded */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#1A1A1A]">Was jetzt zu tun ist</h2>
            <p className="text-lg text-center text-[#6B6B6B] mb-12 leading-relaxed">
              Eine detaillierte Schritt-für-Schritt-Anleitung, wenn Sie oder jemand, den Sie kennen, von Cyber-Grooming betroffen sind.
            </p>
            
            <div className="space-y-6">
              {[
                { 
                  step: 1, 
                  title: 'Kommunikation stoppen', 
                  desc: 'Stoppen Sie sofort alle Kommunikation mit der Person, die Sie groomt. Blockieren Sie sie auf allen Plattformen und Apps.',
                  details: 'Der erste und wichtigste Schritt ist, den Kontakt sofort zu beenden. Blockieren Sie die Person auf allen Plattformen, Apps und Geraeten. Loeschen Sie keine Nachrichten oder Beweise, aber stoppen Sie alle weitere Kommunikation. Wenn die Person versucht, über andere Wege Kontakt aufzunehmen, blockieren Sie auch diese.',
                  actions: [
                    'Person auf allen Plattformen blockieren',
                    'Privatsphaere-Einstellungen anpassen',
                    'Neue Kontaktanfragen ablehnen',
                    'Nicht auf weitere Nachrichten antworten'
                  ]
                },
                { 
                  step: 2, 
                  title: 'Beweise nicht loeschen', 
                  desc: 'Speichern Sie Screenshots, Nachrichten, Fotos und alle anderen Beweise. Dies ist wichtig für die Meldung und Hilfe.',
                  details: 'Beweise sind entscheidend, um Grooming zu melden und zu stoppen. Machen Sie Screenshots von allen Nachrichten, Profilen und Interaktionen. Speichern Sie diese an einem sicheren Ort, den nur Sie oder eine vertrauenswuerdige Person kennen. Beweise können auch bei der polizeilichen Ermittlung helfen.',
                  actions: [
                    'Screenshots von allen Nachrichten machen',
                    'Profilinformationen dokumentieren',
                    'Zeitstempel und Daten notieren',
                    'Beweise an einem sicheren Ort speichern'
                  ]
                },
                { 
                  step: 3, 
                  title: 'Jemandem vertrauen', 
                  desc: 'Sprechen Sie mit einem Elternteil, Erziehungsberechtigten, Lehrer, Berater oder einer anderen vertrauenswürdigen Person. Sie müssen das nicht alleine bewältigen.',
                  details: 'Sie müssen das nicht alleine durchstehen. Suchen Sie sich eine vertrauenswuerdige Person - einen Elternteil, Lehrer, Schulpsychologen oder einen Berater. Diese Person kann Ihnen helfen, die naechsten Schritte zu planen und Unterstützung zu finden. Erinnern Sie sich: Hilfe zu suchen ist ein Zeichen von Stärke.',
                  actions: [
                    'Eine vertrauenswuerdige Person auswaehlen',
                    'In einem ruhigen Moment sprechen',
                    'Alle Details erzaehlen, die Sie bereit sind zu teilen',
                    'Gemeinsam naechste Schritte planen'
                  ]
                },
                { 
                  step: 4, 
                  title: 'Melden', 
                  desc: 'Melden Sie das Verhalten der Plattform, auf der es passiert ist, und den örtlichen Behörden oder Cyberkriminalitäts-Einheiten.',
                  details: 'Melden Sie den Vorfall sowohl der Plattform als auch den Behörden. Plattformen können Accounts sperren und weitere Schaeden verhindern. Die Polizei kann strafrechtlich ermitteln. Sie können auch anonym melden, wenn Sie sich nicht sicher sind. Jede Meldung hilft, andere zu schützen.',
                  actions: [
                    'Vorfall bei der Plattform melden (z.B. Instagram, WhatsApp)',
                    'Bei der Polizei oder Cyberkriminalitätsstelle melden',
                    'Alle gesammelten Beweise mitbringen',
                    'Auch anonyme Meldungen sind moeglich'
                  ]
                },
                { 
                  step: 5, 
                  title: 'Unterstützung suchen', 
                  desc: 'Suchen Sie professionelle Beratung oder Unterstützungsdienste. Was passiert ist, ist nicht Ihre Schuld, und Hilfe ist verfügbar.',
                  details: 'Professionelle Beratung kann helfen, mit den emotionalen Auswirkungen umzugehen. Es gibt spezialisierte Beratungsstellen, die Erfahrung mit Cyber-Grooming haben. Diese können auch bei der Bewaeltigung von Schuldgefühlen, Angst oder Trauma helfen. Erholung ist moeglich.',
                  actions: [
                    'Beratungsstellen kontaktieren (siehe Hilfe-Telefon Schweiz)',
                    'Therapeutische Unterstützung in Anspruch nehmen',
                    'Selbsthilfegruppen finden',
                    'Geduld mit sich selbst haben'
                  ]
                }
              ].map((item) => (
                <Card key={item.step} className="bg-white hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-20 h-20 rounded-full bg-[#1D4ED8] text-white flex items-center justify-center text-3xl font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-[#1A1A1A]">{item.title}</h3>
                      <p className="text-lg text-[#6B6B6B] mb-4 leading-relaxed font-medium">{item.desc}</p>
                      <p className="text-base text-[#6B6B6B] mb-4 leading-relaxed">{item.details}</p>
                      <div className="bg-[#F5F1EB] rounded-2xl p-4 mt-4">
                        <p className="text-sm font-semibold text-[#1A1A1A] mb-2">Konkrete Schritte:</p>
                        <ul className="space-y-2">
                          {item.actions.map((action, index) => (
                            <li key={index} className="text-sm text-[#6B6B6B] flex items-start gap-2">
                              <span className="text-[#1D4ED8] mt-1 font-bold">→</span>
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What happens after reporting */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#1A1A1A]">Was passiert nach einer Meldung?</h2>
            <p className="text-lg text-center text-[#6B6B6B] mb-10 leading-relaxed">
              Viele Menschen haben Angst vor dem Melden, weil sie nicht wissen, was danach passiert. Hier ist, was Sie erwarten können.
            </p>
            
            <div className="space-y-6">
              <Card className="bg-[#F5F1EB]">
                <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">Bei der Plattform melden</h3>
                <p className="text-[#6B6B6B] mb-4 leading-relaxed">
                  Wenn Sie einen Vorfall bei einer Plattform (z.B. Instagram, WhatsApp, TikTok) melden:
                </p>
                <ul className="space-y-2 text-[#6B6B6B]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1D4ED8] font-bold mt-1">•</span>
                    <span>Die Plattform prueft die Meldung (meist innerhalb von 24-48 Stunden)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1D4ED8] font-bold mt-1">•</span>
                    <span>Bei Verstoessen wird der Account gesperrt oder geloescht</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1D4ED8] font-bold mt-1">•</span>
                    <span>Sie erhalten eine Bestaetigung der Meldung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1D4ED8] font-bold mt-1">•</span>
                    <span>Die Person kann Sie nicht mehr kontaktieren</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-[#F5F1EB]">
                <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">Bei der Polizei melden</h3>
                <p className="text-[#6B6B6B] mb-4 leading-relaxed">
                  Wenn Sie einen Vorfall bei der Polizei melden:
                </p>
                <ul className="space-y-2 text-[#6B6B6B]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1D4ED8] font-bold mt-1">•</span>
                    <span>Sie machen eine Aussage und geben Beweise ab</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1D4ED8] font-bold mt-1">•</span>
                    <span>Die Polizei eroeffnet eine Ermittlung (wenn ein Straftatbestand vorliegt)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1D4ED8] font-bold mt-1">•</span>
                    <span>Sie werden über den Fortgang informiert</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1D4ED8] font-bold mt-1">•</span>
                    <span>Bei Bedarf erhalten Sie Schutzmassnahmen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1D4ED8] font-bold mt-1">•</span>
                    <span>Der Prozess kann einige Zeit dauern, aber Sie sind nicht allein</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-blue-50 border-2 border-blue-200">
                <h3 className="text-xl font-bold mb-4 text-blue-800">Wichtige Informationen</h3>
                <ul className="space-y-2 text-[#6B6B6B]">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span>Sie können auch anonym melden, wenn Sie sich nicht sicher sind</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span>Meldungen helfen, andere zu schützen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span>Sie haben nichts falsch gemacht - der Täter ist schuld</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span>Beratungsstellen können Sie durch den Prozess begleiten</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Important Reminders */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white">
              <h2 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Wichtige Erinnerungen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Sie sind nicht schuld an dem, was passiert ist',
                  'Es ist nie zu spaet, Hilfe zu bekommen',
                  'Sie müssen das nicht alleine bewältigen',
                  'Meldungen helfen, andere zu schützen',
                  'Erholung ist mit Unterstützung moeglich',
                  'Hilfe zu suchen ist ein Zeichen von Stärke',
                  'Sie haben das Recht auf Schutz und Unterstützung',
                  'Professionelle Hilfe ist verfügbar und effektiv',
                  'Jeder Fall ist wichtig und sollte gemeldet werden',
                  'Sie sind nicht allein - viele Menschen haben ähnliche Erfahrungen gemacht'
                ].map((reminder, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-[#F5F1EB] rounded-2xl">
                    <span className="text-[#1D4ED8] font-bold text-xl">✓</span>
                    <span className="text-[#6B6B6B]">{reminder}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-[#1D4ED8] bg-gradient-to-r from-blue-50 to-white">
              <h2 className="text-2xl font-bold mb-4 text-[#1D4ED8]">Niemand ist schuld, der Hilfe sucht</h2>
              <p className="text-lg text-[#6B6B6B] mb-4 leading-relaxed">
                Wenn Sie oder jemand, den Sie kennen, Opfer von Cyber-Grooming geworden sind, ist es wichtig zu wissen:
                Sie haben nichts falsch gemacht. Das Problem liegt beim Taeter, nicht beim Opfer.
              </p>
              <p className="text-lg text-[#6B6B6B] mb-4 leading-relaxed">
                Hilfe zu suchen ist ein Zeichen von Stärke, nicht von Schwaeche. Es erfordert Mut, über schwierige Erfahrungen
                zu sprechen und Unterstützung zu suchen. Sie müssen das nicht alleine durchstehen.
              </p>
              <p className="text-lg text-[#6B6B6B] leading-relaxed">
                Erinnern Sie sich: Es gibt Menschen und Organisationen, die Ihnen helfen wollen und können.
                Nutzen Sie die Hilfe-Telefone, Beratungsstellen und Unterstützungsdienste. Sie sind nicht allein.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
