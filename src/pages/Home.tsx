import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero.png";
import memoryImage from "../assets/images/memory.png";
import homeScreen from "../assets/images/home_screen.png";
import memoryLaneScreen from "../assets/images/memory_lane_screen.png";
import questScreen from "../assets/images/quest_screen.png";
import sideQuestScreen from "../assets/images/side_quest_screen.png";
import profileScreen from "../assets/images/profile_screen.png";
import leaderboardScreen from "../assets/images/leaderboard_screen.png";
import badgeBookScreen from "../assets/images/badge_book_screen.png";

const premiumCoverUrl =
  "https://nyc.cloud.appwrite.io/v1/storage/buckets/69459793002f9559409e/files/694ae3ba003406fae91f/view?project=694578d0000e9651730d";
const mascotUrl =
  "https://nyc.cloud.appwrite.io/v1/storage/buckets/69459793002f9559409e/files/69498eb700039e6bba3b/view?project=694578d0000e9651730d";

const features = [
  {
    title: "Daily tiles",
    description:
      "Capture the essentials of your day with tiles like Photo of the Day, Something I Ate, or Random Moment.",
  },
  {
    title: "Memory Lane",
    description:
      "Revisit past entries by tile, date, or mood. Your timeline stays calm, visual, and easy to explore.",
  },
  {
    title: "Quests and streaks",
    description:
      "Daily, weekly, and monthly quests keep momentum without pressure, while streaks celebrate consistency.",
  },
  {
    title: "Custom rituals",
    description:
      "Design your own tiles, build side quests, and color-code the routines that matter most to you.",
  },
];

const steps = [
  {
    title: "Pick your tiles",
    description:
      "Start with curated tiles or create custom ones for your habits, memories, and milestones.",
  },
  {
    title: "Log a moment",
    description:
      "Add a photo, a note, or a prompt in seconds. Intropod keeps the format light and flexible.",
  },
  {
    title: "Return anytime",
    description:
      "Memory Lane brings everything back with a gentle timeline and smart filters.",
  },
];

const premiumBenefits = [
  "Premium themes",
  "Custom tiles",
  "Side quests",
  "All filters",
];

const tileHighlights = [
  { label: "Photo of the Day", accent: "#ff0000", pastel: "#ffe5e5" },
  { label: "Something I Ate", accent: "#1abc9c", pastel: "#e0f6f1" },
  { label: "Random Moment", accent: "#a78bfa", pastel: "#f3edff" },
];

const screenshots = [
  {
    title: "Home",
    image: homeScreen,
    description: "Daily tiles and your current streak at a glance.",
  },
  {
    title: "Memory Lane",
    image: memoryLaneScreen,
    description: "A gentle timeline of everything you've logged.",
  },
  {
    title: "Side quests",
    image: sideQuestScreen,
    description: "Custom rituals built around your habits.",
  },

  {
    title: "Quests",
    image: questScreen,
    description: "Daily, weekly, and monthly momentum.",
  },
  {
    title: "Profile",
    image: profileScreen,
    description: "Your personal home base and settings.",
  },
  {
    title: "Leaderboard",
    image: leaderboardScreen,
    description: "Track streaks and milestones.",
  },
];

