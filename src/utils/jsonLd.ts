// JSON-LD builders กลาง — แทน object ซ้ำ ๆ ที่เคยประกาศเองในแต่ละหน้า
// กติกา: output ต้องเหมือน object เดิมเป๊ะ (ตรวจด้วย dist diff ตอน migrate)
// SECURITY: ผลลัพธ์ถูกฉีดผ่าน set:html — ห้ามให้ข้อมูลจากผู้ใช้ไหลเข้า builder เหล่านี้

export type FaqItem = { q: string; a: string };

export const faqSchema = (faqs: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a }
  }))
});

export type BreadcrumbItem = { name: string; item: string };

export const breadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((entry, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: entry.name,
    item: entry.item
  }))
});
