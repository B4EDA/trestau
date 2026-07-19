import { createFileRoute } from "@tanstack/react-router";
import heroPasta from "@/assets/hero-pasta.jpg";
import dishAvocado from "@/assets/dish-avocado.jpg";
import dishTea from "@/assets/dish-tea.jpg";
import dishEggs from "@/assets/dish-eggs.jpg";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const menu = {
  Antipasti: [
    { name: "Bruschetta al Pomodoro", desc: "Grilled sourdough, heirloom tomato, basil, olive oil", price: "60" },
    { name: "Burrata & Zaalouk", desc: "Creamy burrata over smoked Moroccan eggplant caviar", price: "95" },
    { name: "Carpaccio di Manzo", desc: "Thinly sliced beef, rocket, parmesan, lemon", price: "110" },
  ],
  "Pasta Fresca": [
    { name: "Tagliatelle Bolognese", desc: "Slow-cooked beef ragù, parmesan, fresh basil", price: "120" },
    { name: "Linguine ai Frutti di Mare", desc: "Atlantic prawns, calamari, mussels, white wine", price: "165" },
    { name: "Ravioli Ricotta e Spinaci", desc: "Handmade ravioli, sage butter, toasted almonds", price: "130" },
  ],
  "Brunch & Uova": [
    { name: "Avocado Toast al Salmone", desc: "Sourdough, avocado, smoked salmon, poached egg", price: "90" },
    { name: "Uova Strapazzate", desc: "Creamy scrambled eggs, salmon, avocado, herbs", price: "85" },
    { name: "Shakshuka Imperial", desc: "Baked eggs, tomato, harissa, feta, warm khobz", price: "75" },
  ],
  "Dolci & Bevande": [
    { name: "Tiramisù della Casa", desc: "Mascarpone, espresso, cocoa, house savoiardi", price: "55" },
    { name: "Thé à la Menthe", desc: "Traditional Moroccan mint tea, silver service", price: "30" },
    { name: "Jus d'Orange Pressé", desc: "Freshly squeezed Moroccan oranges", price: "35" },
  ],
} as const;

