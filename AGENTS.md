# Agent notes

A static page that shows today's Hijri date and the months of the current Hijri year, driven by one data file. Live at https://tahirlanre.github.io/moon-sighting/.

## Ground rules

- **Only confirmed dates.** The page shows what has been announced, never a prediction. The latest month shows days 1–29; the 30th appears only once the next month's entry exists. If the data runs out, the page says "Awaiting moon sighting". Do not add projected or "expected" dates unless the owner asks; this was considered and deliberately left out.
- **Source of truth is the Saudi Supreme Court.** Dates follow the monthly decisions of its Crescent Department (دائرة الأهلة), published by the Ministry of Justice. Not Umm al-Qura calculations, not other countries' sightings, not astronomical estimates.
- **No build step, no dependencies, no framework.** Two files (`index.html`, `sightings.js`) served as-is by GitHub Pages from the root of `main`. Keep it that way.
- **Keep updating trivial.** The owner updates the site by adding one line to `sightings.js`, usually in the GitHub web editor. Any change must preserve that.

## Files

- `sightings.js`: the data. One entry per month, chronological. Edit this for monthly updates.
- `index.html`: markup, styles and logic in one file. Vanilla JavaScript, no dependencies.
- `README.md`: instructions for the owner. Keep it in sync if the data format changes.

## Data format

```js
{ year: 1448, month: "Rabi' al-Thani", sighted: "2026-09-11", source: MOJ + 85 },
```

- `sighted` is the **evening the moon was seen**. The 1st of the month is the following day. Getting this off by one is the most likely mistake.
- If the moon was not seen on the 29th evening, the month completes 30 days. The entry then holds the evening of the 30th, so the 1st still works out as the day after. The page detects this case itself (previous month ran 30 days) and words it as "Began after 30 days of …" rather than "Sighted".
- `source` is optional: a URL to the announcement, rendered as a link. `MOJ + <itemId>` builds the Ministry of Justice link.
- A month that works out to anything other than 29 or 30 days triggers a warning banner on the page. Treat it as a data error.

## Finding the decisions

Each month's decision is a page on the Ministry of Justice site with a sequential `itemId`:

https://www.moj.gov.sa/ar/MediaCenter/News/Pages/SupremeCourtNewsDetails.aspx?itemId=85

itemId 82–85 are Muharram to Rabi' al-Thani 1448. The text states the evening the crescent was looked for, whether it was seen (ثبوت رؤية) or not (عدم ثبوت رؤية), and the Gregorian date of the 1st. English searches and plain HTTP fetches usually fail to find these; open the URL in a browser, or Google the Arabic title `قرار دائرة الأهلة بالمحكمة العليا لشهر <month> <year> هـ`. The Supreme Court issues a decision every month, not only for Ramadan and Dhul Hijjah.

## How the page computes dates

All date arithmetic is on UTC midnights so daylight saving never shifts a day. "Today" is the viewer's local calendar date. Each month's length is the gap to the next entry's start; the last entry is open-ended and shown as 29 days. The current Hijri year is shown expanded; earlier years in the file collapse into `<details>`.

## Verifying changes

- Serve the folder locally: `python3 -m http.server 8000`, then open http://localhost:8000.
- Append `?today=YYYY-MM-DD` to preview any date. Check at least: a normal day, the day after the latest month's 29th (should say "Awaiting moon sighting"), and a day in a month that followed a 30-day month.
- Check the browser console for errors and the page for the warning banner.
- Check phone width; the 7-column grid must not overflow.

## Deploying

Push to `main`. GitHub Pages rebuilds in under a minute. Confirm with:

```bash
gh api repos/tahirlanre/moon-sighting/pages/builds/latest --jq .status
```
