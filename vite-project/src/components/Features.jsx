import React from 'react';

// 1. Das Daten-Array (Stelle sicher, dass dies oben steht oder importiert wird)
const features = [
  {
    title: "AI Code Completion",
    description: "Intelligente Code-Vorschläge basierend auf fortgeschrittener KI, die von deinen Codierungsmustern lernt.",
    codeSnippet: `function handleAI() {
  // KI schlägt nächsten Schritt vor
  const data = await fetch("/api/submit")
  // Auto-completed by AI
}`,
    imagePosition: "left"
  },
  {
    title: "Automated Testing",
    description: "Generiere umfassende Test-Suites automatisch. Unsere KI analysiert deinen Code und erstellt Unittests.",
    codeSnippet: `describe("User Auth", () => {
  it("should login successfully", () => {
    // Test implementation
  })
})`,
    imagePosition: "right"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header-Bereich */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-500">Unsere Features</h2>
          <p className="text-slate-400 mt-4">Hier stehen die tollen Funktionen der App.</p>
        </div>

        {/* 2. Die Schleife, die die Features rendert */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`flex flex-col gap-12 items-center ${
                feature.imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Text-Seite */}
              <div className="flex-1 w-full text-left">
                <h3 className="text-4xl font-bold text-white mb-4 italic uppercase tracking-tighter">
                   {feature.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                  {feature.description}
                </p>
              </div>

              {/* Code/Bild-Seite (Die "IDE" Optik aus dem Video) */}
              <div className="flex-1 w-full bg-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur-sm shadow-2xl">
                <div className="flex gap-1.5 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <pre className="text-sm text-blue-300 font-mono overflow-x-auto">
                  <code>{feature.codeSnippet}</code>
                </pre>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}