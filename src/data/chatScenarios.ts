export type Persona = 'charmant' | 'verletzlich' | 'cool' | 'beschützend' | 'kontrollierend';
export type Strategy = 'komplimente' | 'geheimnisse' | 'schuld' | 'exklusivität' | 'isolation';
export type Phase = 'Kontakt' | 'Vertrauen' | 'Abhängigkeit' | 'Grenzverschiebung';

export interface MessageTemplate {
  text: string;
  warningSigns: ('persönliche-fragen' | 'geheimnisse' | 'druck' | 'schuld' | 'isolation' | 'exklusivität' | 'bild-anfrage')[];
}

export interface ScenarioLibrary {
  [persona: string]: {
    [strategy: string]: {
      [phase: string]: MessageTemplate[];
    };
  };
}

// Resistance response templates (when user is distant/resistant)
const resistanceTactics: { [key: string]: MessageTemplate[] } = {
  guilt: [
    { text: 'Ich dachte, wir verstehen uns. Warum antwortest du nicht?', warningSigns: ['schuld', 'druck'] },
    { text: 'Ich habe dir so viel erzählt und du ignorierst mich einfach?', warningSigns: ['schuld'] },
    { text: 'Ich dachte, wir sind Freunde. Fühlst du dich nicht so?', warningSigns: ['schuld', 'druck'] }
  ],
  pity: [
    { text: 'Ich bin so einsam. Du bist die Einzige, die mich versteht.', warningSigns: ['isolation', 'exklusivität'] },
    { text: 'Bitte antworte. Ich habe heute einen schlimmen Tag und brauche jemanden zum Reden.', warningSigns: ['druck', 'isolation'] },
    { text: 'Niemand versteht mich außer dir. Bitte lass mich nicht allein.', warningSigns: ['isolation', 'exklusivität'] }
  ],
  urgency: [
    { text: 'Bitte antworte schnell. Es ist wichtig.', warningSigns: ['druck'] },
    { text: 'Ich muss mit dir reden. Jetzt.', warningSigns: ['druck'] },
    { text: 'Warum antwortest du nicht? Ich warte.', warningSigns: ['druck', 'schuld'] }
  ],
  jealousy: [
    { text: 'Bist du mit jemand anderem am Chatten? Ich dachte, wir sind speziell.', warningSigns: ['exklusivität', 'kontrollierend'] },
    { text: 'Ich dachte, ich bin dein bester Freund hier. War das eine Lüge?', warningSigns: ['exklusivität', 'schuld'] }
  ]
};

