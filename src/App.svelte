<script>
  import GameOfLife from './GameOfLife.svelte';
</script>

<main>
  <header class="top-section">
    <div class="logo-container">
      <GameOfLife />
    </div>
    <h1 class="company-name">Introspection Labs</h1>
  </header>
  
  <section class="center-section">
    <!-- Main content goes here -->
  </section>
</main>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background-color: #ffffff;
    color: #000000;
  }

  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .top-section {
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .logo-container {
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .company-name {
    font-family: 'ChicagoFLF', 'Courier New', monospace;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: -0.3px;
    color: #000000;
    margin: 0;
    font-smooth: never;
    -webkit-font-smoothing: none;
    -moz-osx-font-smoothing: unset;
    text-rendering: optimizeSpeed;
    transform: scale(1.5);
    transform-origin: center;
    line-height: 1;
    filter: contrast(2) brightness(1.2);
  }

  .center-section {
    flex: 1;
    padding: 40px 80px;
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
  }

  @media (max-width: 768px) {
    .center-section {
      padding: 40px;
    }
  }
</style>
