import Bend from "./components/Bend";

export default function App() {
  return (
    <>
      <a
        className="write-amar"
        href="mailto:amar@pervasive.app"
        aria-label="Contact Amar Sood"
      >
        <img src="/assets/images/amar.jpg" alt="" width={500} height={500} />
      </a>

      <Bend
        className="bend-root"
        zone={120}
        angle={80}
        rounding={75}
        perspective={700}
        ease={160}
        smoothing={0.05}
        tumble={0.18}
        tilt={0.5}
        direction="in"
        top
        bottom
      >
        <div className="page">
          <header className="rise rise-1">
            <h1>Pervasive Notes (July 2026)</h1>
          </header>

          <div className="cards">
            <section className="card rise rise-2" id="plane">
              <p className="num">001.</p>
              <h2>The whole plane, lived in</h2>
              <p className="arg">
                Two axes: <b>how long it works for you</b> (sub-second → years)
                and <b>how much it does alone</b> (zero AI → fully autonomous).
                Every dot is a real Pervasive moment — including the ones on the
                deterministic floor, where no other product has a single dot. We
                draw only ourselves; the market gets one sentence.
              </p>
              <div className="fig">
                <img
                  src="/assets/images/0.1_Feature_Plane.png"
                  alt="Feature plane: Pervasive moments across autonomy and time"
                  width={1920}
                  height={1440}
                  loading="eager"
                />
              </div>
            </section>

            <section className="card rise rise-3" id="sovereignty">
              <p className="num">002.</p>
              <h2>Whose diagram has you at the center?</h2>
              <p className="arg">
                Every lab&apos;s architecture diagram: their cloud in the
                middle, you as an arrow at the edge. Ours is the same diagram
                language with the gravity reversed — <b>you</b> in the middle,
                your world on your device, and the labs as swappable
                peripherals.
              </p>
              <div className="fig">
                <img
                  src="/assets/images/0.2_Sovereignty.png"
                  alt="Sovereignty diagram: you at the center of your device"
                  width={1920}
                  height={1440}
                  loading="lazy"
                />
              </div>
            </section>

            <section className="card rise rise-4" id="mori">
              <p className="num">003.</p>
              <h2>One life, one cord</h2>
              <p className="arg">
                Everything that happens to you — messages, places, commands,
                pages, voice, events — braids into one typed cord. Agents tap
                the cord at exact points. UI renders off slices of it.
                Scrape-and-poll products miss what falls between frames; the log
                wakes the agent exactly once, exactly then.
              </p>
              <div className="fig">
                <img
                  src="/assets/images/0.3_Mori.png"
                  alt="Mori: braided data cord versus polling gaps"
                  width={1920}
                  height={1440}
                  loading="lazy"
                />
              </div>
            </section>

            <section className="card rise rise-5" id="ax">
              <p className="num">004.</p>
              <h2>Room for Agent Experience™</h2>
              <p className="arg">
                The room an agent lives in elsewhere: a bare cell with four
                tools nailed to the wall. The room it gets here: a cockpit —
                because the agent is a first-class user of the OS.
              </p>
            </section>

            <section className="card rise rise-6" id="branches">
              <p className="num">005.</p>
              <h2>They&apos;re camped on our dead branches</h2>
              <p className="arg">
                Years of trying representations of a human life. Nearly all of
                them failed us — and the field is currently shipping companies
                on the ones we sawed off. The trunk is what survived.
              </p>
              <div className="fig">
                <img
                  src="/assets/images/0.5_Approaches.png"
                  alt="Approaches: dead branches versus the trunk that survived"
                  width={1920}
                  height={1440}
                  loading="lazy"
                />
              </div>
            </section>
          </div>

          <p className="contact-line">
            Contact Amar Sood (Founder of Pervasive):{" "}
            <a href="mailto:amar@pervasive.app">amar@pervasive.app</a>
          </p>
        </div>
      </Bend>
    </>
  );
}
