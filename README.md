# Habesha Wasib — Photo & Video Promotion

Website Afaan Oromoo kan `@Habeshwasibbot` waliin wal qabatu.

## 1. Install
Node.js 18+ qabaachuu mirkaneessi.

```bash
npm install
```

## 2. Run
```bash
npm run dev
```

Browser:
http://localhost:3000

## 3. Video poster
Suuraan ati erge `public/videos/promotion.jpg` keessatti kaa'ameera.

Video dhugaa yoo qabdu, `public/videos/promotion.mp4` keessa kaa'i. Sana booda `<video controls poster="/videos/promotion.jpg">` fayyadamuun ni danda'ama.

## 4. Telegram
Website keessatti link:
https://t.me/Habeshwasibbot

Telegram Bot API token public code keessa hin kaa'in. Token yeroo itti aanu `.env.local` keessatti fayyadami.

## 5. Tarkaanfii itti aanu
- Admin login
- Photo/video upload
- Database
- Telegram Bot API
- Cloud storage
- Deployment


## Media dabalame
`public/videos/gold-vip-package.jpg` jechuun suuraa ati erge irraa video poster qophaa'e dha. Video MP4 dhugaa yoo qabaatte maqaa `gold-vip-package.mp4` jedhuun bakka kana keessa kaa'i; booda player dhugaa itti hidha.


## Video dhugaa
`public/videos/promotion.mp4` keessatti video ati upload goote galfameera. Website keessatti player dhugaa (`controls`) qaba.


`public/videos/promotion-2.mp4` — video lammaffaa ati upload goote.


## Duration of videos
Website keessatti duration video harkaan barreessuu hin barbaachisu. Browser'n metadata video irraa duration ofumaan dubbisee, fakkeenyaaf `1:54`, `10:04` ykn `1:02:15` jechuun agarsiisa. Video haaraa yeroo upload gootu duration isaa ofumaan update ta'a.


`promotion-4.mp4` — video haaraa. Duration metadata irraa ofumaan website irratti mul'ata.