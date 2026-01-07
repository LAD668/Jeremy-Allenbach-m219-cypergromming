import { WarningSign } from '../types/models';

export const warningSigns: WarningSign[] = [
  {
    id: 'ws1',
    title: 'Nach persönlichen Informationen fragen',
    description: 'Anfrage nach echtem Namen, Adresse, Schule, Telefonnummer oder anderen identifizierenden Informationen.',
    category: 'requests',
    severity: 'high',
    explanation: 'Groomer sammeln systematisch Informationen, um ihre Opfer zu identifizieren und möglicherweise persönlich zu treffen. Persönliche Daten können auch zur Erpressung genutzt werden.',
    examples: [
      'Fragen nach dem echten Namen, obwohl bereits ein Spitzname bekannt ist',
      'Bitte um die Adresse oder den Schulnamen',
      'Anfrage nach der Telefonnummer oder dem Wohnort',
      'Fragen nach dem Alter, der Klasse oder dem Geburtstag'
    ],
    whyImportant: 'Persönliche Informationen sollten niemals mit Online-Fremden geteilt werden. Diese Daten können missbraucht werden, um das Kind zu finden, zu erpressen oder zu manipulieren.'
  },
  {
    id: 'ws2',
    title: 'Geheimhaltung fördern',
    description: 'Aufforderung an das Kind, Gespräche vor Eltern, Freunden oder anderen Erwachsenen geheim zu halten.',
    category: 'communication',
    severity: 'critical',
    explanation: 'Groomer versuchen, das Kind von seinem Unterstützungssystem zu isolieren. Geheimhaltung schafft eine Barriere zwischen dem Kind und den Menschen, die helfen könnten.',
    examples: [
      '"Erzähl deinen Eltern nichts davon, sie würden es nicht verstehen"',
      '"Das ist unser kleines Geheimnis, okay?"',
      '"Wenn du es jemandem erzählst, können wir nicht mehr Freunde sein"',
      '"Deine Eltern würden sauer sein, wenn sie das wüssten"'
    ],
    whyImportant: 'Echte Freunde und vertrauenswürdige Erwachsene bitten niemals um Geheimnisse vor den Eltern. Geheimhaltung ist ein klares Warnsignal fuer Manipulation.'
  },
  {
    id: 'ws3',
    title: 'Wechsel zu privaten Plattformen',
    description: 'Schneller Versuch, Gespräche von öffentlichen Raeumen auf private Messaging-Apps zu verlagern.',
    category: 'communication',
    severity: 'high',
    explanation: 'Private Messaging-Apps bieten Groomern mehr Kontrolle und weniger Sichtbarkeit. Öffentliche Kommunikation kann von anderen gesehen werden, private Nachrichten nicht.',
    examples: [
      'Bitte, von einem öffentlichen Chat zu WhatsApp oder Telegram zu wechseln',
      'Vorschlag, sich auf einer privaten Plattform zu unterhalten',
      'Druck, eine bestimmte App herunterzuladen',
      'Behauptung, dass die öffentliche Plattform "nicht sicher" sei'
    ],
    whyImportant: 'Der Wechsel zu privaten Plattformen macht es schwieriger, die Kommunikation zu überwachen und zu dokumentieren. Groomer nutzen dies, um ungestoert manipulieren zu können.'
  },
  {
    id: 'ws4',
    title: 'Übermäßige Geschenke oder Komplimente',
    description: 'Das Kind mit Geschenken, Geld, Spielgegenstaenden oder übermaessigen Komplimenten überschuetten.',
    category: 'behavior',
    severity: 'medium',
    explanation: 'Groomer nutzen Geschenke und übermaessige Komplimente, um Schuldgefühle zu erzeugen und das Kind emotional abhängig zu machen. Das Kind soll sich verpflichtet fühlen.',
    examples: [
      'Angebot von kostenlosen Spielzeugen, Geld oder Geschenken',
      'Übermäßige Komplimente über Aussehen oder Persönlichkeit',
      'Versprechen von teuren Geschenken oder Privilegien',
      '"Du bist so besonders, niemand versteht dich so wie ich"'
    ],
    whyImportant: 'Echte Freundschaften basieren nicht auf Geschenken. Übermäßige Geschenke sind oft ein Versuch, das Kind zu manipulieren und Schuldgefühle zu erzeugen.'
  },
  {
    id: 'ws5',
    title: 'Anfrage nach Fotos oder Videos',
    description: 'Bitte um Fotos, insbesondere persönliche oder unangemessene.',
    category: 'requests',
    severity: 'critical',
    explanation: 'Fotos können zur Erpressung genutzt werden oder als "Beweis" dienen, dass das Kind "interessiert" sei. Einmal geteilt, kann das Kind die Kontrolle über diese Bilder verlieren.',
    examples: [
      'Bitte um ein aktuelles Foto "nur um zu sehen, wie du aussiehst"',
      'Anfrage nach Fotos in bestimmter Kleidung',
      'Druck, mehr Fotos zu senden, nachdem bereits welche geteilt wurden',
      'Bitte um Videos oder Live-Streams'
    ],
    whyImportant: 'Fotos können missbraucht werden, um das Kind zu erpressen oder zu manipulieren. Sobald ein Foto gesendet wurde, kann es weiterverbreitet werden, ohne dass das Kind Kontrolle darüber hat.'
  },
  {
    id: 'ws6',
    title: 'Emotionale Abhängigkeit schaffen',
    description: 'Sich als die einzige Person darstellen, die das Kind "versteht".',
    category: 'isolation',
    severity: 'high',
    explanation: 'Groomer versuchen, das Kind glauben zu lassen, dass nur sie es wirklich verstehen. Dies schafft emotionale Abhängigkeit und macht es schwieriger, die Beziehung zu beenden.',
    examples: [
      '"Nur ich verstehe dich wirklich"',
      '"Deine Freunde verstehen dich nicht, aber ich schon"',
      '"Ich bin immer fuer dich da, wenn du mich brauchst"',
      '"Wir sind so ähnlich, niemand sonst versteht uns"'
    ],
    whyImportant: 'Gesunde Beziehungen basieren auf Gleichberechtigung, nicht auf Abhängigkeit. Wenn jemand behauptet, der "Einzige" zu sein, der das Kind versteht, ist das ein Warnsignal.'
  },
  {
    id: 'ws7',
    title: 'Altersfalschdarstellung',
    description: 'Behaupten, juenger zu sein als man ist, oft vorgibt, ein Gleichaltriger zu sein.',
    category: 'behavior',
    severity: 'high',
    explanation: 'Groomer geben sich haeufig als Gleichaltrige aus, um Vertrauen zu gewinnen. Ein Erwachsener, der vorgibt, ein Kind zu sein, ist immer verdaechtig.',
    examples: [
      'Behauptung, im gleichen Alter zu sein, obwohl das Profilbild älter aussieht',
      'Widerspruechliche Angaben zum Alter',
      'Ungewoehnlich reife Sprache fuer das angegebene Alter',
      'Weigerung, ein aktuelles Foto zu zeigen'
    ],
    whyImportant: 'Erwachsene, die sich als Kinder ausgeben, haben immer schlechte Absichten. Echte Gleichaltrige verhalten sich anders und haben ähnliche Interessen und Erfahrungen.'
  },
  {
    id: 'ws8',
    title: 'Vorschlag persönlicher Treffen',
    description: 'Bitte um persönliches Treffen, Angebot zum Abholen oder Vorschlag von Orten.',
    category: 'requests',
    severity: 'critical',
    explanation: 'Persönliche Treffen sind das gefährlichste Stadium des Groomings. Groomer versuchen, das Kind in eine Situation zu bringen, in der sie vollstaendige Kontrolle haben.',
    examples: [
      'Vorschlag, sich persönlich zu treffen',
      'Angebot, das Kind abzuholen',
      'Bitte um ein Treffen ohne Eltern oder Freunde',
      'Vorschlag von abgelegenen Orten fuer ein Treffen'
    ],
    whyImportant: 'Persönliche Treffen mit Online-Bekanntschaften sind extrem gefährlich. Groomer können das Kind entführen, missbrauchen oder in gefährliche Situationen bringen.'
  },
  {
    id: 'ws9',
    title: 'Elterliche Beteiligung entmutigen',
    description: 'Aktive Entmutigung des Kindes, mit Eltern oder Erziehungsberechtigten zu sprechen.',
    category: 'isolation',
    severity: 'critical',
    explanation: 'Groomer wissen, dass Eltern und Erzieher eine Bedrohung fuer ihre Pläne darstellen. Sie versuchen aktiv, das Kind davon abzuhalten, Hilfe zu suchen.',
    examples: [
      'Kritik an den Eltern oder Erziehern',
      'Behauptung, dass Eltern "zu streng" oder "nicht verständnisvoll" seien',
      'Druck, Dinge vor den Eltern geheim zu halten',
      'Vorschlag, dass das Kind "alt genug" sei, um eigene Entscheidungen zu treffen'
    ],
    whyImportant: 'Eltern und Erzieher sind die wichtigsten Schutzpersonen fuer ein Kind. Jeder, der versucht, das Kind von ihnen zu trennen, hat schlechte Absichten.'
  },
  {
    id: 'ws10',
    title: 'Unangemessene Themen oder Inhalte',
    description: 'Schrittweise Einfuehrung sexueller Themen, Teilen unangemessener Inhalte oder sexuelle Kommentare.',
    category: 'communication',
    severity: 'critical',
    explanation: 'Groomer testen schrittweise die Grenzen des Kindes. Sie beginnen mit "harmlosen" Witzen oder Fragen und steigern sich zu expliziteren Inhalten.',
    examples: [
      'Sexuelle Witze oder Kommentare',
      'Teilen von unangemessenen Bildern oder Videos',
      'Fragen nach sexuellen Erfahrungen',
      'Vorschlag von sexuellen Aktivitäten'
    ],
    whyImportant: 'Gespräche mit Gleichaltrigen oder Erwachsenen sollten niemals sexuelle Themen enthalten, wenn es um ein Kind geht. Dies ist immer unangemessen und ein klares Warnsignal.'
  }
];