type WaitlistStatus = {
  type: "success" | "error";
  message: string;
};

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [waitlistStatus, setWaitlistStatus] = useState<WaitlistStatus | null>(
    null
  );

  const onWaitlistSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setWaitlistStatus(null);
    const formElement = event.currentTarget;

    if (!formElement.reportValidity()) {
      return;
    }

    const endpoint = import.meta.env.VITE_WAITLIST_ENDPOINT;

    if (!endpoint) {
      setWaitlistStatus({
        type: "error",
        message: "Missing waitlist endpoint. Please try again later.",
      });
      return;
    }

    const rawData = new FormData(formElement);
    const emailValue = rawData.get("email");
    const email = typeof emailValue === "string" ? emailValue.trim() : "";

    if (!email) {
      setWaitlistStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new URLSearchParams({ email, source: "homepage" });
      await fetch(endpoint, {
        method: "POST",
        body: payload,
        mode: "no-cors",
      });

      setWaitlistStatus({
        type: "success",
        message: "You're on the waitlist!",
      });
      formElement.reset();
    } catch (error) {
      setWaitlistStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to join waitlist. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="section hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">A calm, personal, memory hunter</p>
            <h1>Welcome to your Intropod</h1>
            <p className="lead">
              Log your personal journey through life at your own pace. A space
              made by you, for you, with gentle structure and beautiful rituals.
            </p>
            <div className="hero-actions">
              <form
                className="waitlist-form"
                onSubmit={onWaitlistSubmit}
                aria-busy={isSubmitting}
              >
                <input
                  className="waitlist-input"
                  type="email"
                  name="email"
                  placeholder="Enter email e.g horus@gmail.com"
                  autoComplete="email"
                  required
                  aria-label="Email address"
                />
                <button
                  className="button primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </button>
              </form>
              <Link className="button secondary" to="/#features">
                Explore features
              </Link>
            </div>
            {waitlistStatus && (
              <p
                className={`waitlist-status ${waitlistStatus.type}`}
                role="status"
                aria-live="polite"
              >
                {waitlistStatus.message}
              </p>
            )}
          </div>
          <div className="hero-visual">
            <div className="device-card">
              <img
                src={heroImage}
                alt="Soft gradient background inspired by Intropod"
              />
              <div className="device-overlay">
                <p className="overlay-title">Today</p>
                <p className="overlay-subtitle">3 tiles captured</p>
                <div className="tile-chips">
                  {tileHighlights.map((tile) => (
                    <span
                      key={tile.label}
                      className="tile-chip"
                      style={{
                        backgroundColor: tile.pastel,
                        color: tile.accent,
                      }}
                    >
                      {tile.label}
                    </span>
                  ))}
                </div>
                <div className="overlay-footer">
                  <span>Streak</span>
                  <strong>14 days</strong>
                </div>
              </div>
            </div>
            <div className="floating-card">
              <p className="floating-title">Memory Lane</p>
              <p className="floating-copy">
                A gentle timeline of photos, notes, and quiet wins.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why Intropod</p>
            <h2>Small moments, anchored</h2>
            <p>
              Intropod blends structure and freedom. Tiles make logging easy,
              quests keep you moving, and Memory Lane turns reflection into a
              ritual.
            </p>
          </div>
          <div className="feature-grid stagger">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title} data-reveal>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface" id="screens">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Screens</p>
            <h2>A quiet, crafted interface</h2>
            <p>
              Every screen is tuned for calm reflection, with warm neutrals and
              gentle structure throughout your day.
            </p>
          </div>
          <div className="screens-grid stagger">
            {screenshots.map((screen) => (
              <figure
                className="screen-card text-center"
                key={screen.title}
                data-reveal
              >
                <img
                  className="screen-image"
                  src={screen.image}
                  alt={`${screen.title} screen`}
                />
                <figcaption>
                  <strong>{screen.title}</strong>
                  <span>{screen.description}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface" id="memory">
        <div className="container split">
          <div className="split-media">
            <img
              src={memoryImage}
              alt="Intropod memory icon"
              className="memory-image"
            />
            <div className="media-caption">
              <p className="caption-title">Memory Lane</p>
              <p className="caption-copy">
                Revisit a day, a feeling, or a single tile.
              </p>
            </div>
          </div>
          <div className="split-content">
            <p className="eyebrow">Built for reflection</p>
            <h2>A timeline that feels like you</h2>
            <p>
              Swipe through your memories, filter by tile, and see how your
              story evolves over time. Intropod keeps your entries tactile and
              easy to browse.
            </p>
            <div className="step-list stagger">
              {steps.map((step) => (
                <div className="step" key={step.title} data-reveal>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="quests">
        <div className="container quest-grid">
          <div className="quest-copy">
            <p className="eyebrow">Quests and streaks</p>
            <h2>Consistency without the pressure</h2>
            <p>
              Gentle quests meet flexible tiles. Track your streaks, collect XP,
              and choose side quests that mirror your current season.
            </p>
            <div className="quest-pills">
              <span>Daily quests</span>
              <span>Weekly quests</span>
              <span>Monthly quests</span>
            </div>
          </div>
          <div className="quest-cards stagger">
            <div className="quest-card" data-reveal>
              <p className="meta-label">Streak pulse</p>
              <p className="meta-value">Celebrate progress, not perfection.</p>
            </div>
            <div className="quest-card" data-reveal>
              <p className="meta-label">Side quests</p>
              <p className="meta-value">Build custom routines with Premium.</p>
            </div>
            <div className="quest-card" data-reveal>
              <p className="meta-label">XP summary</p>
              <p className="meta-value">See your momentum at a glance.</p>
            </div>
            <img
              className="quest-mascot"
              src={mascotUrl}
              alt="Intropod mascot illustration"
            />
          </div>
        </div>
      </section>

      <section className="section surface" id="themes">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Themes</p>
            <h2>Light, dark, and quietly expressive</h2>
            <p>
              Intropod uses warm neutrals and graphite tones inspired by the
              in-app palettes. Switch themes anytime.
            </p>
          </div>
          <div className="theme-grid">
            <div className="theme-card" data-reveal>
              <div>
                <h3>Sand (Light)</h3>
                <p>Warm, grounded, and airy for daytime reflection.</p>
              </div>
              <div className="swatches">
                <span style={{ background: "#f6f1e9" }} />
                <span style={{ background: "#fffaf3" }} />
                <span style={{ background: "#b06a36" }} />
                <span style={{ background: "#2b1f16" }} />
              </div>
            </div>
            <div className="theme-card" data-reveal>
              <div>
                <h3>Graphite (Dark)</h3>
                <p>Moody, focused, and soft on the eyes at night.</p>
              </div>
              <div className="swatches">
                <span style={{ background: "#141517" }} />
                <span style={{ background: "#1c1d21" }} />
                <span style={{ background: "#c88a5a" }} />
                <span style={{ background: "#f2f2f0" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="premium">
        <div className="container premium-grid">
          <div className="premium-card" data-reveal>
            <div className="premium-cover">
              <img src={premiumCoverUrl} alt="Intropod Premium cover" />
            </div>
            <div className="premium-content">
              <p className="eyebrow">Premium</p>
              <h2>Unlock your full memory journey</h2>
              <p>
                Go deeper with custom tiles, side quests, and the full theme
                library. Premium keeps Intropod personal and beautifully
                tailored.
              </p>
              <ul>
                {premiumBenefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="premium-note" data-reveal>
            <p className="eyebrow">Personal by design</p>
            <h3>Your pace, your palette</h3>
            <p>
              Choose a theme that matches your season. Adjust your tiles as life
              changes. Intropod stays quietly in sync with you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
