# Dub Nectar — Band website

A simple, static website for the band **Dub Nectar** with a dark theme and warm accent (nectar gold).

## Pages

- **Home** (`index.html`) — Hero, short about, and links to Events, Media, and Contact
- **Events** (`events.html`) — Upcoming shows with date, venue, and ticket links (sample dates; edit to match real gigs)
- **Media** (`media.html`) — Placeholders for music (Spotify, Bandcamp, etc.) and videos (YouTube, Vimeo); add your real links and thumbnails
- **Contact** (`contact.html`) — Contact form plus email and social links (replace `hello@dubnectar.com` and social URLs with yours)

## How to run locally

Open any page in a browser, or use a local server:

```bash
# From this folder, e.g. with Python:
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Customizing

1. **Events** — Edit the event items in `events.html` (dates, venues, ticket URLs).
2. **Media** — In `media.html`, add real track/video titles, embed or link to players, and replace placeholder “Listen” / “Watch” links.
3. **Contact** — The form is set up to use **Formspree** and send submissions to **booking@801familystudios.com**. To finish setup:
   - Go to [formspree.io](https://formspree.io) and sign up (free).
   - Click **New form**, set the form name (e.g. “Dub Nectar contact”), and set **Send submissions to** to `booking@801familystudios.com`.
   - Copy your form ID (the part after `/f/` in the form’s action URL Formspree shows you).
   - In `contact.html`, find the form and replace `YOUR_FORM_ID` in the `action` attribute with your Formspree form ID (e.g. `action="https://formspree.io/f/abcdexyz"`).
   - Save, commit, and push. New submissions will be emailed to booking@801familystudios.com.
4. **Styles** — Colors and fonts are in `css/styles.css` (see `:root` at the top). You can add a favicon by placing `favicon.ico` in the project root and adding `<link rel="icon" href="favicon.ico">` in each page’s `<head>`.

No build step required; everything is plain HTML and CSS.
