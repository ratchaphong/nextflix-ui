# 🎬 Nextflix UI

Clone เว็บไซต์ Netflix โดยใช้ Next.js + React + TypeScript  
มีฟีเจอร์ carousel, วิดีโอ auto play, modal แบบ Netflix

## ✅ ฟีเจอร์หลัก

- แสดงภาพยนตร์แบบ carousel
- Hover แล้วแสดงวิดีโอเล่นอัตโนมัติ
- แสดง modal ซูมรายละเอียดเมื่อคลิก
- ระบบแปลภาษา (i18n) รองรับหลายภาษา
- ใช้ Zustand สำหรับ state management
- UI รองรับ responsive design
- รองรับ JWT token สำหรับเข้าสู่ระบบ
- มีฟีเจอร์ **"Remember Me"** (เก็บ token ไว้ใน `localStorage` เพื่อให้ผู้ใช้ไม่ต้อง login ใหม่)
- Token จะหมดอายุอัตโนมัติหลัง [เช่น 1 ชั่วโมง] หากไม่เลือก Remember Me

## 🧰 เทคโนโลยีที่ใช้

- Next.js 15 (App Router)
- React 19
- TypeScript 5
- Zustand
- Formik + Yup
- next-intl (i18n)
- CSS Modules (.module.css)
- **Tailwind CSS** (ผ่าน @apply ใน CSS Modules)

## 🚀 เริ่มต้นใช้งาน

```bash
git clone https://github.com/ratchaphong/nextflix-ui.git
cd nextflix-ui
yarn install
yarn dev
```

## 📂 โครงสร้างโปรเจกต์

```bash
/
├── app/
│ └── layout.tsx, page.tsx ...
├── components/
│ └── Header.tsx, MovieCard.tsx, ...
├── hooks/
│ └── useDashboard.ts
├── store/
│ └── movieStore.ts
├── public/
│ └── รูปภาพ/ไอคอน
├── styles/
│ └── \*.module.css
└── README.md
```

## 🔗 โปรเจกต์ที่เกี่ยวข้อง

👉 **Repository ฝั่ง Backend**: [Nextflix Gateway (ระบบ Microservices ด้วย NestJS)](https://github.com/ratchaphong/nextflix-gw)

## 🙋‍♂️ ผู้พัฒนา

Created by [Ratchaphong](https://github.com/ratchaphong)

หากมีคำถามหรือข้อเสนอแนะสามารถเปิด issue หรือ pull request ได้เลยครับ 🙏

# 🎬 Nextflix UI

A Netflix-style clone built with **Next.js + React + TypeScript**, supporting multi-language, auto-playing trailers, and interactive modal transitions just like the real Netflix interface.

## ✅ Features

- Movie display in carousel format
- Auto-play trailer video on hover
- Expandable modal for detailed movie info
- Internationalization (i18n) with `next-intl`
- Responsive UI design (mobile & desktop)
- JWT authentication with **"Remember Me"** option
- Automatic token expiration after [e.g., 1 hour] if Remember Me is unchecked
- State management with Zustand
- Built with `Next.js 15 (App Router)` and `React 19`

## 🧰 Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript 5
- Zustand
- Formik + Yup
- next-intl (i18n)
- CSS Modules (`.module.css`)
- Tailwind CSS (used via `@apply` in modules)

## 🚀 Getting Started

```bash
git clone https://github.com/ratchaphong/nextflix-ui.git
cd nextflix-ui
yarn install
yarn dev
```

## 📁 Project Structure

```bash
/
├── app/
│ └── layout.tsx, page.tsx ...
├── components/
│ └── Header.tsx, MovieCard.tsx, ...
├── hooks/
│ └── useDashboard.ts
├── store/
│ └── movieStore.ts
├── public/
│ └── รูปภาพ/ไอคอน
├── styles/
│ └── \*.module.css
└── README.md

```

## 🔗 Related Projects

👉 **Backend Repository**: <a href="https://github.com/ratchaphong/nextflix-gw" target="_blank" rel="noopener noreferrer">Nextflix Gateway (NestJS Microservices)</a>

## 🙋‍♂️ Author

Created by Ratchaphong
Feel free to open issues or submit pull requests for improvements 🙌
