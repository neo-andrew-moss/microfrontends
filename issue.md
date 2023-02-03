# issue

```bash
├── apps
│   ├── main
│   ├── zone2
```

## Issue

Navigation in zone2 causes a page refresh

`<domain>/zone2/page/that` -> Click "This Screen" -> page reloads -> `<domain>/zone2/page/this`

Navigation in the main zone retains SPA routing

`<domain>/page/that` -> Click "This Screen" -> `<domain>/page/this`

## Fix

Upgrade next to `^12.2.0`

```json
    "next": "^12.2.0",
```
