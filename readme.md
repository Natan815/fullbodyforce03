# FullBodyForce — strona-wizytówka

## Szybki start
1) Pobierz ZIP z końca tej wiadomości i rozpakuj.  
2) Otwórz `index.html` w przeglądarce.  
3) Podmień treści i obrazki w `/assets/img/`.  
4) Wdróż na Netlify/Vercel/GitHub Pages.

## Edycja treści
- Teksty: edytuj `/index.html` w sekcjach (`O mnie`, `Korzyści`, `Metodyka`, `Oferta`, `FAQ`, `Kontakt`).
- Ceny i pakiety: sekcja `#oferta`. Klasa `.recommended` wyróżnia pakiet — obecnie **Pro (8 treningów)**.
- Social: IG w linkach do `https://www.instagram.com/n_grusiecki`.

## Logo i zdjęcia
- Podmień pliki w `/assets/img/`:
  - `logo.svg` — własne logo.
  - `trainer.jpg` — zdjęcie hero (~1600×2000, webp/jpg).
  - `og-cover.jpg` — podgląd linków (1200×630).
  - `cert-*.png` — certyfikaty.
  - `favicon.png` — 32×32 px.

## Kolory i fonty
- Zmieniaj w `assets/css/styles.css` w `:root`.
- Fonty: Poppins (nagłówki), Inter (treść) — Google Fonts w `<head>`.

## Formularz — bez backendu
### Formspree
1. Utwórz formularz. Skopiuj endpoint `https://formspree.io/f/xxxxxxx`.
2. W `<form>` dodaj `action` i `method="POST"` lub użyj `fetch` w `main.js`.

### EmailJS
1. Dodaj skrypt EmailJS w `<head>` i `emailjs.init({ publicKey: '...' })`.
2. Wywołaj `emailjs.send(...)` w `main.js`.

## SEO
- Uzupełnij domenę w `canonical` i obraz `og-cover.jpg`.
- JSON-LD: `LocalBusiness` i `Person` w `<head>`.

## A11y
- Alt do obrazów, focus-visible, semantyka H1–H3.

## Deploy
### Netlify
- Panel → Add new site → Deploy manually → przeciągnij folder.
### Vercel
- Import repo albo przeciągnij folder. Static site.
### GitHub Pages
- Repo → Settings → Pages → Source: `main` → root.

## GA4 (opcjonalnie)
Wstaw snippet `gtag` w `<head>` i podmień `G-XXXXXXX`.
