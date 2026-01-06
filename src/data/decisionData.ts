import { DecisionScenario } from '../types/models';

export const decisionScenarios: DecisionScenario[] = [
  {
    id: 'dec1',
    title: 'Freundschaftsanfrage',
    situation: 'Sie spielen ein Online-Spiel und jemand sendet Ihnen eine Freundschaftsanfrage. Die Person sagt, sie sei 13, genau wie Sie.',
    choices: [
      {
        id: 'c1',
        text: 'Annehmen - sie sind im gleichen Alter!',
        points: -10,
        feedback: 'Vorsicht! Menschen online sind möglicherweise nicht, wer sie vorgeben zu sein. Überprüfen Sie immer, bevor Sie Freundschaftsanfragen annehmen.',
        isCorrect: false
      },
      {
        id: 'c2',
        text: 'Zuerst Ihre Eltern fragen',
        points: 10,
        feedback: 'Gut! Fragen Sie immer eine vertrauenswürdige Person, bevor Sie Freundschaftsanfragen von Fremden annehmen.',
        isCorrect: true
      },
      {
        id: 'c3',
        text: 'Die Anfrage ignorieren',
        points: 5,
        feedback: 'Sichere Wahl! Es ist in Ordnung, Freundschaftsanfragen von Menschen zu ignorieren, die Sie nicht kennen.',
        isCorrect: true
      }
    ]
  },
  {
    id: 'dec2',
    title: 'Treffen-Anfrage',
    situation: 'Jemand, mit dem Sie online gechattet haben, möchte Sie persönlich in einem Park treffen.',
    choices: [
      {
        id: 'c4',
        text: 'Allein treffen',
        points: -20,
        feedback: 'Treffen Sie niemals Online-Freunde allein! Dies ist sehr gefährlich. Informieren Sie immer eine vertrauenswürdige Person.',
        isCorrect: false
      },
      {
        id: 'c5',
        text: 'Ihren Eltern Bescheid geben und sie bitten, mitzukommen',
        points: 15,
        feedback: 'Perfekt! Wenn Sie jemanden treffen müssen, bringen Sie immer eine vertrauenswürdige Person an einen öffentlichen Ort mit.',
        isCorrect: true
      },
      {
        id: 'c6',
        text: 'Ablehnen und blockieren',
        points: 10,
        feedback: 'Gute Entscheidung! Wenn jemand um ein Treffen bittet, ist es am sichersten, abzulehnen und die Person zu blockieren.',
        isCorrect: true
      }
    ]
  },
  {
    id: 'dec3',
    title: 'Foto-Anfrage',
    situation: 'Ein Online-Freund bittet Sie, ein Foto von sich zu senden.',
    choices: [
      {
        id: 'c7',
        text: 'Ein normales Foto senden',
        points: -15,
        feedback: 'Senden Sie niemals Fotos an Online-Fremde, auch nicht normale. Sobald Sie ein Foto gesendet haben, können Sie nicht kontrollieren, wer es sieht.',
        isCorrect: false
      },
      {
        id: 'c8',
        text: 'Ablehnen und einer vertrauenswürdigen Person Bescheid geben',
        points: 15,
        feedback: 'Ausgezeichnet! Senden Sie niemals Fotos an Online-Fremde. Informieren Sie immer eine vertrauenswürdige Person, wenn jemand danach fragt.',
        isCorrect: true
      },
      {
        id: 'c9',
        text: 'Zuerst nach deren Foto fragen',
        points: -10,
        feedback: 'Dies ist immer noch gefährlich. Tauschen Sie niemals Fotos mit Online-Fremden aus.',
        isCorrect: false
      }
    ]
  }
];
