import { useEffect, useRef, useState } from "react";
import type { AnimationItem } from "lottie-web/build/player/lottie_light";

// Lottie (the deer-animation player) and the deer's animation data are both
// only needed for a few seconds on first paint, so they're code-split out of
// the main bundle and fetched in the background while the intro text shows —
// by the time the deer phase starts, they're already in memory. The "light"
// build skips the expression engine (which needs eval and isn't used by this
// animation), keeping the bundle smaller and eval-free.
function loadDeerAssets() {
  return Promise.all([
    import("lottie-web/build/player/lottie_light"),
    import("@/assets/deer-animation.json"),
  ]);
}

// A "welcome" splash: the name appears, blurs away, then a small deer leaps
// across before the real site is revealed. Plays on every page load/reload,
// and is skipped entirely for anyone with "reduce motion" turned on. Click
// anywhere, or press Escape, to skip straight to the site.
const NAME = "Nomqhele N Moyo";

// The deer's own composition is 4368x1080 — recolored to white so it reads
// against the black splash, keeping the site's monochrome palette.
const DEER_ASPECT_RATIO = 4368 / 1080;

type Phase = "text" | "deer" | "done";

export function IntroSplash() {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<Phase>("text");
  const [textBlurred, setTextBlurred] = useState(false);
  const [deerVisible, setDeerVisible] = useState(false);
  const deerContainerRef = useRef<HTMLDivElement>(null);
  const deerAssetsRef = useRef<ReturnType<typeof loadDeerAssets> | null>(null);

  // Decide, once per load, whether to run the splash at all.
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      return;
    }

    setVisible(true);
    document.body.style.overflow = "hidden";
    // Kick off the deer assets' download now, in the background, so they're
    // ready by the time the text phase hands off to the deer phase below.
    deerAssetsRef.current = loadDeerAssets();

    const blurTimer = window.setTimeout(() => setTextBlurred(true), 1200);
    const deerTimer = window.setTimeout(() => setPhase("deer"), 2500);
    return () => {
      window.clearTimeout(blurTimer);
      window.clearTimeout(deerTimer);
    };
  }, []);

  const finish = () => {
    document.body.style.overflow = "";
    setPhase("done");
    window.setTimeout(() => setVisible(false), 350);
  };

  // Skip on click or Escape.
  useEffect(() => {
    if (!visible) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") finish();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [visible]);

  // Fade the deer in (it takes over the same centered spot the name just
  // occupied) once its phase starts.
  useEffect(() => {
    if (phase !== "deer") {
      setDeerVisible(false);
      return;
    }
    const raf = requestAnimationFrame(() => setDeerVisible(true));
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  // The deer animation itself — a Lottie clip of a deer leaping across,
  // recolored to white so it reads against the black splash. It plays once;
  // when it completes, the splash finishes and the real site is revealed.
  useEffect(() => {
    if (phase !== "deer") return;
    const container = deerContainerRef.current;
    const assetsPromise = deerAssetsRef.current ?? loadDeerAssets();
    if (!container) return;

    let cancelled = false;
    let anim: AnimationItem | null = null;
    let handleComplete: (() => void) | null = null;

    assetsPromise.then(([{ default: lottie }, { default: deerAnimation }]) => {
      if (cancelled) return;
      anim = lottie.loadAnimation({
        container,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: deerAnimation,
      });
      handleComplete = () => finish();
      anim.addEventListener("complete", handleComplete);
    });

    return () => {
      cancelled = true;
      if (anim && handleComplete) anim.removeEventListener("complete", handleComplete);
      anim?.destroy();
      anim = null;
    };
  }, [phase]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex cursor-pointer items-center justify-center bg-black transition-opacity duration-300"
      style={{ opacity: phase === "done" ? 0 : 1 }}
      onClick={finish}
      role="presentation"
    >
      {phase === "text" && (
        <p
          className="px-6 text-center text-4xl font-semibold uppercase tracking-[0.2em] text-white transition-all duration-[1300ms] ease-out sm:text-5xl"
          style={{
            fontFamily: "'Nunito', sans-serif",
            opacity: textBlurred ? 0 : 1,
            filter: textBlurred ? "blur(14px)" : "blur(0px)",
          }}
        >
          {NAME}
        </p>
      )}

      {phase === "deer" && (
        <div
          className="pointer-events-none flex items-center justify-center transition-opacity duration-500 ease-out"
          style={{ opacity: deerVisible ? 1 : 0 }}
        >
          <div
            ref={deerContainerRef}
            style={{
              width: `min(80vw, ${190 * DEER_ASPECT_RATIO}px)`,
              aspectRatio: DEER_ASPECT_RATIO,
            }}
          />
        </div>
      )}
    </div>
  );
}
