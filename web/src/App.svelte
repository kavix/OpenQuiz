<svelte:head>
  <meta
    name="description"
    content="OpenQuiz is an open-source, self-hosted live quiz platform."
  />
</svelte:head>

<main>
  <div class="mark" aria-hidden="true">O</div>
  <p class="eyebrow">Open-source · Self-hosted · Made for play</p>
  <h1>Great quizzes,<br /><span>on your terms.</span></h1>
  <p class="intro">
    OpenQuiz is getting ready. Soon you’ll be able to host live quizzes on your
    own server, with no player accounts or participant limits.
  </p>
  <p class="status"><span></span> The project is under active development</p>
</main>

<style>
  :global(*) {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    color: #f8f6f0;
    background:
      radial-gradient(ellipse at 75% 10%, #28453d 0, transparent 36rem),
      #111b20;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    max-width: 780px;
    margin: 0 auto;
    padding: 72px 32px;
  }

  .mark {
    display: grid;
    width: 52px;
    height: 52px;
    place-items: center;
    border-radius: 16px;
    color: #10221b;
    background: #b6f36a;
    font-size: 27px;
    font-weight: 900;
  }

  .eyebrow {
    margin: 64px 0 18px;
    color: #b6f36a;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  h1 {
    margin: 0;
    font-size: clamp(48px, 9vw, 88px);
    line-height: 0.98;
    letter-spacing: -0.065em;
  }

  h1 span {
    color: #b6f36a;
  }

  .intro {
    max-width: 520px;
    margin: 28px 0 0;
    color: #b5c1be;
    font-size: 18px;
    line-height: 1.65;
  }

  .status {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 48px;
    color: #d6dfd7;
    font-size: 14px;
  }

  .status span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #b6f36a;
    box-shadow: 0 0 16px #b6f36a88;
  }

  @media (max-width: 520px) {
    main {
      padding: 40px 24px;
    }
    .eyebrow {
      margin-top: 52px;
      font-size: 11px;
    }
    .intro {
      font-size: 16px;
    }
  }
</style>
