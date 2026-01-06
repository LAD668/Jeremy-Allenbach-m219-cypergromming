import { QuizQuestion } from '../types/models';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Was ist Cyber-Grooming?',
    options: [
      'Freundschaften im Internet schliessen',
      'Ein Erwachsener baut Vertrauen zu einem Kind online auf, um es auszubeuten',
      'Online-Spiele spielen',
      'Fotos im Internet teilen'
    ],
    correctAnswer: 1,
    explanation: 'Cyber-Grooming ist, wenn ein Erwachsener eine emotionale Verbindung zu einem Kind online aufbaut, mit der Absicht, es auszubeuten oder zu schädigen.'
  },
  {
    id: 'q2',
    question: 'Welches ist ein Warnzeichen von Grooming?',
    options: [
      'Aufforderung, Gespräche geheim zu halten',
      'Freundlich sein',
      'Gemeinsam Spiele spielen',
      'Memes teilen'
    ],
    correctAnswer: 0,
    explanation: 'Die Aufforderung, Geheimnisse vor den Eltern zu bewahren, ist ein wichtiges Warnsignal. Echte Freunde bitten Sie nicht, Dinge vor vertrauenswürdigen Erwachsenen zu verbergen.'
  },
  {
    id: 'q3',
    question: 'Was sollten Sie tun, wenn jemand online nach Ihrer Adresse fragt?',
    options: [
      'Ihre Adresse angeben',
      'Zuerst nach deren Adresse fragen',
      'Niemals teilen und einer vertrauenswürdigen Person Bescheid geben',
      'Nur die Stadt nennen'
    ],
    correctAnswer: 2,
    explanation: 'Teilen Sie niemals persönliche Informationen wie Ihre Adresse mit Online-Fremden. Informieren Sie immer eine vertrauenswürdige Person, wenn jemand nach persönlichen Daten fragt.'
  },
  {
    id: 'q4',
    question: 'Wie lange dauert Grooming typischerweise?',
    options: [
      'Einige Minuten',
      'Normalerweise Wochen oder Monate',
      'Einen Tag',
      'Es braucht keine Zeit'
    ],
    correctAnswer: 1,
    explanation: 'Grooming ist ein schrittweiser Prozess, der normalerweise über Wochen oder Monate hinweg stattfindet, während der Groomer Vertrauen aufbaut.'
  },
  {
    id: 'q5',
    question: 'Was sollten Sie tun, wenn Sie Opfer von Grooming werden?',
    options: [
      'Es geheim halten',
      'Sofort einer vertrauenswürdigen Person Bescheid geben',
      'Weiter mit ihnen sprechen',
      'Ihnen geben, was sie wollen'
    ],
    correctAnswer: 1,
    explanation: 'Wenn Sie Opfer von Grooming werden, informieren Sie sofort eine vertrauenswürdige Person. Sie sind nicht schuld, und Hilfe ist verfügbar.'
  }
];
