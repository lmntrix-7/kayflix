# KayFlix Birthday Website

A pure HTML/CSS/JavaScript birthday website for Kay's 24th birthday.

## What changed from the old version

- No Leaflet map.
- No external map dependency.
- The ending is now a horizontal timeline.
- The timeline is automatically generated from `memories` in `js/data.js`.
- Photos and videos can live together in `assets/photos/`.

## Folder structure

```text
kayflix-birthday/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── data.js
│   └── app.js
└── assets/
    ├── photos/
    └── music/
```

## How to add photos and videos

Put everything in:

```text
assets/photos/
```

Examples:

```text
assets/photos/little-kay-1.jpg
assets/photos/school-video.mp4
assets/photos/birthday-video.mp4
```

Then open:

```text
js/data.js
```

Each memory has a `media` array:

```js
media: [
  'assets/photos/birthday-1.jpg',
  'assets/photos/birthday-2.jpg',
  'assets/photos/birthday-video.mp4'
]
```

The website automatically detects `.mp4` and plays it as a video.

## How the timeline works

The timeline is built from the same memories.

Each memory has:

```js
timelineDate: '2024-02'
```

Accepted formats:

```text
2002
2018-09
2024-02-14
```

The website sorts the timeline from earliest to latest.

## How to change the timeline snapshot

The timeline uses the memory `cover` image/video:

```js
cover: 'assets/photos/birthday-cover.jpg'
```

You can also use a video cover:

```js
cover: 'assets/photos/birthday-video.mp4'
```

## How to add music

Put your music file here:

```text
assets/music/background.mp3
```

The music button will then work.

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Upload all files from this folder.
3. Go to repository Settings.
4. Open Pages.
5. Under Build and deployment, choose Deploy from branch.
6. Select `main` and `/root`.
7. Save.
8. GitHub will give you a public website link.

## Main file to edit

Most personal content is in:

```text
js/data.js
```

That is where you edit:

- chapter names
- memory titles
- memory stories
- media files
- timeline dates
- achievements
- future goals
