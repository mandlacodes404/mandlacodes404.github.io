// src/components/home/DemoLoginModal.jsx
//
// Reusable modal for a project row's click. Renders one of two modes
// depending on the project's data:
//   - project.demoCredentials present → shows email/password with copy
//     buttons and a "Continue to demo" button that opens the live link.
//   - project.noDemoExplanation present → shows an explanation of why
//     there's no live demo, with just a "Close" button.

import { useState } from "react";

function CopyableField({ label, value }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div>
      <p className="text-xs font-mono text-text-muted mb-1">{label}</p>
      <div className="flex items-center justify-between gap-3 border border-border rounded-md px-3 py-2 bg-bg">
        <span className="text-sm text-text-primary font-mono">{value}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="text-xs text-accent hover:underline shrink-0"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}

function DemoLoginModal({ project, onClose }) {
  const handleContinue = () => {
    window.open(project.links.live, "_blank", "noreferrer");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-6"
      onClick={onClose}
    >
      <div
        className="bg-surface border border-border rounded-lg p-6 max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {project.demoCredentials ? (
          <>
            <p className="font-mono text-xs tracking-wide text-accent mb-2">
              DEMO LOGIN
            </p>
            <h3 className="text-lg font-medium text-text-primary mb-2">
              {project.name} — Teacher demo
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              Use these details to log in and explore the live demo.
            </p>

            <div className="space-y-4 mb-6">
              <CopyableField
                label="EMAIL"
                value={project.demoCredentials.email}
              />
              <CopyableField
                label="PASSWORD"
                value={project.demoCredentials.password}
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 text-sm text-text-secondary border border-border rounded-md py-2 hover:text-text-primary transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleContinue}
                className="flex-1 text-sm text-bg bg-accent rounded-md py-2 font-medium hover:opacity-90 transition-opacity"
              >
                Continue to demo
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="font-mono text-xs tracking-wide text-accent mb-2">
              {project.name.toUpperCase()}
            </p>
            <h3 className="text-lg font-medium text-text-primary mb-4">
              {project.noDemoExplanation.heading}
            </h3>
            <div className="text-sm text-text-secondary leading-relaxed mb-6 space-y-3">
              {project.noDemoExplanation.body
                .split("\n\n")
                .map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-full text-sm text-text-secondary border border-border rounded-md py-2 hover:text-text-primary transition-colors"
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default DemoLoginModal;