export default function Footer() {
  return (
    <footer id="contact" className="bg-ink py-14 text-cream">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-xl font-black">
              ASSAR <span className="text-gold">PATCHES</span>
            </h3>
            <p className="mt-3 text-sm text-cream/60">
              PVC, embroidered, sublimation, woven aur leather patches — aapke
              brand ke liye, export quality mein.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><a href="#pvc-patches" className="hover:text-gold">PVC Patches</a></li>
              <li><a href="#embroidered-patches" className="hover:text-gold">Embroidered Patches</a></li>
              <li><a href="#sublimation-patches" className="hover:text-gold">Sublimation Patches</a></li>
              <li><a href="#woven-patches" className="hover:text-gold">Woven Patches</a></li>
              <li><a href="#leather-patches" className="hover:text-gold">Leather Patches</a></li>
              <li><a href="/blogs" className="hover:text-gold">Blogs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>Email: assarpatches@gmail.com</li>
              <li>Phone: TODO_PHONE</li>
              <li>TODO_ADDRESS</li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-cream/50">
          © 2026 Assar Patches. All rights reserved.
        </p>
      </div>
    </footer>
  );
}