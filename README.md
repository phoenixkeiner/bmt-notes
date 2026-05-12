# BMT Notes

Muay Thai combo reference for Bangkok Muay Thai students. Browse combos by belt, test yourself with flashcards and run timed drills.

Live at: https://phoenixkeiner.github.io/bmt-notes/

## Features

- **Notes** - Cumulative combo list by belt (White through Black)
- **Flashcards** - Shuffled flip-card deck scoped to selected belt
- **Drill** - Timed combo practice with a 10s motivational countdown

Strikes are color coded: left side in blue, right side in red. Toggle between Orthodox and Southpaw stance, colors and sides update automatically. Switch kicks flip the stance mid-combo.

## Adding Combos

Edit `src/data/combos.ts`. Each combo needs a `name`, `combo` string (comma-separated strikes), and `seconds` (5, 10, or 30).
