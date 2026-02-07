const questions = [

{ sentence: 'Ich sehe Hund.', options: ['der','den','dem','die'], answer: 'den', hint: 'Akkusativ (sehen)' },

{ sentence: 'Ich gebe Frau ein Buch.', options: ['der','die','dem','den'], answer: 'der', hint: 'Dativ (geben)' },

{ sentence: 'Ich gehe mit Mann.', options: ['der','den','dem'], answer: 'dem', hint: 'Dativ (mit)' },

{ sentence: 'Ich kaufe Äpfel.', options: ['die','den','dem'], answer: 'die', hint: 'Akkusativ Plural' },

{ sentence: 'Ich schreibe Brief.', options: ['ein','einen','dem'], answer: 'einen', hint: 'Akkusativ' },

{ sentence: 'Ich helfe Kind.', options: ['dem','das','den'], answer: 'dem', hint: 'Dativ (helfen)' },

{ sentence: 'Ich lege das Buch auf Tisch.', options: ['der','den','dem'], answer: 'den', hint: 'Akkusativ Richtung' },

{ sentence: 'Ich danke Lehrerin.', options: ['der','die','dem'], answer: 'der', hint: 'Dativ (danken)' },

{ sentence: 'Ich male Haus.', options: ['das','den','dem'], answer: 'das', hint: 'Akkusativ' },

{ sentence: 'Ich spreche mit Freunden.', options: ['die','den','dem'], answer: 'den', hint: 'Dativ Plural' },

{ sentence: 'Er besucht Freund.', options: ['der','den','dem'], answer: 'den', hint: 'Akkusativ (besuchen)' },

{ sentence: 'Sie hilft Mutter.', options: ['die','der','den'], answer: 'der', hint: 'Dativ (helfen)' },

{ sentence: 'Wir sehen Film.', options: ['der','den','dem'], answer: 'den', hint: 'Akkusativ' },

{ sentence: 'Ich fahre mit Bus.', options: ['dem','den','der'], answer: 'dem', hint: 'Dativ (mit)' },

{ sentence: 'Er bringt Kind ein Geschenk.', options: ['das','dem','den'], answer: 'dem', hint: 'Dativ (bringen кому?)' },

{ sentence: 'Sie kauft Blume.', options: ['die','der','den'], answer: 'die', hint: 'Akkusativ' },

{ sentence: 'Ich antworte Lehrer.', options: ['dem','den','der'], answer: 'dem', hint: 'Dativ (antworten)' },

{ sentence: 'Wir haben Garten.', options: ['der','den','dem'], answer: 'den', hint: 'Akkusativ' },

{ sentence: 'Er spricht mit Kollegen.', options: ['die','den','dem'], answer: 'den', hint: 'Dativ Plural' },

{ sentence: 'Sie sucht Schlüssel.', options: ['der','den','dem'], answer: 'den', hint: 'Akkusativ' },

{ sentence: 'Ich vertraue Freund.', options: ['dem','den','der'], answer: 'dem', hint: 'Dativ (vertrauen)' },

{ sentence: 'Er kauft Computer.', options: ['der','den','dem'], answer: 'den', hint: 'Akkusativ' },

{ sentence: 'Sie gratuliert Bruder.', options: ['dem','den','der'], answer: 'dem', hint: 'Dativ (gratulieren)' },

{ sentence: 'Wir hören Musik.', options: ['die','der','den'], answer: 'die', hint: 'Akkusativ' },

{ sentence: 'Ich folge Auto.', options: ['dem','das','den'], answer: 'dem', hint: 'Dativ (folgen)' },

{ sentence: 'Er braucht Stuhl.', options: ['der','den','dem'], answer: 'den', hint: 'Akkusativ' },

{ sentence: 'Sie begegnet Nachbar.', options: ['dem','den','der'], answer: 'dem', hint: 'Dativ (begegnen)' },

{ sentence: 'Ich esse Apfel.', options: ['der','den','dem'], answer: 'den', hint: 'Akkusativ' },

{ sentence: 'Wir danken Team.', options: ['dem','das','den'], answer: 'dem', hint: 'Dativ (danken)' },

{ sentence: 'Er findet Weg.', options: ['der','den','dem'], answer: 'den', hint: 'Akkusativ' },

{ sentence: 'Sie hilft Freundin.', options: ['die','der','den'], answer: 'der', hint: 'Dativ' },

{ sentence: 'Ich nehme Kaffee.', options: ['der','den','dem'], answer: 'den', hint: 'Akkusativ' },

{ sentence: 'Wir antworten Chef.', options: ['dem','den','der'], answer: 'dem', hint: 'Dativ' },

{ sentence: 'Er sieht Vogel.', options: ['der','den','dem'], answer: 'den', hint: 'Akkusativ' },

{ sentence: 'Sie schreibt Freund eine Mail.', options: ['dem','den','der'], answer: 'dem', hint: 'Dativ (кому?)' },

// --- АККУСАТИВ / ДАТИВ БАЗА ---

{ sentence: 'Ich sehe Hund.', options: ['der','den','dem','des'], answer: 'den', hint: 'Akkusativ (sehen)' },

{ sentence: 'Ich helfe Kind.', options: ['das','den','dem','des'], answer: 'dem', hint: 'Dativ (helfen)' },

{ sentence: 'Ich kaufe Apfel.', options: ['der','den','dem','des'], answer: 'den', hint: 'Akkusativ' },

{ sentence: 'Ich danke Lehrer.', options: ['der','den','dem','des'], answer: 'dem', hint: 'Dativ (danken)' },

// --- DATIV PRÄPOSITIONEN ---

{ sentence: 'Ich fahre mit Bus.', options: ['der','den','dem','des'], answer: 'dem', hint: 'mit + Dativ' },

{ sentence: 'Er wohnt bei Eltern.', options: ['die','den','der','dem'], answer: 'den', hint: 'bei + Dativ Plural' },

/* заміна: von + dem = vom */
{ sentence: 'Das Geschenk ist Freund.', options: ['vom','von der','von den'], answer: 'vom', hint: 'von + Dativ (vom = von dem)' },

/* заміна: zu + dem = zum */
{ sentence: 'Ich gehe Arzt.', options: ['zum','zur','zu den'], answer: 'zum', hint: 'zu + Dativ (zum = zu dem)' },

{ sentence: 'Sie kommt aus Schule.', options: ['die','der','den','dem'], answer: 'der', hint: 'aus + Dativ' },

{ sentence: 'Er lernt Deutsch seit Jahr.', options: ['das','dem','den','des'], answer: 'dem', hint: 'seit + Dativ' },

/* додано: in + dem = im */
{ sentence: 'Ich bin Park.', options: ['im','in der','in dem'], answer: 'im', hint: 'in + Dativ (im = in dem)' },

{ sentence: 'Das Buch liegt Regal.', options: ['im','in der','in dem'], answer: 'im', hint: 'in + Dativ (im = in dem)' },

/* додано: an + dem = am */
{ sentence: 'Wir sitzen Tisch.', options: ['am','an der','an dem'], answer: 'am', hint: 'an + Dativ (am = an dem)' },

{ sentence: 'Ich warte Bahnhof.', options: ['am','an der','an dem'], answer: 'am', hint: 'an + Dativ (am = an dem)' },

// --- AKKUSATIV PRÄPOSITIONEN ---

{ sentence: 'Das Geschenk ist für Mutter.', options: ['die','der','den','dem'], answer: 'die', hint: 'für + Akkusativ' },

{ sentence: 'Er geht ohne Schlüssel.', options: ['der','den','dem','des'], answer: 'den', hint: 'ohne + Akkusativ' },

{ sentence: 'Wir gehen durch Park.', options: ['der','den','dem','des'], answer: 'den', hint: 'durch + Akkusativ' },

{ sentence: 'Er fährt gegen Wand.', options: ['die','der','den','dem'], answer: 'die', hint: 'gegen + Akkusativ' },

{ sentence: 'Der Hund läuft um Haus.', options: ['das','dem','den','des'], answer: 'das', hint: 'um + Akkusativ' },

{ sentence: 'Ich bleibe bis Montag.', options: ['der','den','dem','des'], answer: 'den', hint: 'bis + Akkusativ' },

// --- MIX ---

{ sentence: 'Ich spreche mit Freund.', options: ['der','den','dem','des'], answer: 'dem', hint: 'mit + Dativ' },

{ sentence: 'Sie kauft Blumen für Freundin.', options: ['die','der','den','dem'], answer: 'die', hint: 'für + Akkusativ' },

/* заміна: zu + dem = zum */
{ sentence: 'Wir fahren Bahnhof.', options: ['zum','zur','zu den'], answer: 'zum', hint: 'zu + Dativ (zum = zu dem)' },

{ sentence: 'Er geht ohne Jacke.', options: ['die','der','den','dem'], answer: 'die', hint: 'ohne + Akkusativ' }

];
