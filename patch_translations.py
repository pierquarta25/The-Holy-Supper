import re

with open('src/app/i18n/translations.ts', 'r') as f:
    ts = f.read()

# Update the interface
ts = ts.replace('finalCtaButton: string;', 'finalCtaButton: string; impactFooter1?: string; impactFooter2?: string;')

# We will just do a blind regex to add the Italian string to every language object (so it compiles, and it defaults to Italian if they didn't translate it)
# We can search for `finalCtaButton: "..."` and append the new fields
ts = re.sub(r'(finalCtaButton:\s*"[^"]*")', r'\1, impactFooter1: "L\'Uganda è uno dei luoghi che ha ispirato questa visione — un\'immagine dell\'impatto che desideriamo estendere a molti paesi man mano che l\'azienda cresce.", impactFooter2: "La nostra preghiera è che ogni bicchierino che forniamo possa un giorno aiutare a rafforzare le chiese locali e creare opportunità per servire persone al di là di esse."', ts)

with open('src/app/i18n/translations.ts', 'w') as f:
    f.write(ts)
