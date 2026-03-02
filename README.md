# Ödev 1 - ToDo App (React)

CodePen’deki TodoMVC tasarımının React ile çalışır hâle getirilmiş sürümü.

**Referanslar:**
- [TodoMVC – dmitrysharabin](https://codepen.io/dmitrysharabin/pen/MWgQNYZ)
- [TodoMVC – mehmetseven](https://codepen.io/mehmetseven/pen/OJRzLjV) (HTML/CSS sadeleştirilmiş)

## Özellikler

- **Yeni todo:** Üstteki input’a yazıp Enter ile ekleme
- **Tamamla / geri al:** Checkbox ile tek öğeyi işaretleme
- **Tümünü işaretle:** “Mark all as complete” ile hepsini tamamla / hepsini aç
- **Silme:** Öğenin üzerine gelince görünen × butonu
- **Düzenleme:** Öğeye çift tıklayıp metni değiştirme (Enter kaydeder, Escape iptal)
- **Filtreler:** All / Active / Completed
- **Clear completed:** Tamamlananları toplu silme
- **Sayacı:** “X item(s) left”

## Teknolojiler

- React 18
- Vite 5
- TodoMVC HTML/CSS yapısı (Mavo ile ilgili tanımlar kaldırıldı)

## Çalıştırma

```bash
cd todo-app
npm install
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini açın.

## Build

```bash
npm run build
npm run preview
```

## Dosya yapısı

```
todo-app/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css      # TodoMVC stilleri
    └── components/
        ├── Header.jsx
        ├── TodoList.jsx
        ├── TodoItem.jsx
        └── Footer.jsx
```
