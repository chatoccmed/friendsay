(() => {
  const now = new Date();
  const clean = (value) => String(value ?? "").replace(/\s+/g, " ").trim();
  const host = location.hostname.replace(/^www\./, "");
  const stamp = now.toISOString().replace(/[:.]/g, "-");
  const lines = clean(document.body?.innerText ?? "")
    .split(/\s*(?:\n|฿|บาท)\s*/g)
    .map(clean)
    .filter((line) => line.length >= 2)
    .slice(0, 1500);

  const anchors = Array.from(document.querySelectorAll("a[href]"))
    .map((link) => ({
      text: clean(link.innerText || link.getAttribute("aria-label") || link.title),
      href: new URL(link.getAttribute("href"), location.href).href
    }))
    .filter((item) => item.href && (item.text || /product|item|catalog|shop|search/i.test(item.href)))
    .slice(0, 400);

  const images = Array.from(document.images)
    .map((img) => ({
      alt: clean(img.alt),
      src: img.currentSrc || img.src,
      width: img.naturalWidth || img.width || 0,
      height: img.naturalHeight || img.height || 0
    }))
    .filter((item) => item.src && item.width >= 80 && item.height >= 80)
    .slice(0, 120);

  const meta = Array.from(document.querySelectorAll("meta"))
    .map((node) => ({
      name: clean(node.getAttribute("name") || node.getAttribute("property")),
      content: clean(node.getAttribute("content"))
    }))
    .filter((item) => item.name && item.content)
    .slice(0, 80);

  const jsonLd = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
    .map((node) => clean(node.textContent))
    .filter(Boolean)
    .slice(0, 20);

  const productLinks = anchors
    .filter((item) => /\/product\/|\-i\.|\/products?\/|itemId|item_id|shopid|shop_id/i.test(item.href))
    .slice(0, 120);

  const capture = {
    captureType: "friendsay-marketplace-page",
    capturedAt: now.toISOString(),
    url: location.href,
    host,
    title: document.title,
    visibleText: lines,
    productLinks,
    anchors,
    images,
    meta,
    jsonLd,
    userAgent: navigator.userAgent
  };

  const json = JSON.stringify(capture, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `friendsay-capture-${host}-${stamp}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(a.href);

  navigator.clipboard?.writeText(json).catch(() => {});
  alert("Friendsay capture saved. If the file downloaded, tell Codex to import the latest capture.");
})();
