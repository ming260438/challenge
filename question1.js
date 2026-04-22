/**
 * Question 1:
 * หากพบว่าโปรแกรมและเว็บไซต์ที่พัฒนาขึ้นมา ใช้งานแล้วมีปัญหาใช้งานไม่ได้
 * เราจะตรวจสอบปัญหาเบื้องต้นยังไง จงอธิบาย
 *
 * แนวทางการตรวจสอบปัญหาเบื้องต้น (Basic Troubleshooting)
 */

const troubleshootingSteps = [
  {
    step: 1,
    title: "ตรวจสอบ Error Logs",
    description: "ดู log ของ server หรือ console เพื่อหา error message ที่เกิดขึ้น",
    examples: [
      "ดู stdout / stderr ของ process",
      "ดู event log ของ OS หรือ application server",
      "ใช้ pm2 logs, docker logs, journalctl ฯลฯ",
    ],
  },
  {
    step: 2,
    title: "ตรวจสอบ Environment Variables",
    description: "ตัวแปร config ที่จำเป็น (DATABASE_URL, API_KEY, PORT) ถูกต้องและครบหรือไม่",
    examples: [
      'process.env.DATABASE_URL ไม่ใช่ undefined',
      "ไฟล์ .env ถูก load หรือยัง",
      "ค่า secret ใน production ถูก set หรือยัง",
    ],
  },
  {
    step: 3,
    title: "ตรวจสอบ Dependencies",
    description: "package หรือ library ที่จำเป็นติดตั้งครบและเวอร์ชันถูกต้องหรือไม่",
    examples: [
      "รัน npm install / yarn install",
      "ตรวจสอบ node_modules ว่าครบหรือไม่",
      "เช็ค version ของ Node.js ตรงกับที่กำหนดใน package.json หรือไม่",
    ],
  },
  {
    step: 4,
    title: "ตรวจสอบ Network / Port",
    description: "Server ฟังอยู่บน port ที่ถูกต้องและ firewall ไม่ได้บล็อกหรือไม่",
    examples: [
      "netstat -ano | findstr :3000  (Windows)",
      "ตรวจสอบ Security Group / Firewall rules",
      "ลอง curl http://localhost:PORT เพื่อเช็ค response",
    ],
  },
  {
    step: 5,
    title: "ตรวจสอบ Database Connection",
    description: "เชื่อมต่อ database ได้หรือไม่ และ credentials ถูกต้องหรือไม่",
    examples: [
      "ลอง ping หรือ connect ไปที่ DB server โดยตรง",
      "ตรวจสอบ username, password, host, port ใน config",
      "ตรวจสอบว่า DB service กำลัง run อยู่หรือไม่",
    ],
  },
];

console.log("=== Question 1: การตรวจสอบปัญหาเบื้องต้นของโปรแกรม/เว็บไซต์ ===\n");

for (const item of troubleshootingSteps) {
  console.log(`[Step ${item.step}] ${item.title}`);
  console.log(`  → ${item.description}`);
  console.log(`  ตัวอย่าง:`);
  item.examples.forEach((ex) => console.log(`    - ${ex}`));
  console.log();
}

console.log("สรุป:");
console.log(
  "แนวทางเบื้องต้นคือไล่ตรวจจากสิ่งที่เห็นอาการได้เร็วที่สุดก่อน เช่น logs, config, dependencies, network และ database เพื่อหาต้นตอของปัญหาให้แคบลงและแก้ไขได้ตรงจุด"
);
