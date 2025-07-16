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

## 🙋‍♂️ ผู้พัฒนา

Created by [Ratchaphong](https://github.com/ratchaphong)

หากมีคำถามหรือข้อเสนอแนะสามารถเปิด issue หรือ pull request ได้เลยครับ 🙏
