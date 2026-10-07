"use client";

import { useEffect, useRef, useState } from "react";

type VideoItem = {
  src: string;
  title: string;
  description: string;
  packageName: string;
};

const videos: VideoItem[] = [
  { src: "/videos/promotion.mp4", title: "VIDEO PROMOTION 1", packageName: "Gold VIP", description: "🔥 Exclusive Habesha Videos — available with the Gold VIP Package." },
  { src: "/videos/promotion-2.mp4", title: "VIDEO PROMOTION 2", packageName: "Premium", description: "👑 Big Habesha Videos — premium and exclusive content." },
  { src: "/videos/promotion-3.mp4", title: "VIDEO PROMOTION 3", packageName: "VIP", description: "💎 Premium Habesha Videos — available with VIP access." },
  { src: "/videos/promotion-4.mp4", title: "VIDEO PROMOTION 4", packageName: "Gold VIP", description: "🎬 New Habesha Videos — do not miss the latest releases." },
];

function formatDuration(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const total = Math.floor(seconds);
  const s = total % 60;
  const minutes = Math.floor(total / 60);
  const m = minutes % 60;
  const h = Math.floor(total / 3600);
  if (h > 0) return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  return `${minutes}:${String(s).padStart(2, "0")}`;
}

function VideoCard({ item }: { item: VideoItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onMetadata = () => setDuration(video.duration || 0);
    const onTime = () => setCurrent(video.currentTime || 0);
    video.addEventListener("loadedmetadata", onMetadata);
    video.addEventListener("timeupdate", onTime);
    return () => {
      video.removeEventListener("loadedmetadata", onMetadata);
      video.removeEventListener("timeupdate", onTime);
    };
  }, []);

  const percent = duration > 0 ? Math.min(100, Math.max(0, (current / duration) * 100)) : 0;

  return (
    <article className="video-card">
      <video
        ref={videoRef}
        src={item.src}
        controls
        preload="metadata"
        playsInline
      />
      <div className="video-info">
        <div className="video-title-row">
          <div>
            <span className="eyebrow">{item.packageName}</span>
            <h3>{item.title}</h3>
          </div>
          <strong className="duration-badge">{duration ? formatDuration(duration) : "..."}</strong>
        </div>
        <p>{item.description}</p>
        <div className="duration-line">
          <span>Current: {formatDuration(current)}</span>
          <span>Duration: {duration ? formatDuration(duration) : "..."}</span>
        </div>
        <div className="duration-track" aria-label="Video progress">
          <span style={{ width: `${percent}%` }} />
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);

  async function copyNumber() {
    await navigator.clipboard.writeText("0966680991");
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <main>
      <header className="header">
        <div className="container nav">
          <div className="brand"><span className="logo">HW</span><span><b>Habesha Wasib</b><small>Quality • Safe • Trusted</small></span></div>
          <nav><a href="#home">Home</a><a href="#videos">Videos</a><a href="#prices">Pricing</a><a href="#payment">Payment</a></nav>
          <a className="btn btn-green" href="https://t.me/Habeshwasibbot">Telegram</a>
        </div>
      </header>

      <section id="home" className="hero"><div className="container hero-grid">
        <div><span className="eyebrow">HABESHA WASIB</span><h1>Photo & Video <span>Promotion</span></h1><p className="lead">Professional photo and video promotion with premium presentation.</p><div className="actions"><a className="btn btn-green" href="#videos">Explore Videos</a><a className="btn btn-outline" href="#payment">Payment</a></div></div>
        <div className="hero-card"><video src="/videos/promotion.mp4" controls preload="metadata" playsInline /></div>
      </div></section>

      <section id="videos" className="section"><div className="container"><div className="heading"><span className="eyebrow">VIDEO GALLERY</span><h2>Featured Videos</h2><p>Video duration is detected automatically, from seconds to minutes and hours.</p></div><div className="video-grid">{videos.map((item) => <VideoCard key={item.src} item={item} />)}</div></div></section>

      <section id="prices" className="section alt"><div className="container"><div className="heading"><span className="eyebrow">PRICING</span><h2>Choose Your Package</h2></div><div className="prices">
        <div className="price"><span>VIP</span><strong>1,500 ETB</strong><p>VIP content access.</p></div>
        <div className="price featured"><span>PREMIUM</span><strong>2,000 ETB</strong><p>Premium content access.</p></div>
        <div className="price"><span>GOLD VIP</span><strong>3,000 ETB</strong><p>Gold VIP package access.</p></div>
      </div></div></section>

      <section id="payment" className="section"><div className="container payment-card"><div><span className="eyebrow">TELEBIRR PAYMENT</span><h2>Upload Payment Screenshot</h2><p>After completing your payment, upload a clear screenshot for verification.</p></div><div className="payment-info"><div><span>Telebirr</span><strong>0966680991</strong></div><div><span>Account Name</span><strong>erkeselam</strong></div><button className="btn btn-green" onClick={copyNumber}>{copied ? "Copied ✓" : "Copy Number"}</button><label className="upload"><span>📷 Payment Screenshot</span><small>Choose JPG or PNG</small><input type="file" accept="image/png,image/jpeg" /></label></div></div></section>

      <footer><div className="container footer"><b>Habesha Wasib</b><span>© 2026 • Photo & Video Promotion</span></div></footer>
    </main>
  );
}
