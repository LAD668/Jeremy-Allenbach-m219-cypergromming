import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { Card } from '../components/ui/Card';

export const Protection: React.FC = () => {
  return (
    <PageLayout>
      <section className="bg-gradient-to-r from-[#1D4ED8] to-[#2563eb] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Schutz & Prävention</h1>
          <p className="text-xl text-blue-100">Praktische Strategien für Online-Sicherheit</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A1A1A] text-center">Warum Prävention wichtig ist</h2>
            <p className="text-lg text-[#6B6B6B] mb-4 leading-relaxed">
              Der beste Schutz vor Cyber-Grooming ist Aufklärung und Prävention. Wenn Kinder und Jugendliche wissen,
              worauf sie achten müssen und wie sie sich schützen können, sind sie besser vorbereitet.
            </p>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              Prävention bedeutet nicht, Kindern die Nutzung des Internets zu verbieten, sondern sie zu befähigen,
              sicher und verantwortungsvoll online zu sein. Offene Kommunikation und klare Regeln sind dabei entscheidend.
            </p>
          </div>
        </div>
      </section>

      {/* For Children & Teenagers - Expanded */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#1A1A1A]">Für Kinder & Jugendliche</h2>
          <p className="text-lg text-center text-[#6B6B6B] mb-12 leading-relaxed max-w-3xl mx-auto">
            Diese praktischen Tipps helfen dir, sicher online zu sein und Warnzeichen fruehzeitig zu erkennen.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                icon: 'P', 
                title: 'Persönliche Informationen privat halten', 
                tips: [
                  'Niemals echten Namen, Adresse, Schule oder Telefonnummer teilen',
                  'Keine Fotos posten, die deinen Standort zeigen (z.B. Schulgebaeude, Hausnummer)',
                  'Datenschutzeinstellungen auf allen Social-Media-Konten nutzen',
                  'Überprüfe regelmäßig, wer deine Posts sehen kann'
                ],
                details: 'Persönliche Informationen sind wie dein Hausschlüssel - sie gehören nicht in fremde Hände. Groomer nutzen diese Daten, um dich zu finden oder zu erpressen. Teile nur das Minimum, das nötig ist, und nur mit Menschen, die du im echten Leben kennst.'
              },
              { 
                icon: 'K', 
                title: 'Vorsichtig sein, mit wem man spricht', 
                tips: [
                  'Nur Freundschaftsanfragen von Menschen annehmen, die du im echten Leben kennst',
                  'Denke daran: Menschen online sind moeglicherweise nicht, wer sie vorgeben zu sein',
                  'Wenn jemand dich unwohl fühlen lässt, blockiere ihn sofort',
                  'Vertraue deinem Bauchgefühl - wenn etwas falsch erscheint, ist es wahrscheinlich falsch'
                ],
                details: 'Im Internet kann jeder behaupten, wer er will. Ein Erwachsener kann sich als Gleichaltriger ausgeben. Wenn jemand zu schnell persoenlich wird, zu viele Komplimente macht oder nach Geheimnissen fragt, ist das ein Warnsignal.'
              },
              { 
                icon: 'I', 
                title: 'Auf dein Bauchgefühl hören',
                tips: [
                  'Wenn sich etwas falsch anfühlt, ist es wahrscheinlich falsch',
                  'Du schuldest niemandem deine Zeit oder Aufmerksamkeit online',
                  'Es ist in Ordnung, "Nein" zu sagen oder aufzuhören, mit jemandem zu sprechen',
                  'Wenn du dich unwohl fühlst, teile es einer vertrauenswürdigen Person mit'
                ],
                details: 'Dein Bauchgefühl ist ein wichtiger Schutzmechanismus. Wenn eine Situation oder eine Person dich beunruhigt, gibt es meist einen guten Grund dafür. Höre auf diese Gefühle und handle entsprechend.'
              },
              { 
                icon: 'T', 
                title: 'Mit vertrauenswürdigen Erwachsenen sprechen',
                tips: [
                  'Sage einem Elternteil, Lehrer oder vertrauenswürdigen Erwachsenen, wenn jemand dich unwohl fühlen lässt',
                  'Halte keine Geheimnisse vor deinen Eltern über Online-Freunde',
                  'Bitte um Hilfe, wenn du dir bei etwas unsicher bist',
                  'Erinnere dich: Echte Freunde bitten dich nicht, Dinge vor deinen Eltern geheim zu halten'
                ],
                details: 'Vertrauenswürdige Erwachsene sind da, um dir zu helfen. Wenn jemand versucht, dich davon abzuhalten, mit ihnen zu sprechen, ist das ein klares Warnsignal. Echte Freunde haben nichts zu verbergen.'
              },
              { 
                icon: 'F', 
                title: 'Niemals Fotos teilen', 
                tips: [
                  'Niemals Fotos von dir an Menschen senden, die du nicht gut kennst',
                  'Teile keine Fotos, die deinen Koerper oder dein Gesicht unangemessen zeigen',
                  'Denke daran: Sobald du ein Foto gesendet hast, kannst du nicht kontrollieren, wer es sieht',
                  'Fotos können zur Erpressung genutzt werden'
                ],
                details: 'Fotos sind wie ein Geschenk, das du nicht zuruecknehmen kannst. Sobald sie gesendet sind, gehoeren sie nicht mehr dir. Groomer nutzen Fotos oft zur Erpressung oder um sie weiterzuverbreiten.'
              },
              { 
                icon: 'M', 
                title: 'Niemals persoenlich treffen', 
                tips: [
                  'Niemals jemanden treffen, den du nur online kennst, ohne einen vertrauenswuerdigen Erwachsenen',
                  'Wenn jemand um ein Treffen bittet, sage sofort deinen Eltern Bescheid',
                  'Echte Freunde werden verstehen, wenn du einen Elternteil mitbringen moechtest',
                  'Wenn jemand Druck macht, sich allein zu treffen, ist das ein Warnsignal'
                ],
                details: 'Persönliche Treffen mit Online-Bekanntschaften sind extrem gefährlich. Die Person könnte jemand ganz anderes sein, als sie vorgibt zu sein. Immer einen Erwachsenen mitbringen oder das Treffen ganz ablehnen.'
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-full bg-[#1D4ED8] bg-opacity-10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[#1D4ED8]">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1A1A1A]">{item.title}</h3>
                <p className="text-[#6B6B6B] mb-4 leading-relaxed">{item.details}</p>
                <ul className="space-y-2">
                  {item.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="text-[#6B6B6B] flex items-start gap-2">
                      <span className="text-[#1D4ED8] mt-1 font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Parents - Expanded */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#1A1A1A]">Für Eltern & Erziehungsberechtigte</h2>
          <p className="text-lg text-center text-[#6B6B6B] mb-12 leading-relaxed max-w-3xl mx-auto">
            Als Eltern können Sie Ihre Kinder aktiv schützen, indem Sie offen kommunizieren, Grenzen setzen und aufmerksam bleiben.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { 
                icon: 'K', 
                title: 'Offene Kommunikation', 
                desc: 'Führen Sie regelmäßige, offene Gespräche mit Ihrem Kind über seine Online-Aktivitäten.',
                details: 'Sprechen Sie regelmäßig und ohne Urteil über das, was Ihr Kind online erlebt. Fragen Sie nach neuen Freunden, interessanten Apps oder unangenehmen Erfahrungen. Schaffen Sie eine Atmosphäre, in der Ihr Kind sich sicher fühlt, über alles zu sprechen.',
                tips: [
                  'Waehlen Sie einen ruhigen Moment fuer Gespraeche',
                  'Hoeren Sie zu, ohne sofort zu urteilen',
                  'Stellen Sie offene Fragen: "Wie war dein Tag online?"',
                  'Teilen Sie auch Ihre eigenen Erfahrungen'
                ]
              },
              { 
                icon: 'Ü', 
                title: 'Aktivitäten überwachen',
                desc: 'Wissen Sie, welche Plattformen Ihr Kind nutzt, mit wem es spricht und was es online tut.',
                details: 'Überwachung bedeutet nicht Spionage, sondern verantwortungsvolle Begleitung. Seien Sie sich bewusst, welche Apps Ihr Kind nutzt, welche Spiele es spielt und mit wem es kommuniziert. Nutzen Sie Kinderschutz-Apps und Einstellungen.',
                tips: [
                  'Lernen Sie die Apps kennen, die Ihr Kind nutzt',
                  'Nutzen Sie Kinderschutz-Einstellungen auf Geräten',
                  'Überprüfen Sie regelmäßig die Freundeslisten',
                  'Seien Sie bei der Installation neuer Apps dabei'
                ]
              },
              { 
                icon: 'B', 
                title: 'Gemeinsam bilden', 
                desc: 'Lernen Sie gemeinsam über Online-Sicherheit. Zeigen Sie Ihrem Kind, wie man Datenschutzeinstellungen nutzt.',
                details: 'Bilden Sie sich gemeinsam weiter. Zeigen Sie Ihrem Kind, wie man Datenschutzeinstellungen anpasst, wie man verdächtige Profile erkennt und wie man sich sicher online verhaelt. Machen Sie es zu einer gemeinsamen Lernerfahrung.',
                tips: [
                  'Gehen Sie gemeinsam durch die Datenschutzeinstellungen',
                  'Erklaeren Sie, warum bestimmte Einstellungen wichtig sind',
                  'Üben Sie gemeinsam, wie man verdächtige Profile erkennt',
                  'Nutzen Sie Lernressourcen wie diese Website gemeinsam'
                ]
              },
              { 
                icon: 'R', 
                title: 'Grenzen setzen', 
                desc: 'Etablieren Sie klare Regeln über Bildschirmzeit, welche Apps erlaubt sind und wann Geräte genutzt werden können.',
                details: 'Klare Regeln geben Kindern Sicherheit und Struktur. Legen Sie gemeinsam fest, welche Apps erlaubt sind, wie lange das Geraet genutzt werden darf und wo es genutzt werden kann. Regeln sollten altersgerecht und gemeinsam besprochen sein.',
                tips: [
                  'Erstellen Sie einen Familienvertrag fuer Online-Nutzung',
                  'Setzen Sie Zeitlimits fuer verschiedene Aktivitaeten',
                  'Bestimmen Sie "bildschirmfreie" Zeiten (z.B. beim Essen)',
                  'Überprüfen und passen Sie Regeln regelmäßig an'
                ]
              },
              { 
                icon: 'F', 
                title: 'Freunde kennen', 
                desc: 'Wissen Sie, wer die Online-Freunde Ihres Kindes sind. Wenn es jemand Neues erwaehnt, stellen Sie Fragen.',
                details: 'Zeigen Sie Interesse an den Online-Freundschaften Ihres Kindes. Fragen Sie nach neuen Kontakten, wie sie sich kennengelernt haben und was sie gemeinsam machen. Seien Sie aufmerksam bei ploetzlichen Veraenderungen im Freundeskreis.',
                tips: [
                  'Fragen Sie regelmaessig nach neuen Online-Freunden',
                  'Seien Sie aufmerksam bei ploetzlichen Veraenderungen',
                  'Ermutigen Sie Ihr Kind, Online-Freunde vorzustellen',
                  'Vorsicht bei Erwachsenen, die sich als Gleichaltrige ausgeben'
                ]
              },
              { 
                icon: 'V', 
                title: 'Auf Veraenderungen achten', 
                desc: 'Seien Sie aufmerksam auf Veraenderungen im Verhalten, der Stimmung oder den Online-Gewohnheiten Ihres Kindes.',
                details: 'Veränderungen im Verhalten können ein Warnsignal sein. Achten Sie auf Rückzug, Stimmungsschwankungen, plötzliche Geheimhaltung oder Veränderungen in den Online-Gewohnheiten. Diese können auf Probleme hinweisen.',
                tips: [
                  'Beobachten Sie Veraenderungen in der Stimmung',
                  'Achten Sie auf Rueckzug oder Geheimhaltung',
                  'Beachten Sie Veraenderungen in den Schlafgewohnheiten',
                  'Sprechen Sie Veraenderungen behutsam an'
                ]
              }
            ].map((item, index) => (
              <Card key={index} className="bg-[#F5F1EB] hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#2DD4BF] bg-opacity-20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-[#2DD4BF]">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-[#1A1A1A]">{item.title}</h3>
                    <p className="text-[#6B6B6B] mb-3 leading-relaxed">{item.desc}</p>
                    <p className="text-[#6B6B6B] mb-4 leading-relaxed">{item.details}</p>
                    <ul className="space-y-2">
                      {item.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="text-sm text-[#6B6B6B] flex items-start gap-2">
                          <span className="text-[#2DD4BF] mt-1 font-bold">→</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conversation Tips */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#1A1A1A]">Gespraechstipps mit Kindern</h2>
            <p className="text-lg text-center text-[#6B6B6B] mb-10 leading-relaxed">
              Wie Sie mit Ihrem Kind über Online-Sicherheit sprechen können
            </p>
            
            <div className="space-y-6">
              <Card className="bg-white">
                <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">1. Schaffen Sie eine offene Atmosphaere</h3>
                <p className="text-[#6B6B6B] mb-4 leading-relaxed">
                  Sprechen Sie regelmaessig und ohne Urteil. Lassen Sie Ihr Kind wissen, dass es immer mit Ihnen sprechen kann,
                  ohne Angst vor Bestrafung zu haben. Hoeren Sie aktiv zu und zeigen Sie Verstaendnis.
                </p>
                <p className="text-sm text-[#6B6B6B] italic">
                  Beispiel: "Ich moechte wissen, was du online erlebst, damit ich dir helfen kann, sicher zu bleiben."
                </p>
              </Card>

              <Card className="bg-white">
                <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">2. Verwenden Sie altersgerechte Sprache</h3>
                <p className="text-[#6B6B6B] mb-4 leading-relaxed">
                  Passen Sie Ihre Sprache an das Alter Ihres Kindes an. Erklaren Sie Gefahren auf eine Weise, die das Kind versteht,
                  ohne es zu ängstigen. Verwenden Sie Beispiele aus dem Alltag des Kindes.
                </p>
                <p className="text-sm text-[#6B6B6B] italic">
                  Beispiel: "Manchmal geben sich Erwachsene im Internet als Kinder aus, um Freunde zu finden. Das ist nicht in Ordnung."
                </p>
              </Card>

              <Card className="bg-white">
                <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">3. Stellen Sie offene Fragen</h3>
                <p className="text-[#6B6B6B] mb-4 leading-relaxed">
                  Vermeiden Sie Ja/Nein-Fragen. Stellen Sie Fragen, die zu Gespraechen fuehren und zeigen, dass Sie sich wirklich interessieren.
                </p>
                <p className="text-sm text-[#6B6B6B] italic">
                  Beispiele: "Was machst du am liebsten online?" oder "Hast du schon mal jemanden kennengelernt, der komisch war?"
                </p>
              </Card>

              <Card className="bg-white">
                <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">4. Betonen Sie, dass Hilfe suchen in Ordnung ist</h3>
                <p className="text-[#6B6B6B] mb-4 leading-relaxed">
                  Machen Sie klar, dass Ihr Kind immer zu Ihnen kommen kann, wenn etwas passiert. Betonen Sie, dass es keine Schuld hat,
                  wenn jemand unangemessen ist, und dass Hilfe suchen ein Zeichen von Staerke ist.
                </p>
                <p className="text-sm text-[#6B6B6B] italic">
                  Beispiel: "Wenn jemand dich unwohl fühlen lässt, ist das nicht deine Schuld. Komm immer zu mir, ich helfe dir."
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#1A1A1A]">Do's und Don'ts</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Do's */}
              <Card className="bg-green-50 border-2 border-green-200">
                <h3 className="text-2xl font-bold mb-6 text-green-800">✓ Do's - Das sollten Sie tun</h3>
                <ul className="space-y-3">
                  {[
                    'Offene und regelmaessige Gespraeche fuehren',
                    'Interesse an den Online-Aktivitaeten zeigen',
                    'Gemeinsam Datenschutzeinstellungen überprüfen',
                    'Klare, altersgerechte Regeln aufstellen',
                    'Vertrauen aufbauen durch Verstaendnis',
                    'Ihr Kind ermutigen, bei Problemen zu Ihnen zu kommen',
                    'Gemeinsam über Online-Sicherheit lernen',
                    'Auf Veraenderungen im Verhalten achten',
                    'Positive Online-Erfahrungen wertschaetzen',
                    'Als Vorbild fungieren bei der eigenen Online-Nutzung'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-[#6B6B6B]">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Don'ts */}
              <Card className="bg-red-50 border-2 border-red-200">
                <h3 className="text-2xl font-bold mb-6 text-red-800">✗ Don'ts - Das sollten Sie vermeiden</h3>
                <ul className="space-y-3">
                  {[
                    'Internet komplett verbieten (fuehrt zu Geheimhaltung)',
                    'Überreagieren oder bestrafen, wenn Probleme auftreten',
                    'Spionieren ohne Wissen des Kindes',
                    'Gespraeche vermeiden oder aufschieben',
                    'Technische Loesungen als einzigen Schutz sehen',
                    'Das Kind allein mit Problemen lassen',
                    'Schuldgefuehle erzeugen',
                    'Vergleiche mit anderen Kindern ziehen',
                    'Online-Aktivitaeten komplett ignorieren',
                    'Angst machen statt aufzuklaeren'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-[#6B6B6B]">
                      <span className="text-red-600 font-bold mt-1">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference Rules */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white">
              <h2 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Online-Sicherheitsregeln zum Merken</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Niemals persoenliche Informationen online teilen',
                  'Keine Freundschaftsanfragen von Fremden annehmen',
                  'Alle Social-Media-Konten privat halten',
                  'Niemals Fotos an Menschen senden, die du nicht kennst',
                  'Keine Geheimnisse vor Eltern über Online-Freunde halten',
                  'Niemals jemanden persoenlich treffen, den du nur online kennst',
                  'Jeden blockieren und melden, der dich unwohl fühlen lässt',
                  'Einer vertrauenswürdigen Person Bescheid geben, wenn sich etwas falsch anfühlt',
                  'Auf dein Bauchgefühl hören',
                  'Regelmäßig Datenschutzeinstellungen überprüfen',
                  'Niemals Passwoerter mit anderen teilen',
                  'Vorsichtig sein bei Geschenken oder besonderen Angeboten'
                ].map((rule, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-[#F5F1EB] rounded-2xl">
                    <span className="text-[#1D4ED8] font-bold">✓</span>
                    <span className="text-[#6B6B6B]">{rule}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
