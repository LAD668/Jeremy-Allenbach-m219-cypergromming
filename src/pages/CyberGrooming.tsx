import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const CyberGrooming: React.FC = () => {
  return (
    <PageLayout>
      <section className="bg-gradient-to-r from-[#1D4ED8] to-[#2563eb] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Was ist Cyber-Grooming?</h1>
          <p className="text-xl text-blue-100">Die Bedrohung verstehen, um unsere Kinder zu schützen</p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1A1A1A] text-center">Was ist Cyber-Grooming?</h2>
            
            {/* Video Embed - SRF Kids News Video */}
            <div className="mb-6 rounded-3xl overflow-hidden shadow-lg bg-black">
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.srf.ch/play/embed?urn=urn:srf:video:2dfdf645-8673-432d-841c-abcd682381a1"
                  title="Cybergrooming – So schützt du dich online - SRF Kids News"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Video Description */}
            <div className="bg-white rounded-3xl p-8 shadow-sm mb-6">
              <p className="text-lg text-[#6B6B6B] leading-relaxed mb-4">
                Dieses Video von SRF Kids News erklärt auf verständliche Weise, was Cyber-Grooming ist und wie es funktioniert.
                Drei SRF Kids Kinderreporter:innen teilen ihre besten Tipps für einen sicheren Umgang im Internet.
              </p>
              <p className="text-lg text-[#6B6B6B] leading-relaxed">
                Das Video zeigt typische Strategien von Groomern und hilft Kindern, Jugendlichen und Eltern, Warnzeichen frühzeitig zu erkennen.
                Das Verständnis dieser Gefahr ist der erste Schritt zum Schutz.
              </p>
              <p className="text-sm text-[#6B6B6B] mt-4 italic">
                Quelle: <a 
                  href="https://www.srf.ch/play/tv/srf-kids-news/video/cybergrooming---so-schützt-du-dich-online?urn=urn%3Asrf%3Avideo%3A2dfdf645-8673-432d-841c-abcd682381a1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#1D4ED8] hover:underline"
                >
                  SRF Kids News - Cybergrooming
                </a>
              </p>
            </div>

            {/* Fallback Message - Shown if JavaScript is disabled or video fails */}
            <div className="bg-[#F5F1EB] rounded-3xl p-8 text-center hidden" id="video-fallback">
              <p className="text-lg text-[#6B6B6B] mb-4 font-semibold">Video konnte nicht geladen werden.</p>
              <p className="text-[#6B6B6B] mb-6">Hier sind alternative Ressourcen:</p>
              <div className="space-y-3">
                <Link to="/protection" className="block text-[#1A1A1A] hover:underline font-medium">
                  Schutz & Prävention
                </Link>
                <Link to="/learning-area" className="block text-[#1A1A1A] hover:underline font-medium">
                  Interaktive Lernumgebung
                </Link>
                <Link to="/get-help" className="block text-[#1A1A1A] hover:underline font-medium">
                  Hilfe bekommen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Definition Section - Expanded */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A1A1A]">Definition: Was ist Cyber-Grooming?</h2>
            
            <div className="space-y-6">
              <div className="bg-[#F5F1EB] rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">In einfachen Worten</h3>
                <p className="text-lg md:text-xl text-[#6B6B6B] mb-4 leading-relaxed">
                  Cyber-Grooming ist ein gezielter Prozess, bei dem ein Erwachsener versucht, das Vertrauen eines Kindes oder Jugendlichen im Internet zu gewinnen.
                  Das Ziel ist es, eine emotionale Bindung aufzubauen, um das Kind später auszubeuten, zu missbrauchen oder zu schädigen.
                </p>
                <p className="text-lg md:text-xl text-[#6B6B6B] leading-relaxed">
                  Der Begriff "Grooming" kommt aus dem Englischen und bedeutet "vorbereiten" oder "pflegen".
                  Groomer "pflegen" eine Beziehung, die auf Manipulation und Täuschung basiert, nicht auf echter Freundschaft.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">Wie funktioniert Cyber-Grooming?</h3>
                <p className="text-lg text-[#6B6B6B] mb-4 leading-relaxed">
                  Groomer nutzen verschiedene Online-Plattformen, um mit Kindern und Jugendlichen in Kontakt zu treten.
                  Dazu gehören soziale Medien wie Instagram, TikTok oder Snapchat, Gaming-Plattformen wie Fortnite oder Minecraft,
                  Chatrooms, Dating-Apps und Messaging-Dienste wie WhatsApp oder Telegram.
                </p>
                <p className="text-lg text-[#6B6B6B] leading-relaxed">
                  Der Prozess läuft meist über mehrere Wochen oder sogar Monate. Groomer geben sich oft als Gleichaltrige aus,
                  zeigen Interesse an den Hobbys und Problemen des Kindes und bauen langsam Vertrauen auf.
                  Sie nutzen die Anonymität des Internets, um ihre wahre Identität zu verbergen.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">Warum ist Cyber-Grooming so gefährlich?</h3>
                <p className="text-lg text-[#6B6B6B] mb-4 leading-relaxed">
                  Cyber-Grooming ist besonders gefährlich, weil es schrittweise und subtil ablaufen kann.
                  Kinder und Jugendliche merken oft nicht sofort, dass etwas nicht stimmt, weil die Manipulation sehr geschickt erfolgt.
                </p>
                <p className="text-lg text-[#6B6B6B] leading-relaxed">
                  Groomer nutzen die Verletzlichkeit und Neugier junger Menschen aus.
                  Sie können zu jeder Tages- und Nachtzeit Kontakt aufnehmen, und die Interaktionen finden oft im Verborgenen statt,
                  weit weg von den Augen der Eltern oder Erzieher.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it happens - Expanded */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#1A1A1A]">Wie Cyber-Grooming abläuft</h2>
            <p className="text-lg text-center text-[#6B6B6B] mb-12 leading-relaxed max-w-3xl mx-auto">
              Cyber-Grooming folgt meist einem vorhersehbaren Muster. Das Verständnis dieser Phasen hilft, Warnzeichen frühzeitig zu erkennen.
            </p>
            
            <div className="space-y-8">
              {[
                { 
                  step: 1, 
                  title: 'Erster Kontakt', 
                  desc: 'Der Groomer nimmt ersten Kontakt auf, oft gibt er vor, ein Gleichaltriger oder jemand mit gemeinsamen Interessen zu sein.',
                  details: 'In dieser Phase sucht der Groomer nach einem passenden Opfer. Er beobachtet Profile, Kommentare und Aktivitäten. Der erste Kontakt wirkt harmlos - vielleicht ein Kommentar unter einem Post, eine Freundschaftsanfrage oder eine Nachricht in einem Spiel. Der Groomer gibt sich freundlich und interessiert, um keine Alarmglocken läuten zu lassen.',
                  example: 'Beispiel: "Hey, dein Cosplay ist echt cool! Spielst du auch [Spielname]? Wir könnten zusammen spielen!"'
                },
                { 
                  step: 2, 
                  title: 'Vertrauen aufbauen', 
                  desc: 'Er investiert Zeit, um eine Beziehung aufzubauen, zeigt Interesse am Leben des Kindes und bietet Unterstützung an.',
                  details: 'Über Tage oder Wochen hinweg baut der Groomer eine scheinbar normale Freundschaft auf. Er fragt nach Hobbys, Problemen in der Schule oder mit Freunden. Er hört zu, gibt Ratschläge und zeigt Verständnis. Diese Phase kann sehr lange dauern, bis das Kind dem Groomer voll vertraut.',
                  example: 'Beispiel: "Ich verstehe dich so gut. Meine Eltern verstehen mich auch nicht. Du kannst mir immer alles erzählen."'
                },
                { 
                  step: 3, 
                  title: 'Isolation', 
                  desc: 'Der Groomer versucht, das Kind von Familie und Freunden zu isolieren, oft durch das Schaffen von Konflikten.',
                  details: 'Sobald Vertrauen aufgebaut ist, beginnt der Groomer, das Kind von seinem Unterstützungssystem zu trennen. Er kritisiert Eltern, Lehrer oder Freunde und suggeriert, dass nur er das Kind wirklich versteht. Er schafft Geheimnisse, die nur zwischen ihnen beiden bestehen sollen.',
                  example: 'Beispiel: "Deine Eltern würden das nie verstehen. Wir sollten das lieber geheim halten. Ich bin der Einzige, der dich wirklich versteht."'
                },
                { 
                  step: 4, 
                  title: 'Desensibilisierung', 
                  desc: 'Er führt schrittweise sexuelle Inhalte, unangemessene Themen oder Anfragen nach Fotos ein.',
                  details: 'Jetzt beginnt der Groomer, Grenzen zu testen und zu überschreiten. Zunächst mit "harmlosen" Fragen oder Witzen, dann mit immer expliziteren Inhalten. Er normalisiert unangemessene Gespräche und bittet um Fotos, zunächst normale, dann immer persönlichere.',
                  example: 'Beispiel: "Kannst du mir ein Foto schicken? Nur um zu sehen, wie du aussiehst. Es bleibt unter uns."'
                },
                { 
                  step: 5, 
                  title: 'Ausbeutung', 
                  desc: 'Sobald Vertrauen etabliert ist, kann der Groomer explizite Fotos anfordern, Treffen arrangieren oder andere Formen der Ausbeutung betreiben.',
                  details: 'In der finalen Phase nutzt der Groomer die emotionale Abhängigkeit aus. Er erpresst das Kind mit bereits geteilten Informationen oder Fotos, droht mit Blossstellung oder fordert persönliche Treffen. Oft nutzt er Schuldgefühle: "Ich habe dir so viel geholfen, jetzt musst du auch etwas für mich tun."',
                  example: 'Beispiel: "Wenn du mich wirklich magst, würdest du [unangemessene Forderung]. Sonst war unsere ganze Freundschaft umsonst."'
                }
              ].map((item) => (
                <Card key={item.step} className="bg-white">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-20 h-20 rounded-full bg-[#1D4ED8] text-white flex items-center justify-center text-3xl font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-[#1A1A1A]">{item.title}</h3>
                      <p className="text-lg text-[#6B6B6B] mb-4 leading-relaxed font-medium">{item.desc}</p>
                      <p className="text-base text-[#6B6B6B] mb-4 leading-relaxed">{item.details}</p>
                      <div className="bg-[#F5F1EB] rounded-2xl p-4 mt-4">
                        <p className="text-sm font-semibold text-[#1A1A1A] mb-2">Typisches Beispiel:</p>
                        <p className="text-sm text-[#6B6B6B] italic">{item.example}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Examples Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A1A1A] text-center">Fallbeispiele (fiktiv)</h2>
            <p className="text-lg text-center text-[#6B6B6B] mb-10 leading-relaxed">
              Diese Beispiele zeigen typische Grooming-Szenarien. Alle Namen und Situationen sind frei erfunden.
            </p>
            
            <div className="space-y-6">
              <Card className="bg-[#F5F1EB]">
                <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">Beispiel 1: Gaming-Plattform</h3>
                <p className="text-[#6B6B6B] mb-4 leading-relaxed">
                  Ein 13-jähriger Junge spielt regelmässig ein Online-Spiel. Ein neuer Mitspieler, der vorgibt, 14 zu sein,
                  schlägt vor, gemeinsam zu spielen. Nach einigen Wochen des gemeinsamen Spielens fragt der Mitspieler nach
                  dem echten Namen, der Schule und ob sie sich persönlich treffen könnten.
                </p>
                <p className="text-[#6B6B6B] leading-relaxed">
                  <strong className="text-[#1A1A1A]">Warnzeichen:</strong> Altersfalschdarstellung, schnelle Bitte um persönliche Informationen,
                  Vorschlag eines Treffens ohne Eltern.
                </p>
              </Card>

              <Card className="bg-[#F5F1EB]">
                <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">Beispiel 2: Social Media</h3>
                <p className="text-[#6B6B6B] mb-4 leading-relaxed">
                  Ein 15-jähriges Mädchen erhält eine Nachricht auf Instagram von jemandem, der behauptet, ein Model-Scout zu sein.
                  Die Person lobt ihre Fotos übermässig und bietet an, ihr bei einer Model-Karriere zu helfen.
                  Sie bittet um mehr persönliche Fotos "für das Portfolio" und schlägt vor, die Kommunikation geheim zu halten.
                </p>
                <p className="text-[#6B6B6B] leading-relaxed">
                  <strong className="text-[#1A1A1A]">Warnzeichen:</strong> Übermässige Komplimente, Angebot von "Karrierechancen",
                  Bitte um Geheimhaltung, Anfrage nach persönlichen Fotos.
                </p>
              </Card>

              <Card className="bg-[#F5F1EB]">
                <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">Beispiel 3: Chat-App</h3>
                <p className="text-[#6B6B6B] mb-4 leading-relaxed">
                  Ein 14-jähriger Jugendlicher chattet regelmässig mit jemandem, der vorgibt, ein gleichaltriger Fan
                  derselben Musikband zu sein. Nach einigen Monaten beginnt die Person, über persönliche Probleme zu sprechen
                  und bittet um Unterstützung. Sie schlägt vor, auf eine private Messaging-App zu wechseln und
                  erzählt von "Familienproblemen", die geheim gehalten werden müssen.
                </p>
                <p className="text-[#6B6B6B] leading-relaxed">
                  <strong className="text-[#1A1A1A]">Warnzeichen:</strong> Wechsel zu privaten Plattformen, emotionale Manipulation,
                  Bitte um Geheimhaltung, Aufbau von emotionaler Abhängigkeit.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#1A1A1A]">Die Realität</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center bg-white">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-[#1D4ED8]">1:5</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#1A1A1A]">Betroffene Kinder</h3>
                <p className="text-[#6B6B6B]">Etwa jedes fünfte Kind erhält unerwünschte sexuelle Annäherungsversuche online</p>
              </Card>
              <Card className="text-center bg-white">
                <div className="w-20 h-20 rounded-full bg-[#2DD4BF] bg-opacity-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#2DD4BF]">7 Min</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#1A1A1A]">Schnelle Kontaktaufnahme</h3>
                <p className="text-[#6B6B6B]">Durchschnittliche Zeit, bevor ein Groomer bittet, auf private Chats zu wechseln</p>
              </Card>
              <Card className="text-center bg-white">
                <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-[#FACC15]">90%</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#1A1A1A]">Mobile Geräte</h3>
                <p className="text-[#6B6B6B]">Grooming findet häufig auf mobilen Geräten statt, oft ausserhalb der Aufsicht von Erwachsenen</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="text-center bg-gradient-to-br from-[#1D4ED8] to-[#2563eb] text-white">
              <h2 className="text-3xl font-bold mb-4">Wissen ist Schutz</h2>
              <p className="text-lg mb-6 text-blue-100 leading-relaxed">
                Cyber-Grooming zu verstehen ist der erste Schritt zur Prävention.
                Lernen Sie die Warnzeichen und wie Sie sich und Ihre Liebsten schützen können.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/protection">
                  <Button variant="secondary" size="large" className="bg-white text-[#1D4ED8] hover:bg-blue-50">
                    Schutzstrategien
                  </Button>
                </Link>
                <Link to="/learning-area">
                  <Button variant="outline" size="large" className="border-2 border-white text-white hover:bg-white hover:text-[#1D4ED8]">
                    Lernumgebung
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
