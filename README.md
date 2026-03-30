# WhatsApp Gym Reminder Automation 💬

An automated system that sends WhatsApp reminders to users before their gym membership expires using Google Sheets and Node.js.

## 🚀 Features

* Automated daily reminders using cron jobs
* Google Sheets as a dynamic database
* WhatsApp messaging without paid API
* Real-time expiry tracking

## 🛠️ Tech Stack

* Node.js
* whatsapp-web.js
* Axios
* Node-cron
* Day.js

## 📂 How It Works

1. Fetch data from Google Sheets (CSV)
2. Parse user details (name, phone, expiry)
3. Check if expiry is tomorrow
4. Automatically send WhatsApp reminder

## ⚙️ Setup Instructions

1. Install dependencies:
   npm install

2. Run the project:
   node index.js

3. Scan QR code to connect WhatsApp

## 💡 Real-world Use Case

This system helps gyms automate customer reminders, reducing manual effort and improving customer retention.

## ⚠️ Limitations

* Requires system to be running (not deployed)
* Uses WhatsApp Web (not official API)

## 🚀 Future Improvements

* Deploy on cloud (Railway / Render)
* Add admin dashboard
* Integrate WhatsApp Cloud API
