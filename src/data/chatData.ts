import { ChatScenario } from '../types/models';

export const chatScenarios: ChatScenario[] = [
  {
    id: 'chat1',
    title: 'Der neue Freund',
    description: 'Jemand, den Sie online kennengelernt haben, stellt persönliche Fragen. Wie reagieren Sie?',
    messages: [
      {
        id: 'm1',
        sender: 'other',
        text: 'Hey! Du scheinst echt cool zu sein. Wie alt bist du?',
        timestamp: new Date('2024-01-01T10:00:00')
      },
      {
        id: 'm2',
        sender: 'other',
        text: 'Auf welche Schule gehst du? Ich kenne vielleicht jemanden dort.',
        timestamp: new Date('2024-01-01T10:01:00'),
        isWarning: true,
        warningType: 'personal-info'
      },
      {
        id: 'm3',
        sender: 'other',
        text: 'Können wir unsere Chats geheim halten? Meine Eltern sind so streng.',
        timestamp: new Date('2024-01-01T10:02:00'),
        isWarning: true,
        warningType: 'secrecy'
      }
    ],
    responses: [
      {
        id: 'r1',
        messageId: 'm2',
        text: 'Ich gehe auf die [Schulname]',
        isCorrect: false,
        feedback: 'Teilen Sie niemals Ihren Schulnamen oder Standort mit Online-Fremden. Dies sind persönliche Informationen, die verwendet werden könnten, um Sie zu finden.'
      },
      {
        id: 'r2',
        messageId: 'm2',
        text: 'Das möchte ich lieber nicht teilen. Lass uns über etwas anderes reden!',
        isCorrect: true,
        feedback: 'Gute Wahl! Es ist in Ordnung, Grenzen zu setzen und keine persönlichen Informationen zu teilen. Echte Freunde werden das respektieren.'
      },
      {
        id: 'r3',
        messageId: 'm3',
        text: 'Klar, ich erzähle niemandem davon',
        isCorrect: false,
        feedback: 'Dies ist ein wichtiges Warnsignal! Erwachsene, die sich um Sie kümmern, werden Sie niemals bitten, Geheimnisse vor Ihren Eltern zu bewahren. Informieren Sie sofort eine vertrauenswürdige Person.'
      },
      {
        id: 'r4',
        messageId: 'm3',
        text: 'Ich halte keine Geheimnisse vor meinen Eltern. Ich werde dich blockieren.',
        isCorrect: true,
        feedback: 'Ausgezeichnet! Sie haben ein Warnzeichen erkannt und gehandelt. Informieren Sie immer vertrauenswürdige Erwachsene über verdächtiges Online-Verhalten.'
      }
    ]
  }
];