function Home() {
  return (
    <div className="min-h-screen">
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-primary-foreground">
          <a href="#top" className="font-display text-2xl tracking-wide">L'Imperial</a>
          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.2em]">
            <a href="#menu" className="hover:text-[color:var(--gold)] transition">Menu</a>
            <a href="#about" className="hover:text-[color:var(--gold)] transition">About</a>
            <a href="#gallery" className="hover:text-[color:var(--gold)] transition">Gallery</a>
            <a href="#visit" className="hover:text-[color:var(--gold)] transition">Visit</a>
          </nav>
          <a href="#visit" className="hidden md:inline-block border border-current px-5 py-2 text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition">
            Reserve
          </a>
        </div>
      </header>

      <section id="top" className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroPasta}
          alt="Tagliatelle bolognese served on a hand-painted blue plate at L'Imperial Kenitra"
          className="absolute inset-0 h-full w-full object-cover"
          width={1600}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[color:var(--foreground)]/70" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center text-primary-foreground">
          <span className="text-xs uppercase tracking-[0.4em] text-[color:var(--gold)]">Depuis 2012 · Kenitra</span>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-balance md:text-7xl lg:text-8xl">
            A table set between<br />
            <em className="italic text-[color:var(--gold)]">Italy</em> and <em className="italic text-[color:var(--gold)]">Morocco</em>.
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-white/85 text-balance">
            Handmade pasta, slow brunch, Atlantic seafood and glasses of mint tea —
            served warm in a room lit by lantern light.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#menu" className="bg-primary px-8 py-3 text-sm uppercase tracking-[0.25em] text-primary-foreground hover:bg-primary/90 transition">
              See the menu
            </a>
            <a href="#visit" className="border border-white/70 px-8 py-3 text-sm uppercase tracking-[0.25em] hover:bg-white/10 transition">
              Book a table
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-center">
          <div className="relative">
            <img
              src={interior}
              alt="Warm interior of L'Imperial Kenitra with terracotta walls and lantern light"
              className="w-full aspect-[4/5] object-cover shadow-xl"
              loading="lazy"
              width={1600}
              height={1000}
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block border-4 border-[color:var(--gold)] w-40 h-40 -z-10" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-primary">The house</span>
            <h2 className="mt-4 text-4xl md:text-5xl text-balance">
              Two coastlines,<br /> one long table.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              L'Imperial began in a small dining room off Avenue Mohammed V — a chef
              from Bologna, a grandmother from Fès, and a stubborn belief that
              tagliatelle and tagine belong to the same evening.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Everything is made in-house: the pasta rolled each morning, the bread
              baked in our stone oven, the mint clipped before service.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <div className="font-display text-4xl text-primary">12</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Years open</div>
              </div>
              <div>
                <div className="font-display text-4xl text-primary">40</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Seats</div>
              </div>
              <div>
                <div className="font-display text-4xl text-primary">1</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Wood oven</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="relative bg-[color:var(--deep-blue)] py-24 md:py-32 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-[color:var(--gold)]">La Carte</span>
            <h2 className="mt-4 text-5xl md:text-6xl text-white">The Menu</h2>
            <p className="mt-4 text-white/70 max-w-lg mx-auto">
              A short, seasonal card. Prices in Moroccan dirham.
            </p>
          </div>

          <div className="mt-16 grid gap-14 md:grid-cols-2">
            {Object.entries(menu).map(([section, items]) => (
              <div key={section}>
                <h3 className="text-2xl text-[color:var(--gold)] italic mb-6 border-b border-white/20 pb-3">
                  {section}
                </h3>
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={item.name} className="flex gap-4">
                      <div className="flex-1">
                        <div className="flex items-baseline gap-3">
                          <h4 className="text-lg text-white">{item.name}</h4>
                          <span className="flex-1 border-b border-dotted border-white/25 translate-y-[-4px]" />
                          <span className="text-[color:var(--gold)] font-medium">{item.price} DH</span>
                        </div>
                        <p className="mt-1 text-sm text-white/60 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-primary">Selezione</span>
              <h2 className="mt-3 text-4xl md:text-5xl">From the pass.</h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              A few plates from this week's service — photographed just before they left the kitchen.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3 md:grid-rows-2">
            <figure className="md:row-span-2 group overflow-hidden">
              <img src={dishAvocado} alt="Avocado and salmon toast on a blue Moroccan plate" className="h-full w-full object-cover aspect-[3/4] md:aspect-auto transition duration-700 group-hover:scale-105" loading="lazy" width={900} height={900} />
            </figure>
            <figure className="group overflow-hidden">
              <img src={dishEggs} alt="Scrambled eggs with salmon and avocado" className="h-full w-full object-cover aspect-square transition duration-700 group-hover:scale-105" loading="lazy" width={900} height={900} />
            </figure>
            <figure className="group overflow-hidden">
              <img src={dishTea} alt="Moroccan silver teapot with mint tea and fresh orange juice" className="h-full w-full object-cover aspect-square transition duration-700 group-hover:scale-105" loading="lazy" width={900} height={900} />
            </figure>
            <figure className="md:col-span-2 group overflow-hidden">
              <img src={heroPasta} alt="Tagliatelle bolognese on a blue plate" className="h-full w-full object-cover aspect-[16/9] transition duration-700 group-hover:scale-105" loading="lazy" width={1600} height={1200} />
            </figure>
          </div>
        </div>
      </section>

      <section id="visit" className="bg-[color:var(--foreground)] text-[color:var(--background)] py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-[color:var(--gold)]">Nous rendre visite</span>
            <h2 className="mt-4 text-5xl md:text-6xl text-balance">
              Come sit<br />with us.
            </h2>
            <p className="mt-6 text-white/70 max-w-md leading-relaxed">
              Walk-ins welcome; reservations recommended on weekends. We'd love to
              set aside a corner table for you.
            </p>
            <div className="mt-10 space-y-6 text-white/85">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Address</div>
                <div className="mt-2 font-display text-2xl">Avenue Mohammed V, Kenitra 14000, Morocco</div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Hours</div>
                  <div className="mt-2">Tue–Sun · 08:00 – 23:30</div>
                  <div className="text-white/50 text-sm">Closed Mondays</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Contact</div>
                  <div className="mt-2">+212 5 37 00 00 00</div>
                  <div className="text-white/50 text-sm">bonjour@limperial-kenitra.ma</div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); alert("Merci! We'll confirm your reservation shortly."); }}
            className="bg-background text-foreground p-8 md:p-10 shadow-2xl"
          >
            <h3 className="text-3xl">Reserve a table</h3>
            <p className="mt-2 text-sm text-muted-foreground">We reply within a few hours.</p>
            <div className="mt-8 grid gap-5">
              <label className="block">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Name</span>
                <input required className="mt-2 w-full border-b border-border bg-transparent py-2 outline-none focus:border-primary transition" />
              </label>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Date</span>
                  <input required type="date" className="mt-2 w-full border-b border-border bg-transparent py-2 outline-none focus:border-primary transition" />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Time</span>
                  <input required type="time" className="mt-2 w-full border-b border-border bg-transparent py-2 outline-none focus:border-primary transition" />
                </label>
              </div>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Guests</span>
                <select className="mt-2 w-full border-b border-border bg-transparent py-2 outline-none focus:border-primary transition">
                  {[1,2,3,4,5,6,7,8].map((n) => <option key={n}>{n} {n===1?"guest":"guests"}</option>)}
                </select>
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Phone</span>
                <input required className="mt-2 w-full border-b border-border bg-transparent py-2 outline-none focus:border-primary transition" />
              </label>
              <button className="mt-4 bg-primary py-3 text-sm uppercase tracking-[0.25em] text-primary-foreground hover:bg-primary/90 transition">
                Request reservation
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-[color:var(--foreground)] text-white/50 border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col sm:flex-row items-center justify-between gap-4 px-6 py-8 text-xs uppercase tracking-[0.2em]">
          <div className="font-display text-lg normal-case tracking-normal text-white">L'Imperial · Kenitra</div>
          <div>© {new Date().getFullYear()} — Cucina & Cuisine</div>
        </div>
      </footer>
    </div>
  );
}
