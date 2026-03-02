# Ödev 1 - ToDo App - Teslim

**ToDo uygulaması** — CodePen’de paylaşılan çalışmanın React ile çalışır hâle getirilmiş sürümü.

---

## Proje hakkında

Orijinal tasarım (HTML & CSS) referans alınmış; gereksinimlere uygun olarak React ile yeniden yazılmıştır. Dosya ve klasör isimlendirmesi projeye göre düzenlenebilir.

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
├── ODEV1-ACIKLAMA.md   # Ödev açıklaması (bu dosya)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css       # TodoMVC stilleri
    └── components/
        ├── Header.jsx
        ├── TodoList.jsx
        ├── TodoItem.jsx
        └── Footer.jsx
```

## Teslim

Bu klasörü (`todo-app`) zip’leyerek teslim edebilirsiniz. Önce `npm install` ve `npm run dev` ile çalıştığından emin olun.
