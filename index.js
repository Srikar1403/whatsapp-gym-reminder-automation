const axios = require("axios");
const csv = require("csv-parser");
const cron = require("node-cron");
const dayjs = require("dayjs");
const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const { Readable } = require("stream");

// WhatsApp setup
const client = new Client({
  authStrategy: new LocalAuth()
});

client.on("qr", qr => qrcode.generate(qr, { small: true }));

client.on("ready", () => {
  console.log("✅ WhatsApp Ready!");

  // ✅ Run once after WhatsApp is ready
  checkExpiry();

  // ✅ Schedule daily
  cron.schedule("0 9 * * *", checkExpiry);
});

// YOUR CSV LINK
const SHEET_URL = "UPLOAD YOUR GOOGLE SHEET LINK HERE";

// Function
async function checkExpiry() {
  console.log("🔍 Checking data...");

  try {
    const response = await axios.get(SHEET_URL);
    const stream = Readable.from(response.data);

    const tomorrow = dayjs().add(1, "day").format("YYYY-MM-DD");

    stream
      .pipe(csv())
      .on("data", async (row) => {
        console.log("ROW:", row);

        const name = row["Name"];
        const phone = row["Phone"];

        const expiryRaw = row[Object.keys(row)[2]];
        const expiry = dayjs(expiryRaw).format("YYYY-MM-DD");

        console.log("Parsed:", name, phone, expiry);

        if (expiry === tomorrow) {
          const message = `Hi ${name}, your subscription expires tomorrow. Please renew.`;

          await client.sendMessage(`${phone}@c.us`, message);
          console.log(`✅ Sent to ${name}`);
        }
      })
      .on("end", () => {
        console.log("✅ Done checking");
      });

  } catch (error) {
    console.log("❌ Error:", error.message);
  }
}

client.initialize();