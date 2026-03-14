import React from "react";
import { IntroCard } from "./components/IntroCard/IntroCard";
import { Publications } from "./components/sections/Publications";
import { Teaching } from "./components/sections/Teaching";

export default function Home() {
  const pageBackground =
    "https://64.media.tumblr.com/a8a4a5b6cbeaef45b23905ecfb9bf673/tumblr_p5at0uRbDC1x8dkuto1_500.gif";

  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url('${pageBackground}')` }}
    >
      <div className="flex flex-col md:flex-row p-8">
        {/* Sidebar */}
        <aside className="w-72 shrink-0">
          <div className="sticky top-8">
            <IntroCard />
            <nav className="mt-6 flex flex-col gap-2 text-sm text-white/70">
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
              <a
                href="#publications"
                className="hover:text-white transition-colors"
              >
                Publications
              </a>
              <a
                href="#teaching"
                className="hover:text-white transition-colors"
              >
                Teaching
              </a>
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="w-full max-w-2xl backdrop-blur-sm bg-black/30 rounded-2xl p-8 ml-96">
          {/* About */}
          <section id="about" className="mb-12">
            <h2 className="text-2xl font-bold mb-4 border-b border-white/30 pb-2">
              About Me
            </h2>
            <p className="text-white/90 leading-relaxed mb-4">
              I am a Ph.D. student in Computer Science and Engineering at The
              Ohio State University, advised by{" "}
              <a
                href="https://aperrault.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline"
              >
                Professor Andrew Perrault
              </a>
              . My research focuses on multi-agent system, optimization with
              reinforcement learning and multi-armed bandits with applications
              in epidemiology and public health.
            </p>
            <p className="text-white/90 leading-relaxed">
              Before joining OSU, I received my B.A. in Computer Science and
              Mathematics, <em>summa cum laude</em>, from Saint John's
              University (CSBSJU). Feel free to reach out at{" "}
              <a
                href="mailto:nguyen.2687@buckeyemail.osu.edu"
                className="text-blue-300 hover:underline"
              >
                nguyen.2687@buckeyemail.osu.edu
              </a>
              .
            </p>
          </section>

          <Publications />
          <Teaching />
        </main>
      </div>
    </div>
  );
}
