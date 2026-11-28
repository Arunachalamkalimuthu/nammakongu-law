# Guide drafts

The guides in this folder are drafts. They are **not on the website**, because the site builds guides only from `src/content/guides/`.

Adv. P. Kalimuthu must check each one before it is published.

## To publish a draft

1. **Fix what he corrects.** Each `[CHECK]` mark is a fact to confirm. Remove the mark once confirmed.
2. **Remove the draft comment** at the top of the file.
3. **Add his name as reviewer.** Add `reviewer: 'p-kalimuthu'` to the front matter, and set `published` and `updated` to the day it goes live.
4. **Move the file** into `src/content/guides/`.
5. **Build and check.** Run `npm run build`, then check the guide page at phone width and at desktop width.
