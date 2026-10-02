# Moon Sighting Calendar

A single page that shows today's Hijri date and the months of the year so far, based on the Saudi Supreme Court's monthly moon sighting decisions.

Live site: https://tahirlanre.github.io/moon-sighting/

The page only ever shows what is known. The latest month shows days 1–29; the 30th appears once the next month's sighting is entered, because that is when the month's length is known. If the data runs out, the page says "Awaiting moon sighting" rather than guessing.

## Updating each month

Everything lives in [`sightings.js`](sightings.js). When the new month is announced, add one line to the end of the list and commit:

```js
{ year: 1448, month: "Jumada al-Ula", sighted: "2026-10-10" },
```

- `sighted` is the evening the moon was seen (`YYYY-MM-DD`). The 1st of the month is the following day.
- If the moon was **not** seen on the evening of the 29th, the month completes 30 days. Enter the next evening instead (the evening of the 30th), so the 1st still works out as the day after.
- The easiest way is to [edit the file on GitHub](https://github.com/tahirlanre/moon-sighting/edit/main/sightings.js) and commit. GitHub Pages redeploys in about a minute.

Month names, for copy and paste: Muharram, Safar, Rabi' al-Awwal, Rabi' al-Thani, Jumada al-Ula, Jumada al-Akhirah, Rajab, Sha'ban, Ramadan, Shawwal, Dhul Qa'dah, Dhul Hijjah.

If a typo makes a month come out at anything other than 29 or 30 days, the page shows a warning at the top.

### Where the dates come from

The Crescent Department (دائرة الأهلة) of the Saudi Supreme Court publishes a decision for every month on the Ministry of Justice site. Each month is the next `itemId`:

https://www.moj.gov.sa/ar/MediaCenter/News/Pages/SupremeCourtNewsDetails.aspx?itemId=85

Each decision names the evening the crescent was looked for, whether it was seen, and the Gregorian date of the 1st. Searching Google for the Arabic title works too: `قرار دائرة الأهلة بالمحكمة العليا لشهر <month> <year> هـ`.

## Previewing

Add `?today=YYYY-MM-DD` to the URL to see the page as it would look on another date, for example https://tahirlanre.github.io/moon-sighting/?today=2026-10-11

To run it locally:

```bash
python3 -m http.server 8000
```

then open http://localhost:8000.

## Deployment

GitHub Pages serves the `main` branch from the repository root. There is no build step.
