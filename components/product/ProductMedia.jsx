import Image from "next/image";

export default function ProductMedia({ media = [] }) {
  if (!Array.isArray(media) || media.length === 0) {
    return (
      <div className="aspect-square bg-white rounded-3xl border border-black/5 flex items-center justify-center">
        <span className="text-muted">No media</span>
      </div>
    );
  }

  const images = media
    .filter((m) => m.mediaType === "image" && m.file?.url)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  if (images.length === 0) {
    return (
      <div className="aspect-square bg-white rounded-3xl border border-black/5 flex items-center justify-center">
        <span className="text-muted">No images</span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[520px]">
      {/* MAIN IMAGE */}
      <div className="relative aspect-square bg-white rounded-3xl overflow-hidden border border-black/5">
        <Image
          src={images[0].file.url}
          alt="Product image"
          fill
          sizes="(max-width: 768px) 100vw, 45vw"
          className="object-contain"
          priority
        />
      </div>

      {/* THUMBNAILS */}
      {images.length > 1 && (
        <div className="flex gap-4 mt-6">
          {images.slice(1).map((img) => (
            <div
              key={img.id}
              className="relative w-20 h-20 rounded-xl overflow-hidden border border-black/10"
            >
              <Image
                src={img.file.url}
                alt="Thumbnail"
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
