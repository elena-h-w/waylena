const row1 = [
  { src: "/screenshots/screenshot-1.png", alt: "Waylena app screenshot 1", rotate: "-3deg" },
  { src: "/screenshots/screenshot-2.png", alt: "Waylena app screenshot 2", rotate: "2deg" },
];

const row2 = [
  { src: "/screenshots/screenshot-3.png", alt: "Waylena app screenshot 3", rotate: "-2deg" },
  { src: "/screenshots/screenshot-4.png", alt: "Waylena app screenshot 4", rotate: "1deg" },
  { src: "/screenshots/screenshot-5.png", alt: "Waylena app screenshot 5", rotate: "-3deg" },
];

const Screenshots = () => {
  return (
    <section className="py-12 px-6 overflow-hidden bg-background">
      <div className="flex flex-col items-center gap-6">
        {/* Row 1 — 2 screenshots */}
        <div className="flex items-center justify-center gap-4 md:gap-8">
          {row1.map((screenshot, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-2xl overflow-hidden"
              style={{ transform: `rotate(${screenshot.rotate})` }}
            >
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                className="w-36 md:w-48 lg:w-56 block"
              />
            </div>
          ))}
        </div>
        {/* Row 2 — 3 screenshots */}
        <div className="flex items-center justify-center gap-4 md:gap-8">
          {row2.map((screenshot, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-2xl overflow-hidden"
              style={{ transform: `rotate(${screenshot.rotate})` }}
            >
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                className="w-36 md:w-48 lg:w-56 block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
