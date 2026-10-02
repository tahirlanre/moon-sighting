// Moon sighting log. This is the only file you need to edit.
//
// When a new month is announced, add one line to the END of the list:
//
//   { year: 1448, month: "Jumada al-Ula", sighted: "2026-10-11" },
//
// "sighted" is the evening the new moon was seen (YYYY-MM-DD).
// The 1st of the month is the following day.
//
// If the moon was NOT seen on the evening of the 29th, the month completes
// 30 days, so enter the next evening instead (the evening of the 30th).
//
// The page shows days 1-29 of the latest month. The 30th only appears once
// the next line is added, because that is when the month's length is known.

//
// Source: decisions of the Crescent Department (دائرة الأهلة) of the Saudi
// Supreme Court, published by the Ministry of Justice. Each month's decision
// is the next itemId at:
//   https://www.moj.gov.sa/ar/MediaCenter/News/Pages/SupremeCourtNewsDetails.aspx?itemId=85

const SIGHTINGS = [
  { year: 1448, month: "Muharram",       sighted: "2026-06-15" }, // decision 208: sighted
  { year: 1448, month: "Safar",          sighted: "2026-07-14" }, // decision 209: sighted
  { year: 1448, month: "Rabi' al-Awwal", sighted: "2026-08-13" }, // decision 210: not sighted 12 Aug, Safar completed 30 days
  { year: 1448, month: "Rabi' al-Thani", sighted: "2026-09-11" }, // decision 211: sighted
];

// Month names, for copy and paste:
//   Muharram, Safar, Rabi' al-Awwal, Rabi' al-Thani, Jumada al-Ula,
//   Jumada al-Akhirah, Rajab, Sha'ban, Ramadan, Shawwal, Dhul Qa'dah, Dhul Hijjah
