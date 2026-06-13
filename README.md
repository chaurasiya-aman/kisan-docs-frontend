# KisanDoc Plant Frontend

A Vite + React single-page frontend for a plant disease assistance app.

The app includes disease scan UI, weather-based risk forecast screens, a voice assistant mockup, community disease reports, farming tips, and contact/support pages.

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Project Structure

- `src/main.jsx` mounts the React app.
- `src/App.jsx` defines the route layout with the shared navbar and footer.
- `src/pages` contains route-level screens.
- `src/components` contains reusable UI pieces such as cards, buttons, badges, upload controls, and forms.

## Notes

The current app is frontend-only. Disease detection, forecasts, voice responses, community reports, and contact submission are demo interactions backed by local React state and static data.
