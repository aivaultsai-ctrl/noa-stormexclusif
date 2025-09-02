import { useState } from "react";

const GalleryPreview = () => {
  const previews = Array.from({ length: 6 }, (_, i) => `/placeholder${i+1}.jpg`);

  return (
    <section id="gallery" className="py-20 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Preview Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {previews.map((src, idx) => (
          <div key={idx} className="relative group">
            <img
              src={`https://via.placeholder.com/300x200.png?text=Preview+${idx+1}`}
              alt={`Preview ${idx+1}`}
              className="rounded-lg filter blur-sm group-hover:blur-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
              <span className="text-sm">🔒 Members Only</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function Home() {
  const [ageVerified, setAgeVerified] = useState(false);

  if (!ageVerified) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
        <div className="p-8 bg-gray-900 rounded-lg text-center">
          <h1 className="text-2xl font-bold mb-4">18+ Only</h1>
          <p className="mb-6">You must be at least 18 years old to enter.</p>
          <button
            onClick={() => setAgeVerified(true)}
            className="px-6 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg"
          >
            I am 18+
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-5xl font-bold mb-6">
          Unlock the world of <span className="text-pink-500">Noa</span>
        </h1>
        <p className="max-w-xl mb-8">
          Exclusive creations, behind-the-scenes content, and weekly drops — join the members club today.
        </p>
        <a
          href="#pricing"
          className="px-8 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg font-semibold"
        >
          Join Membership
        </a>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-6">How it works</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {["Create account", "Choose plan", "Unlock drops"].map((step, i) => (
            <div key={i} className="p-6 bg-gray-800 rounded-lg shadow-md">
              <span className="block text-2xl mb-2">✅</span>
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 bg-black text-center">
        <h2 className="text-3xl font-bold mb-6">What you get</h2>
        <ul className="max-w-xl mx-auto space-y-4">
          <li>📅 Weekly content drops</li>
          <li>🎬 Behind-the-scenes access</li>
          <li>🗳️ Polls & community perks</li>
        </ul>
      </section>

      <GalleryPreview />

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-8">Membership Plans</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { title: "Monthly", price: "$10" },
            { title: "Quarterly", price: "$27" },
            { title: "Annual", price: "$96" },
          ].map((plan, i) => (
            <div key={i} className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-2xl font-bold mb-4">{plan.price}</p>
              <button className="px-6 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg">
                Subscribe with Stripe
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-black text-center">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <p className="max-w-2xl mx-auto">
          Noa__stormexclusif is a private members club offering exclusive digital creations, behind-the-scenes content, and premium drops every week.
        </p>
      </section>

      {/* Support & Legal */}
      <footer className="py-10 bg-gray-900 text-center text-sm text-gray-400">
        <p>Support: contact@noa-stormexclusif.com</p>
        <p className="mt-2">
          Terms of Service · Privacy Policy · Cookie Policy · 18+ Age Gate
        </p>
        <p className="mt-4">© {new Date().getFullYear()} Noa__stormexclusif</p>
      </footer>
    </main>
  );
}
