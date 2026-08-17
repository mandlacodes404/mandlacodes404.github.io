// src/components/home/OtherWork.jsx

const otherWork = [
  {
    name: "Enthropy Website",
    description: "Placeholder description — details to be added.",
    thumbnail: "/images/enthropy/thumbnail.png",
    url: "https://iskool.xyz/ENTHROPY_website.html",
  },
  {
    name: "iSkool Website",
    description: "Placeholder description — details to be added.",
    thumbnail: "/images/iskool-website/thumbnail.png",
    url: "https://iskool.xyz",
  },
];

function OtherWork() {
  return (
    <section id="other-work" className="px-10 py-16 border-t border-border">
      <p className="font-mono text-xs tracking-wide text-accent mb-4">
        OTHER WORK
      </p>
      <div className="divide-y divide-border">
        {otherWork.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="flex gap-5 py-4 group"
          >
            <div className="w-40 h-24 shrink-0 rounded-md border border-border bg-surface overflow-hidden flex items-center justify-center">
              {item.thumbnail ? (
                <img
                  src={item.thumbnail}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <i
                  className="ti ti-photo text-lg text-text-muted"
                  aria-hidden="true"
                ></i>
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-base font-medium text-text-primary group-hover:text-accent transition-colors mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default OtherWork;