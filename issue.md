# issue

```bash
├── apps
│   ├── main
│   ├── docs
```

## Issue

Navigation in docs causes a page refresh

`<domain>/docs/page/that` -> Click "This Screen" -> page reloads -> `<domain>/docs/page/this`

Navigation in the main zone retains SPA routing

`<domain>/page/that` -> Click "This Screen" -> `<domain>/page/this`

## Fix

Upgrade next to `^12.2.0`

```json
    "next": "^12.2.0",
```