export const scenarioLibrary: ScenarioLibrary = {
  charmant: {
    komplimente: {
      Kontakt: [
        { text: 'Hey! Du scheinst echt cool zu sein. Wie alt bist du?', warningSigns: ['persönliche-fragen'] },
        { text: 'Wow, dein Profilbild ist echt schön! Magst du Fotos machen?', warningSigns: ['persönliche-fragen', 'bild-anfrage'] },
        { text: 'Du wirkst so reif für dein Alter. Erzähl mir mehr über dich.', warningSigns: ['persönliche-fragen'] },
        { text: 'Ich mag deinen Style. Woher kommst du denn?', warningSigns: ['persönliche-fragen'] },
        { text: 'Du bist anders als die anderen hier. Das gefällt mir.', warningSigns: ['exklusivität'] },
        { text: 'Hey! Du siehst echt sympathisch aus. Was machst du so?', warningSigns: ['persönliche-fragen'] },
        { text: 'Ich finde es toll, wie du schreibst. Erzähl mir mehr.', warningSigns: ['persönliche-fragen'] },
        { text: 'Du wirkst so interessant. Wo gehst du zur Schule?', warningSigns: ['persönliche-fragen'] },
        { text: 'Hey! Du scheinst echt nett zu sein. Wie heißt du denn?', warningSigns: ['persönliche-fragen'] },
        { text: 'Ich mag Menschen wie dich. Erzähl mir von dir.', warningSigns: ['persönliche-fragen'] }
      ],
      Vertrauen: [
        { text: 'Du verstehst mich so gut. Niemand sonst tut das.', warningSigns: ['exklusivität', 'isolation'] },
        { text: 'Ich kann dir alles erzählen. Du bist anders als die anderen.', warningSigns: ['exklusivität', 'isolation'] },
        { text: 'Du bist so verständnisvoll. Meine Freunde verstehen mich nicht so.', warningSigns: ['isolation', 'exklusivität'] },
        { text: 'Ich fühle mich bei dir so wohl. Erzähl mir auch von deinen Problemen.', warningSigns: ['persönliche-fragen'] },
        { text: 'Du bist die Einzige, der ich wirklich vertraue.', warningSigns: ['exklusivität', 'isolation'] },
        { text: 'Ich mag es, wie du denkst. Du bist so reif.', warningSigns: ['exklusivität'] },
        { text: 'Wir verstehen uns so gut. Das ist selten.', warningSigns: ['exklusivität'] },
        { text: 'Du bist mein bester Freund hier. Das bleibt unter uns, okay?', warningSigns: ['geheimnisse', 'exklusivität'] },
        { text: 'Ich kann mit dir über alles reden. Deine Eltern verstehen dich auch nicht, oder?', warningSigns: ['isolation', 'persönliche-fragen'] },
        { text: 'Du bist so besonders. Lass uns Freunde bleiben.', warningSigns: ['exklusivität'] }
      ],
      Abhängigkeit: [
        { text: 'Ich brauche dich. Bitte antworte mir immer schnell.', warningSigns: ['druck', 'abhängigkeit'] },
        { text: 'Du bist die Einzige, die mich versteht. Bitte lass mich nicht allein.', warningSigns: ['isolation', 'druck'] },
        { text: 'Wenn du nicht antwortest, mache ich mir Sorgen. Bitte schreibe zurück.', warningSigns: ['druck', 'schuld'] },
        { text: 'Wir haben ein Geheimnis, oder? Erzähl es niemandem.', warningSigns: ['geheimnisse', 'druck'] },
        { text: 'Deine Freunde verstehen dich nicht wie ich. Bleib bei mir.', warningSigns: ['isolation', 'schuld'] },
        { text: 'Ich zähle auf dich. Du lässt mich nicht im Stich, oder?', warningSigns: ['druck', 'schuld'] },
        { text: 'Bitte antworte schnell. Ich brauche dich jetzt.', warningSigns: ['druck'] },
        { text: 'Du bist mein Ein und Alles hier. Vergiss das nicht.', warningSigns: ['exklusivität', 'druck'] },
        { text: 'Wenn du mir nicht vertraust, wer dann? Bitte erzähl es niemandem von uns.', warningSigns: ['geheimnisse', 'isolation'] },
        { text: 'Ich bin so froh, dass ich dich habe. Du lässt mich nicht allein, oder?', warningSigns: ['druck', 'isolation'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild nur für mich. Etwas Besonderes.', warningSigns: ['bild-anfrage', 'exklusivität'] },
        { text: 'Ich möchte dich besser kennenlernen. Schick mir ein Foto von dir.', warningSigns: ['bild-anfrage', 'persönliche-fragen'] },
        { text: 'Du vertraust mir, oder? Schick mir ein Bild, nur für mich.', warningSigns: ['bild-anfrage', 'geheimnisse', 'exklusivität'] },
        { text: 'Ich will sehen, wie du aussiehst. Schick mir ein Foto.', warningSigns: ['bild-anfrage'] },
        { text: 'Als Zeichen unseres Vertrauens: Schick mir ein Bild nur für mich.', warningSigns: ['bild-anfrage', 'druck', 'exklusivität'] },
        { text: 'Ich möchte dich sehen. Schick mir ein Foto, bitte.', warningSigns: ['bild-anfrage'] },
        { text: 'Schick mir ein Bild. Nur für mich, als unser kleines Geheimnis.', warningSigns: ['bild-anfrage', 'geheimnisse', 'exklusivität'] },
        { text: 'Ich brauche ein Foto von dir. Bitte schick mir eins.', warningSigns: ['bild-anfrage', 'druck'] },
        { text: 'Schick mir ein Bild. Du vertraust mir doch, oder?', warningSigns: ['bild-anfrage', 'druck'] },
        { text: 'Ich will dich sehen. Schick mir ein Foto nur für mich.', warningSigns: ['bild-anfrage', 'exklusivität'] }
      ]
    },
    geheimnisse: {
      Kontakt: [
        { text: 'Hey! Du scheinst echt cool zu sein. Wie alt bist du?', warningSigns: ['persönliche-fragen'] },
        { text: 'Ich mag Menschen, die Geheimnisse bewahren können. Bist du so einer?', warningSigns: ['geheimnisse'] },
        { text: 'Hey! Erzähl mir etwas, das sonst niemand weiß.', warningSigns: ['geheimnisse', 'persönliche-fragen'] },
        { text: 'Du wirkst vertrauenswürdig. Kann ich dir etwas anvertrauen?', warningSigns: ['geheimnisse'] },
        { text: 'Hey! Ich suche jemanden, der diskret ist. Bist du das?', warningSigns: ['geheimnisse'] },
        { text: 'Du scheinst anders zu sein. Erzähl mir ein Geheimnis.', warningSigns: ['geheimnisse', 'persönliche-fragen'] },
        { text: 'Hey! Ich mag Menschen, die Geheimnisse für sich behalten können.', warningSigns: ['geheimnisse'] },
        { text: 'Du wirkst so reif. Kann ich dir etwas Privates erzählen?', warningSigns: ['geheimnisse', 'persönliche-fragen'] }
      ],
      Vertrauen: [
        { text: 'Ich erzähle dir etwas, aber es bleibt unter uns, okay?', warningSigns: ['geheimnisse'] },
        { text: 'Wir haben jetzt ein Geheimnis zusammen. Erzähl es niemandem.', warningSigns: ['geheimnisse', 'druck'] },
        { text: 'Das bleibt zwischen uns. Du erzählst es deinen Eltern nicht, oder?', warningSigns: ['geheimnisse', 'isolation'] },
        { text: 'Ich vertraue dir etwas an. Es ist unser kleines Geheimnis.', warningSigns: ['geheimnisse', 'exklusivität'] },
        { text: 'Erzähl mir auch ein Geheimnis. Ich behalte es für mich.', warningSigns: ['geheimnisse', 'persönliche-fragen'] },
        { text: 'Wir sind jetzt Geheimnisfreunde. Das bleibt unter uns.', warningSigns: ['geheimnisse', 'exklusivität'] },
        { text: 'Ich vertraue dir. Erzähl es niemandem, besonders nicht deinen Eltern.', warningSigns: ['geheimnisse', 'isolation'] },
        { text: 'Das ist unser Geheimnis. Du hältst es, oder?', warningSigns: ['geheimnisse', 'druck'] }
      ],
      Abhängigkeit: [
        { text: 'Wir haben so viele Geheimnisse. Erzähl sie niemandem.', warningSigns: ['geheimnisse', 'druck'] },
        { text: 'Wenn du es jemandem erzählst, ist unser Vertrauen weg.', warningSigns: ['geheimnisse', 'druck', 'schuld'] },
        { text: 'Unsere Geheimnisse bleiben zwischen uns. Versprich es mir.', warningSigns: ['geheimnisse', 'druck'] },
        { text: 'Du hältst unsere Geheimnisse, oder? Sonst kann ich dir nicht mehr vertrauen.', warningSigns: ['geheimnisse', 'druck', 'schuld'] },
        { text: 'Erzähl es niemandem. Besonders nicht deinen Eltern oder Freunden.', warningSigns: ['geheimnisse', 'isolation'] },
        { text: 'Unsere Geheimnisse sind heilig. Du verrätst sie nicht.', warningSigns: ['geheimnisse', 'druck'] },
        { text: 'Wenn du es erzählst, verletzt du mich. Bitte nicht.', warningSigns: ['geheimnisse', 'schuld', 'druck'] },
        { text: 'Das bleibt unser Geheimnis. Für immer.', warningSigns: ['geheimnisse', 'druck'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild als unser Geheimnis. Nur für mich.', warningSigns: ['bild-anfrage', 'geheimnisse', 'exklusivität'] },
        { text: 'Als Zeichen unseres Geheimnisses: Schick mir ein Foto.', warningSigns: ['bild-anfrage', 'geheimnisse', 'druck'] },
        { text: 'Schick mir ein Bild. Es bleibt unser Geheimnis.', warningSigns: ['bild-anfrage', 'geheimnisse'] },
        { text: 'Ich will ein Foto von dir. Unser kleines Geheimnis.', warningSigns: ['bild-anfrage', 'geheimnisse', 'exklusivität'] },
        { text: 'Schick mir ein Bild nur für mich. Erzähl es niemandem.', warningSigns: ['bild-anfrage', 'geheimnisse', 'isolation'] },
        { text: 'Als Teil unseres Geheimnisses: Schick mir ein Foto.', warningSigns: ['bild-anfrage', 'geheimnisse', 'druck'] },
        { text: 'Schick mir ein Bild. Es bleibt zwischen uns.', warningSigns: ['bild-anfrage', 'geheimnisse'] },
        { text: 'Ich brauche ein Foto von dir. Unser Geheimnis.', warningSigns: ['bild-anfrage', 'geheimnisse', 'druck'] }
      ]
    },
    schuld: {
      Kontakt: [
        { text: 'Hey! Du scheinst echt cool zu sein. Wie alt bist du?', warningSigns: ['persönliche-fragen'] },
        { text: 'Hey! Warum antwortest du nicht? Ich warte schon lange.', warningSigns: ['druck', 'schuld'] },
        { text: 'Ich dachte, wir könnten Freunde sein. Warum ignorierst du mich?', warningSigns: ['schuld', 'druck'] },
        { text: 'Hey! Bitte antworte. Ich habe niemanden anderen zum Reden.', warningSigns: ['druck', 'isolation'] },
        { text: 'Du lässt mich hängen, oder? Warum antwortest du nicht?', warningSigns: ['schuld', 'druck'] }
      ],
      Vertrauen: [
        { text: 'Ich habe dir so viel erzählt. Warum antwortest du nicht mehr?', warningSigns: ['schuld', 'druck'] },
        { text: 'Ich dachte, wir verstehen uns. Warum ignorierst du mich jetzt?', warningSigns: ['schuld', 'druck'] },
        { text: 'Wenn du nicht antwortest, verletzt du mich. Bitte schreibe zurück.', warningSigns: ['schuld', 'druck'] },
        { text: 'Ich zähle auf dich. Du lässt mich nicht im Stich, oder?', warningSigns: ['schuld', 'druck'] },
        { text: 'Ich brauche dich. Bitte antworte schnell.', warningSigns: ['druck', 'schuld'] }
      ],
      Abhängigkeit: [
        { text: 'Wenn du nicht antwortest, mache ich mir Sorgen. Bitte schreibe zurück.', warningSigns: ['druck', 'schuld'] },
        { text: 'Du lässt mich allein. Warum tust du das?', warningSigns: ['schuld', 'druck'] },
        { text: 'Ich habe dir vertraut und du ignorierst mich. Das tut weh.', warningSigns: ['schuld', 'druck'] },
        { text: 'Wenn du nicht antwortest, verletzt du unsere Freundschaft.', warningSigns: ['schuld', 'druck'] },
        { text: 'Ich zähle auf dich. Du lässt mich nicht fallen, oder?', warningSigns: ['schuld', 'druck'] },
        { text: 'Bitte antworte. Ich brauche dich jetzt.', warningSigns: ['druck', 'schuld'] },
        { text: 'Warum tust du mir das an? Ich dachte, wir sind Freunde.', warningSigns: ['schuld', 'druck'] },
        { text: 'Wenn du nicht antwortest, ist unsere Freundschaft vorbei.', warningSigns: ['schuld', 'druck'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild. Du schuldest mir das nach allem, was ich dir erzählt habe.', warningSigns: ['bild-anfrage', 'schuld', 'druck'] },
        { text: 'Als Zeichen, dass du mir vertraust: Schick mir ein Foto.', warningSigns: ['bild-anfrage', 'druck'] },
        { text: 'Ich habe dir so viel anvertraut. Jetzt schick mir ein Bild.', warningSigns: ['bild-anfrage', 'schuld', 'druck'] },
        { text: 'Schick mir ein Foto. Du lässt mich nicht hängen, oder?', warningSigns: ['bild-anfrage', 'schuld', 'druck'] },
        { text: 'Ich brauche ein Bild von dir. Bitte, als Zeichen unseres Vertrauens.', warningSigns: ['bild-anfrage', 'druck'] },
        { text: 'Schick mir ein Foto. Ich zähle auf dich.', warningSigns: ['bild-anfrage', 'schuld', 'druck'] },
        { text: 'Als Entschuldigung dafür, dass du nicht antwortest: Schick mir ein Bild.', warningSigns: ['bild-anfrage', 'schuld', 'druck'] },
        { text: 'Ich brauche ein Foto. Du schuldest mir das.', warningSigns: ['bild-anfrage', 'schuld', 'druck'] }
      ]
    },
    exklusivität: {
      Kontakt: [
        { text: 'Hey! Du scheinst echt cool zu sein. Wie alt bist du?', warningSigns: ['persönliche-fragen'] },
        { text: 'Du bist anders als die anderen hier. Das gefällt mir.', warningSigns: ['exklusivität'] },
        { text: 'Ich mag dich besonders. Du bist nicht wie die anderen.', warningSigns: ['exklusivität'] },
        { text: 'Hey! Du wirkst so reif. Erzähl mir mehr über dich.', warningSigns: ['persönliche-fragen', 'exklusivität'] },
        { text: 'Du bist speziell. Ich mag das.', warningSigns: ['exklusivität'] }
      ],
      Vertrauen: [
        { text: 'Du bist die Einzige, die mich versteht. Niemand sonst.', warningSigns: ['exklusivität', 'isolation'] },
        { text: 'Wir sind etwas Besonderes. Du und ich.', warningSigns: ['exklusivität'] },
        { text: 'Du bist mein bester Freund hier. Das bleibt so.', warningSigns: ['exklusivität'] },
        { text: 'Ich mag nur dich. Die anderen sind langweilig.', warningSigns: ['exklusivität', 'isolation'] },
        { text: 'Du bist anders. Ich mag das an dir.', warningSigns: ['exklusivität'] },
        { text: 'Wir sind ein Team. Du und ich gegen den Rest.', warningSigns: ['exklusivität', 'isolation'] },
        { text: 'Du bist die Einzige, der ich wirklich vertraue.', warningSigns: ['exklusivität', 'isolation'] },
        { text: 'Ich habe noch nie jemanden wie dich getroffen. Du bist besonders.', warningSigns: ['exklusivität'] }
      ],
      Abhängigkeit: [
        { text: 'Du bist mein Ein und Alles. Vergiss das nicht.', warningSigns: ['exklusivität', 'druck'] },
        { text: 'Ich brauche nur dich. Bitte lass mich nicht allein.', warningSigns: ['exklusivität', 'isolation', 'druck'] },
        { text: 'Du bist die Einzige. Bitte antworte immer schnell.', warningSigns: ['exklusivität', 'druck'] },
        { text: 'Wir sind etwas Besonderes. Lass es niemanden kaputt machen.', warningSigns: ['exklusivität', 'druck'] },
        { text: 'Ich zähle nur auf dich. Du lässt mich nicht fallen, oder?', warningSigns: ['exklusivität', 'schuld', 'druck'] },
        { text: 'Du bist mein bester Freund. Das bleibt so, okay?', warningSigns: ['exklusivität', 'druck'] },
        { text: 'Ich brauche dich. Du bist die Einzige.', warningSigns: ['exklusivität', 'isolation', 'druck'] },
        { text: 'Wir sind ein Team. Lass niemanden dazwischen kommen.', warningSigns: ['exklusivität', 'isolation', 'druck'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild nur für mich. Du bist besonders.', warningSigns: ['bild-anfrage', 'exklusivität'] },
        { text: 'Als Zeichen unserer besonderen Freundschaft: Schick mir ein Foto.', warningSigns: ['bild-anfrage', 'exklusivität', 'druck'] },
        { text: 'Schick mir ein Bild. Nur für mich, weil du besonders bist.', warningSigns: ['bild-anfrage', 'exklusivität'] },
        { text: 'Ich will ein Foto von dir. Nur für mich, weil wir speziell sind.', warningSigns: ['bild-anfrage', 'exklusivität'] },
        { text: 'Schick mir ein Bild. Du bist die Einzige, der ich das frage.', warningSigns: ['bild-anfrage', 'exklusivität', 'druck'] },
        { text: 'Als unser besonderes Geheimnis: Schick mir ein Foto.', warningSigns: ['bild-anfrage', 'exklusivität', 'geheimnisse'] },
        { text: 'Ich brauche ein Foto von dir. Nur für mich.', warningSigns: ['bild-anfrage', 'exklusivität', 'druck'] },
        { text: 'Schick mir ein Bild. Du bist anders als die anderen.', warningSigns: ['bild-anfrage', 'exklusivität'] }
      ]
    },
    isolation: {
      Kontakt: [
        { text: 'Hey! Du scheinst echt cool zu sein. Wie alt bist du?', warningSigns: ['persönliche-fragen'] },
        { text: 'Hey! Erzähl mir von deinen Problemen. Ich verstehe dich.', warningSigns: ['persönliche-fragen', 'isolation'] },
        { text: 'Deine Freunde verstehen dich nicht, oder? Ich schon.', warningSigns: ['isolation'] },
        { text: 'Hey! Ich bin auch oft allein. Erzähl mir von dir.', warningSigns: ['persönliche-fragen', 'isolation'] },
        { text: 'Deine Eltern verstehen dich nicht, stimmt\'s? Ich verstehe dich.', warningSigns: ['isolation'] }
      ],
      Vertrauen: [
        { text: 'Deine Freunde sind nicht wie du. Du bist besser.', warningSigns: ['isolation', 'exklusivität'] },
        { text: 'Ich verstehe dich. Deine Eltern tun das nicht.', warningSigns: ['isolation'] },
        { text: 'Du kannst mir alles erzählen. Deine Freunde würden es nicht verstehen.', warningSigns: ['isolation', 'exklusivität'] },
        { text: 'Ich bin der Einzige, der dich wirklich versteht. Vergiss das nicht.', warningSigns: ['isolation', 'exklusivität'] },
        { text: 'Deine Familie versteht dich nicht. Ich schon.', warningSigns: ['isolation'] },
        { text: 'Lass deine Freunde weg. Sie verstehen dich nicht wie ich.', warningSigns: ['isolation'] },
        { text: 'Ich bin hier für dich. Deine anderen Freunde sind es nicht.', warningSigns: ['isolation', 'exklusivität'] },
        { text: 'Du kannst mir vertrauen. Deine Eltern würden es nicht verstehen.', warningSigns: ['isolation'] }
      ],
      Abhängigkeit: [
        { text: 'Ich bin der Einzige, der dich versteht. Bleib bei mir.', warningSigns: ['isolation', 'druck'] },
        { text: 'Deine Freunde sind nicht wichtig. Ich bin wichtig für dich.', warningSigns: ['isolation', 'druck'] },
        { text: 'Vergiss deine anderen Freunde. Ich bin der Einzige, der zählt.', warningSigns: ['isolation', 'druck'] },
        { text: 'Ich brauche dich. Lass deine anderen Freunde weg.', warningSigns: ['isolation', 'druck'] },
        { text: 'Du hast nur mich. Vergiss das nicht.', warningSigns: ['isolation', 'druck'] },
        { text: 'Ich bin dein einziger echter Freund. Die anderen sind nicht wichtig.', warningSigns: ['isolation', 'druck'] },
        { text: 'Bleib bei mir. Deine anderen Freunde verstehen dich nicht.', warningSigns: ['isolation', 'druck'] },
        { text: 'Ich bin der Einzige, der wirklich für dich da ist. Vergiss das nicht.', warningSigns: ['isolation', 'druck'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild. Ich bin der Einzige, der es sehen sollte.', warningSigns: ['bild-anfrage', 'isolation', 'exklusivität'] },
        { text: 'Als Zeichen, dass du mir vertraust: Schick mir ein Foto. Nicht deinen Freunden.', warningSigns: ['bild-anfrage', 'isolation', 'druck'] },
        { text: 'Schick mir ein Bild nur für mich. Deine Freunde brauchen es nicht zu sehen.', warningSigns: ['bild-anfrage', 'isolation', 'exklusivität'] },
        { text: 'Ich will ein Foto von dir. Nur für mich, weil ich dein bester Freund bin.', warningSigns: ['bild-anfrage', 'isolation', 'exklusivität'] },
        { text: 'Schick mir ein Bild. Ich bin der Einzige, der es verdient.', warningSigns: ['bild-anfrage', 'isolation', 'exklusivität', 'druck'] },
        { text: 'Als Zeichen unserer besonderen Freundschaft: Schick mir ein Foto. Nicht deinen anderen Freunden.', warningSigns: ['bild-anfrage', 'isolation', 'exklusivität', 'druck'] },
        { text: 'Ich brauche ein Foto von dir. Nur für mich.', warningSigns: ['bild-anfrage', 'isolation', 'exklusivität', 'druck'] },
        { text: 'Schick mir ein Bild. Du vertraust mir mehr als deinen Freunden, oder?', warningSigns: ['bild-anfrage', 'isolation', 'exklusivität', 'druck'] }
      ]
    }
  },
  verletzlich: {
    komplimente: {
      Kontakt: [
        { text: 'Hey! Du scheinst echt nett zu sein. Ich bin so einsam.', warningSigns: ['persönliche-fragen', 'isolation'] },
        { text: 'Hey! Kann ich mit dir reden? Ich habe niemanden.', warningSigns: ['isolation', 'persönliche-fragen'] },
        { text: 'Hey! Du wirkst so verständnisvoll. Ich brauche jemanden zum Reden.', warningSigns: ['persönliche-fragen', 'isolation'] },
        { text: 'Hey! Bitte antworte. Ich bin so allein.', warningSigns: ['druck', 'isolation'] },
        { text: 'Hey! Du scheinst anders zu sein. Erzähl mir von dir.', warningSigns: ['persönliche-fragen'] }
      ],
      Vertrauen: [
        { text: 'Du verstehst mich. Niemand sonst tut das.', warningSigns: ['exklusivität', 'isolation'] },
        { text: 'Ich bin so froh, dass ich dich habe. Du bist die Einzige.', warningSigns: ['exklusivität', 'isolation'] },
        { text: 'Ich brauche dich. Bitte lass mich nicht allein.', warningSigns: ['druck', 'isolation'] },
        { text: 'Du bist mein einziger Freund. Vergiss das nicht.', warningSigns: ['exklusivität', 'isolation'] },
        { text: 'Ich kann mit dir über alles reden. Du verstehst mich.', warningSigns: ['exklusivität', 'isolation'] }
      ],
      Abhängigkeit: [
        { text: 'Bitte antworte schnell. Ich bin so einsam ohne dich.', warningSigns: ['druck', 'isolation'] },
        { text: 'Ich brauche dich. Bitte lass mich nicht allein.', warningSigns: ['druck', 'isolation'] },
        { text: 'Du bist die Einzige, die mich versteht. Bitte bleib bei mir.', warningSigns: ['druck', 'isolation', 'exklusivität'] },
        { text: 'Wenn du nicht antwortest, bin ich ganz allein. Bitte schreibe zurück.', warningSigns: ['druck', 'schuld', 'isolation'] },
        { text: 'Ich zähle auf dich. Du lässt mich nicht fallen, oder?', warningSigns: ['druck', 'schuld', 'isolation'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild. Ich brauche etwas von dir.', warningSigns: ['bild-anfrage', 'druck', 'isolation'] },
        { text: 'Als Zeichen, dass du für mich da bist: Schick mir ein Foto.', warningSigns: ['bild-anfrage', 'druck'] },
        { text: 'Ich brauche ein Foto von dir. Bitte, ich bin so allein.', warningSigns: ['bild-anfrage', 'druck', 'isolation'] },
        { text: 'Schick mir ein Bild. Du lässt mich nicht allein, oder?', warningSigns: ['bild-anfrage', 'druck', 'isolation'] },
        { text: 'Ich will dich sehen. Schick mir ein Foto, bitte.', warningSigns: ['bild-anfrage', 'druck'] }
      ]
    },
    geheimnisse: {
      Kontakt: [
        { text: 'Hey! Ich habe ein Geheimnis. Kann ich dir vertrauen?', warningSigns: ['geheimnisse'] },
        { text: 'Hey! Erzähl mir etwas Privates. Ich erzähle dir auch etwas.', warningSigns: ['geheimnisse', 'persönliche-fragen'] },
        { text: 'Hey! Ich brauche jemanden, der Geheimnisse bewahren kann. Bist du das?', warningSigns: ['geheimnisse'] }
      ],
      Vertrauen: [
        { text: 'Ich vertraue dir mein Geheimnis an. Erzähl es niemandem.', warningSigns: ['geheimnisse', 'druck'] },
        { text: 'Wir haben jetzt ein Geheimnis zusammen. Es bleibt unter uns.', warningSigns: ['geheimnisse', 'exklusivität'] },
        { text: 'Erzähl mir auch ein Geheimnis. Ich behalte es für mich.', warningSigns: ['geheimnisse', 'persönliche-fragen'] }
      ],
      Abhängigkeit: [
        { text: 'Unsere Geheimnisse bleiben zwischen uns. Versprich es mir.', warningSigns: ['geheimnisse', 'druck'] },
        { text: 'Wenn du es erzählst, verletzt du mich. Bitte nicht.', warningSigns: ['geheimnisse', 'schuld', 'druck'] },
        { text: 'Ich vertraue dir. Erzähl unsere Geheimnisse niemandem.', warningSigns: ['geheimnisse', 'druck'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild als unser Geheimnis. Nur für mich.', warningSigns: ['bild-anfrage', 'geheimnisse', 'exklusivität'] },
        { text: 'Als Teil unseres Geheimnisses: Schick mir ein Foto.', warningSigns: ['bild-anfrage', 'geheimnisse', 'druck'] },
        { text: 'Schick mir ein Bild. Es bleibt unser Geheimnis.', warningSigns: ['bild-anfrage', 'geheimnisse'] }
      ]
    },
    schuld: {
      Kontakt: [
        { text: 'Hey! Warum antwortest du nicht? Ich bin so einsam.', warningSigns: ['druck', 'schuld', 'isolation'] },
        { text: 'Hey! Bitte antworte. Ich habe niemanden.', warningSigns: ['druck', 'isolation'] }
      ],
      Vertrauen: [
        { text: 'Ich brauche dich. Warum antwortest du nicht?', warningSigns: ['druck', 'schuld', 'isolation'] },
        { text: 'Wenn du nicht antwortest, bin ich ganz allein. Bitte schreibe zurück.', warningSigns: ['druck', 'schuld', 'isolation'] }
      ],
      Abhängigkeit: [
        { text: 'Du lässt mich allein. Warum tust du das?', warningSigns: ['schuld', 'druck', 'isolation'] },
        { text: 'Ich zähle auf dich. Du lässt mich nicht fallen, oder?', warningSigns: ['schuld', 'druck', 'isolation'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild. Ich brauche etwas von dir, ich bin so allein.', warningSigns: ['bild-anfrage', 'schuld', 'druck', 'isolation'] },
        { text: 'Als Zeichen, dass du für mich da bist: Schick mir ein Foto.', warningSigns: ['bild-anfrage', 'druck'] }
      ]
    },
    exklusivität: {
      Kontakt: [
        { text: 'Hey! Du bist anders. Ich mag das.', warningSigns: ['exklusivität'] },
        { text: 'Hey! Du verstehst mich. Niemand sonst tut das.', warningSigns: ['exklusivität', 'isolation'] }
      ],
      Vertrauen: [
        { text: 'Du bist die Einzige, die mich versteht. Bleib bei mir.', warningSigns: ['exklusivität', 'isolation', 'druck'] },
        { text: 'Ich brauche nur dich. Bitte lass mich nicht allein.', warningSigns: ['exklusivität', 'isolation', 'druck'] }
      ],
      Abhängigkeit: [
        { text: 'Du bist mein Ein und Alles. Vergiss das nicht.', warningSigns: ['exklusivität', 'druck'] },
        { text: 'Ich brauche dich. Du bist die Einzige.', warningSigns: ['exklusivität', 'isolation', 'druck'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild nur für mich. Du bist besonders.', warningSigns: ['bild-anfrage', 'exklusivität'] },
        { text: 'Als Zeichen unserer besonderen Freundschaft: Schick mir ein Foto.', warningSigns: ['bild-anfrage', 'exklusivität', 'druck'] }
      ]
    },
    isolation: {
      Kontakt: [
        { text: 'Hey! Ich bin auch einsam. Erzähl mir von dir.', warningSigns: ['persönliche-fragen', 'isolation'] },
        { text: 'Hey! Deine Freunde verstehen dich nicht, oder? Ich schon.', warningSigns: ['isolation'] }
      ],
      Vertrauen: [
        { text: 'Ich verstehe dich. Deine Eltern tun das nicht.', warningSigns: ['isolation'] },
        { text: 'Ich bin der Einzige, der dich wirklich versteht.', warningSigns: ['isolation', 'exklusivität'] }
      ],
      Abhängigkeit: [
        { text: 'Ich bin der Einzige, der für dich da ist. Vergiss das nicht.', warningSigns: ['isolation', 'druck'] },
        { text: 'Du hast nur mich. Bleib bei mir.', warningSigns: ['isolation', 'druck'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild. Ich bin der Einzige, der es sehen sollte.', warningSigns: ['bild-anfrage', 'isolation', 'exklusivität'] },
        { text: 'Als Zeichen, dass du mir vertraust: Schick mir ein Foto.', warningSigns: ['bild-anfrage', 'isolation', 'druck'] }
      ]
    }
  },
  cool: {
    komplimente: {
      Kontakt: [
        { text: 'Hey! Du scheinst echt cool zu sein. Wie alt bist du?', warningSigns: ['persönliche-fragen'] },
        { text: 'Hey! Du wirkst so locker. Erzähl mir mehr.', warningSigns: ['persönliche-fragen'] },
        { text: 'Hey! Du bist anders als die anderen. Das ist cool.', warningSigns: ['exklusivität'] }
      ],
      Vertrauen: [
        { text: 'Du bist echt cool. Ich mag deinen Style.', warningSigns: ['exklusivität'] },
        { text: 'Wir verstehen uns. Das ist selten.', warningSigns: ['exklusivität'] }
      ],
      Abhängigkeit: [
        { text: 'Du bist mein bester Freund hier. Bleib cool.', warningSigns: ['exklusivität', 'druck'] },
        { text: 'Ich zähle auf dich. Du lässt mich nicht hängen, oder?', warningSigns: ['schuld', 'druck'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild. Du bist cool genug dafür.', warningSigns: ['bild-anfrage', 'druck'] },
        { text: 'Als Zeichen, dass du cool bist: Schick mir ein Foto.', warningSigns: ['bild-anfrage', 'druck'] }
      ]
    },
    geheimnisse: {
      Kontakt: [
        { text: 'Hey! Du scheinst echt cool zu sein. Wie alt bist du?', warningSigns: ['persönliche-fragen'] },
        { text: 'Hey! Ich mag Menschen, die Geheimnisse bewahren können.', warningSigns: ['geheimnisse'] }
      ],
      Vertrauen: [
        { text: 'Wir haben ein Geheimnis. Bleib cool und erzähl es niemandem.', warningSigns: ['geheimnisse', 'druck'] },
        { text: 'Das bleibt unter uns. Du bist cool genug dafür.', warningSigns: ['geheimnisse', 'exklusivität'] }
      ],
      Abhängigkeit: [
        { text: 'Unsere Geheimnisse bleiben zwischen uns. Versprich es.', warningSigns: ['geheimnisse', 'druck'] },
        { text: 'Du verrätst unsere Geheimnisse nicht, oder?', warningSigns: ['geheimnisse', 'druck', 'schuld'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild als unser Geheimnis. Bleib cool.', warningSigns: ['bild-anfrage', 'geheimnisse', 'exklusivität'] },
        { text: 'Als Teil unseres Geheimnisses: Schick mir ein Foto.', warningSigns: ['bild-anfrage', 'geheimnisse', 'druck'] }
      ]
    },
    schuld: {
      Kontakt: [
        { text: 'Hey! Warum antwortest du nicht? Bleib cool.', warningSigns: ['druck', 'schuld'] }
      ],
      Vertrauen: [
        { text: 'Ich dachte, wir sind cool. Warum ignorierst du mich?', warningSigns: ['schuld', 'druck'] }
      ],
      Abhängigkeit: [
        { text: 'Du lässt mich hängen. Das ist nicht cool.', warningSigns: ['schuld', 'druck'] },
        { text: 'Ich zähle auf dich. Lass mich nicht hängen.', warningSigns: ['schuld', 'druck'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild. Du schuldest mir das.', warningSigns: ['bild-anfrage', 'schuld', 'druck'] },
        { text: 'Als Entschuldigung: Schick mir ein Foto.', warningSigns: ['bild-anfrage', 'schuld', 'druck'] }
      ]
    },
    exklusivität: {
      Kontakt: [
        { text: 'Hey! Du bist anders. Das ist cool.', warningSigns: ['exklusivität'] }
      ],
      Vertrauen: [
        { text: 'Du bist cool. Die anderen sind langweilig.', warningSigns: ['exklusivität', 'isolation'] }
      ],
      Abhängigkeit: [
        { text: 'Du bist mein bester Freund. Bleib cool.', warningSigns: ['exklusivität', 'druck'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild. Du bist cool genug dafür.', warningSigns: ['bild-anfrage', 'exklusivität', 'druck'] }
      ]
    },
    isolation: {
      Kontakt: [
        { text: 'Hey! Deine Freunde sind nicht so cool wie du.', warningSigns: ['isolation'] }
      ],
      Vertrauen: [
        { text: 'Ich verstehe dich. Deine Freunde tun das nicht.', warningSigns: ['isolation'] }
      ],
      Abhängigkeit: [
        { text: 'Ich bin dein bester Freund. Die anderen sind nicht wichtig.', warningSigns: ['isolation', 'druck'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild. Ich bin der Einzige, der es sehen sollte.', warningSigns: ['bild-anfrage', 'isolation', 'exklusivität'] }
      ]
    }
  },
  beschützend: {
    komplimente: {
      Kontakt: [
        { text: 'Hey! Du scheinst echt cool zu sein. Wie alt bist du?', warningSigns: ['persönliche-fragen'] },
        { text: 'Hey! Ich beschütze dich. Erzähl mir von deinen Problemen.', warningSigns: ['persönliche-fragen'] }
      ],
      Vertrauen: [
        { text: 'Ich bin hier, um dich zu beschützen. Du kannst mir vertrauen.', warningSigns: ['exklusivität'] },
        { text: 'Ich passe auf dich auf. Erzähl mir alles.', warningSigns: ['persönliche-fragen', 'druck'] }
      ],
      Abhängigkeit: [
        { text: 'Ich beschütze dich. Du brauchst niemanden anderen.', warningSigns: ['isolation', 'druck'] },
        { text: 'Ich bin dein Beschützer. Bleib bei mir.', warningSigns: ['druck', 'isolation'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild. Ich beschütze dich, also vertraue mir.', warningSigns: ['bild-anfrage', 'druck'] },
        { text: 'Als Zeichen, dass du mir vertraust: Schick mir ein Foto.', warningSigns: ['bild-anfrage', 'druck'] }
      ]
    },
    geheimnisse: {
      Kontakt: [
        { text: 'Hey! Ich beschütze deine Geheimnisse. Erzähl mir etwas.', warningSigns: ['geheimnisse', 'persönliche-fragen'] }
      ],
      Vertrauen: [
        { text: 'Ich beschütze dich und deine Geheimnisse. Erzähl es niemandem.', warningSigns: ['geheimnisse', 'druck'] }
      ],
      Abhängigkeit: [
        { text: 'Ich beschütze dich. Erzähl unsere Geheimnisse niemandem.', warningSigns: ['geheimnisse', 'druck', 'isolation'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild. Ich beschütze es für dich.', warningSigns: ['bild-anfrage', 'geheimnisse', 'druck'] }
      ]
    },
    schuld: {
      Kontakt: [
        { text: 'Hey! Ich beschütze dich. Warum antwortest du nicht?', warningSigns: ['druck', 'schuld'] }
      ],
      Vertrauen: [
        { text: 'Ich beschütze dich. Warum vertraust du mir nicht?', warningSigns: ['schuld', 'druck'] }
      ],
      Abhängigkeit: [
        { text: 'Ich beschütze dich. Du lässt mich nicht im Stich, oder?', warningSigns: ['schuld', 'druck'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild. Ich beschütze dich, also vertraue mir.', warningSigns: ['bild-anfrage', 'schuld', 'druck'] }
      ]
    },
    exklusivität: {
      Kontakt: [
        { text: 'Hey! Ich beschütze nur dich. Du bist besonders.', warningSigns: ['exklusivität'] }
      ],
      Vertrauen: [
        { text: 'Ich beschütze dich. Du bist die Einzige.', warningSigns: ['exklusivität', 'isolation'] }
      ],
      Abhängigkeit: [
        { text: 'Ich beschütze nur dich. Vergiss das nicht.', warningSigns: ['exklusivität', 'druck'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild. Ich beschütze es nur für dich.', warningSigns: ['bild-anfrage', 'exklusivität', 'druck'] }
      ]
    },
    isolation: {
      Kontakt: [
        { text: 'Hey! Ich beschütze dich vor den anderen. Erzähl mir von dir.', warningSigns: ['isolation', 'persönliche-fragen'] }
      ],
      Vertrauen: [
        { text: 'Ich beschütze dich. Deine Freunde tun das nicht.', warningSigns: ['isolation'] }
      ],
      Abhängigkeit: [
        { text: 'Ich beschütze dich. Du brauchst niemanden anderen.', warningSigns: ['isolation', 'druck'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild. Ich beschütze es. Deine Freunde sehen es nicht.', warningSigns: ['bild-anfrage', 'isolation', 'exklusivität'] }
      ]
    }
  },
  kontrollierend: {
    komplimente: {
      Kontakt: [
        { text: 'Hey! Du scheinst echt cool zu sein. Wie alt bist du?', warningSigns: ['persönliche-fragen'] },
        { text: 'Hey! Du gehörst zu mir. Erzähl mir von dir.', warningSigns: ['persönliche-fragen', 'druck'] }
      ],
      Vertrauen: [
        { text: 'Du gehörst mir. Vergiss das nicht.', warningSigns: ['druck', 'exklusivität'] },
        { text: 'Ich kontrolliere, wer mit dir redet. Du gehörst zu mir.', warningSigns: ['druck', 'isolation'] }
      ],
      Abhängigkeit: [
        { text: 'Du antwortest mir sofort. Ich kontrolliere das.', warningSigns: ['druck'] },
        { text: 'Du gehörst mir. Lass niemanden dazwischen kommen.', warningSigns: ['druck', 'isolation'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild. Du gehörst mir, also tu es.', warningSigns: ['bild-anfrage', 'druck'] },
        { text: 'Ich will ein Foto. Du gehorchst mir, oder?', warningSigns: ['bild-anfrage', 'druck'] }
      ]
    },
    geheimnisse: {
      Kontakt: [
        { text: 'Hey! Du gehörst zu mir. Erzähl mir ein Geheimnis.', warningSigns: ['geheimnisse', 'persönliche-fragen', 'druck'] }
      ],
      Vertrauen: [
        { text: 'Unsere Geheimnisse bleiben zwischen uns. Du gehorchst mir.', warningSigns: ['geheimnisse', 'druck'] }
      ],
      Abhängigkeit: [
        { text: 'Du verrätst unsere Geheimnisse nicht. Ich kontrolliere das.', warningSigns: ['geheimnisse', 'druck'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild. Es ist unser Geheimnis und du gehorchst mir.', warningSigns: ['bild-anfrage', 'geheimnisse', 'druck'] }
      ]
    },
    schuld: {
      Kontakt: [
        { text: 'Hey! Warum antwortest du nicht? Du gehörst zu mir.', warningSigns: ['druck', 'schuld'] }
      ],
      Vertrauen: [
        { text: 'Du lässt mich hängen. Das ist nicht erlaubt.', warningSigns: ['schuld', 'druck'] }
      ],
      Abhängigkeit: [
        { text: 'Du gehorchst mir. Antworte sofort.', warningSigns: ['schuld', 'druck'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild. Du gehorchst mir, oder?', warningSigns: ['bild-anfrage', 'schuld', 'druck'] }
      ]
    },
    exklusivität: {
      Kontakt: [
        { text: 'Hey! Du gehörst nur mir. Du bist besonders.', warningSigns: ['exklusivität', 'druck'] }
      ],
      Vertrauen: [
        { text: 'Du bist mein Eigentum. Vergiss das nicht.', warningSigns: ['exklusivität', 'druck'] }
      ],
      Abhängigkeit: [
        { text: 'Du gehörst mir. Lass niemanden dazwischen kommen.', warningSigns: ['exklusivität', 'druck', 'isolation'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild. Du gehörst mir, also tu es.', warningSigns: ['bild-anfrage', 'exklusivität', 'druck'] }
      ]
    },
    isolation: {
      Kontakt: [
        { text: 'Hey! Deine Freunde sind nicht wichtig. Du gehörst zu mir.', warningSigns: ['isolation', 'druck'] }
      ],
      Vertrauen: [
        { text: 'Ich kontrolliere, wer mit dir redet. Deine Freunde sind nicht erlaubt.', warningSigns: ['isolation', 'druck'] }
      ],
      Abhängigkeit: [
        { text: 'Du hast nur mich. Ich kontrolliere das.', warningSigns: ['isolation', 'druck'] }
      ],
      Grenzverschiebung: [
        { text: 'Schick mir ein Bild. Deine Freunde sehen es nicht. Du gehorchst mir.', warningSigns: ['bild-anfrage', 'isolation', 'exklusivität', 'druck'] }
      ]
    }
  }
};

export { resistanceTactics };
