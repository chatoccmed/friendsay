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

export type VideoInfo = {
  platform: "youtube" | "tiktok";
  id: string;
  title: string;
  description: string;
  uploadDate: string; // YYYY-MM-DD
  duration?: string; // ISO 8601 เช่น "PT28S"
  thumbnail?: string; // path ในเว็บ — youtube ไม่ใส่ก็ได้ (ใช้ i.ytimg.com อัตโนมัติ)
};

export const videoEmbedUrl = (video: VideoInfo) =>
  video.platform === "youtube"
    ? `https://www.youtube-nocookie.com/embed/${video.id}`
    : `https://www.tiktok.com/embed/v2/${video.id}`;

export const videoThumbnailUrl = (video: VideoInfo) =>
  video.thumbnail ?? (video.platform === "youtube" ? `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg` : "");

export const videoSchema = (video: VideoInfo, pageUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: video.title,
  description: video.description,
  thumbnailUrl: videoThumbnailUrl(video).startsWith("/")
    ? `https://friendsay.com${videoThumbnailUrl(video)}`
    : videoThumbnailUrl(video),
  uploadDate: video.uploadDate,
  ...(video.duration ? { duration: video.duration } : {}),
  embedUrl: videoEmbedUrl(video),
  url: pageUrl
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
