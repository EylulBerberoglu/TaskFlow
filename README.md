
# TaskFlow - Görev Yönetim Sistemi API

TaskFlow, Node.js ve Express.js kullanılarak geliştirilmiş
REST API tabanlı bir görev yönetim sistemidir.

## Kullanılan Teknolojiler

- Node.js
- Express.js
- JavaScript
- REST API
- Postman

## Özellikler

- Yeni görev oluşturma
- Tüm görevleri listeleme
- ID ile görev görüntüleme
- Görev güncelleme
- Görev silme
- Logger Middleware ile API isteklerini kaydetme

## Kurulum

1. Projeyi bilgisayarınıza indirin.
2. Proje klasöründe terminal açın.
3. Bağımlılıkları yükleyin:

```bash
npm install
```

4. Sunucuyu başlatın:

```bash
node index.js
```

Sunucu http://localhost:3000 adresinde çalışır.

## API Endpointleri

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| GET | /tasks | Tüm görevleri listeler |
| GET | /tasks/:id | Belirli bir görevi getirir |
| POST | /tasks | Yeni görev oluşturur |
| PUT | /tasks/:id | Görevi günceller |
| DELETE | /tasks/:id | Görevi siler |

## Örnek Görev Verisi

```json
{
  "title": "Backend geliştirme",
  "description": "REST API hazırlanacak",
  "status": "pending",
  "priority": "high",
  "assignee": "Eylül"
}
```

## Logger Middleware

API'ye gelen isteklerin HTTP metodu, URL adresi
ve zaman bilgisi terminale kaydedilir.

## Veri Saklama

Görevler JavaScript dizisinde, bellekte tutulmaktadır.
Sunucu yeniden başlatıldığında yapılan değişiklikler
sıfırlanır.

## Testler

CRUD endpointleri Postman ile test edilmiştir.
Test ekran görüntüleri screenshots klasöründedir.

## Geliştirici

Eylül Berberoğlu
