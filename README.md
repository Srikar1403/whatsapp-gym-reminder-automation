# WhatsApp Gym Reminder Automation 💬

This project automatically sends WhatsApp reminders to users before their gym membership expires.

## 🚀 Features

* Automated daily checks using cron jobs
* Google Sheets as database
* WhatsApp messaging via whatsapp-web.js
* No paid API required

## 🛠️ Tech Stack

* Node.js
* whatsapp-web.js
* Google Sheets (CSV)
* Axios
* Node-cron

## 📂 How It Works

1. Fetch data from Google Sheets
2. Parse expiry date
3. Check if expiry is tomorrow
4. Send WhatsApp message automatically

## ⚙️ Setup

```bash
npm install
node index.js
```

## ⚠️ Note

* Requires WhatsApp Web QR scan
* Session stored locally
* Needs system running 24/7 for automation

## 📌 Future Improvements

* Deploy on cloud (Railway/Render)
* Add admin dashboard
* Use official WhatsApp API
