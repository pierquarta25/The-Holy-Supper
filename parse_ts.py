with open('src/app/i18n/translations.ts', 'r') as f:
    text = f.read()

# Let's see if we can find the old corrupted translations.ts backup? No we don't have one.
# Wait, did we overwrite it entirely?
# Yes, we did: `with open('src/app/i18n/translations.ts', 'w') as f: f.write(new_ts)`
