<script>
  import { onMount } from 'svelte';
  
  let canvas;
  let ctx;
  let grid = [];
  let nextGrid = [];
  let animationId;
  let isRunning = false;
  let frameCount = 0;
  let cycleCount = 0;
  const RESET_CYCLE = 150;
  const GRID_SIZE = 8;
  const CELL_SIZE = 7.5;
  const CANVAS_SIZE = GRID_SIZE * CELL_SIZE;
  const FRAME_DELAY = 6;
  
  function initializeGrid() {
    grid = Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(0));
    nextGrid = Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(0));
    
    const centerX = Math.floor(GRID_SIZE / 2);
    const centerY = Math.floor(GRID_SIZE / 2);
    
    grid[centerY - 1][centerX - 1] = 1;
    grid[centerY - 1][centerX] = 1;
    grid[centerY - 1][centerX + 1] = 1;
    grid[centerY][centerX - 1] = 1;
    grid[centerY][centerX + 1] = 1;
    grid[centerY + 1][centerX - 1] = 1;
    grid[centerY + 1][centerX] = 1;
    grid[centerY + 1][centerX + 1] = 1;
    grid[centerY - 2][centerX - 1] = 1;
    grid[centerY - 2][centerX + 1] = 1;
    grid[centerY + 2][centerX - 1] = 1;
    grid[centerY + 2][centerX + 1] = 1;
  }
  
  function countNeighbors(x, y) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const newX = x + i;
        const newY = y + j;
        if (newX >= 0 && newX < GRID_SIZE && newY >= 0 && newY < GRID_SIZE) {
          count += grid[newY][newX];
        }
      }
    }
    return count;
  }
  
  function updateGrid() {
    cycleCount++;
    
    if (cycleCount >= RESET_CYCLE) {
      initializeGrid();
      cycleCount = 0;
      return;
    }
    
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        const neighbors = countNeighbors(x, y);
        const current = grid[y][x];
        
        if (current === 1) {
          nextGrid[y][x] = neighbors >= 2 && neighbors <= 3 ? 1 : 0;
        } else {
          nextGrid[y][x] = neighbors === 3 ? 1 : 0;
        }
      }
    }
    
    [grid, nextGrid] = [nextGrid, grid];
  }
  
  function draw() {
    if (!ctx) return;
    
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    
    const offsetX = 2;
    const offsetY = 2;
    ctx.fillStyle = '#000000';
    
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        if (grid[y][x] === 1) {
          ctx.fillRect((x + offsetX) * CELL_SIZE, (y + offsetY) * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        }
      }
    }
  }
  
  function animate() {
    if (!isRunning) return;
    
    frameCount++;
    if (frameCount % FRAME_DELAY === 0) {
      updateGrid();
    }
    draw();
    animationId = requestAnimationFrame(animate);
  }
  
  function start() {
    if (!isRunning) {
      isRunning = true;
      animate();
    }
  }
  
  function stop() {
    isRunning = false;
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  }
  
  onMount(() => {
    if (canvas) {
      ctx = canvas.getContext('2d');
      initializeGrid();
      draw();
      start();
    }
    
    return () => stop();
  });
</script>

<canvas
  bind:this={canvas}
  width={CANVAS_SIZE}
  height={CANVAS_SIZE}
  class="game-of-life"
></canvas>

<style>
  .game-of-life {
    border: 1px solid #e0e0e0;
    border-radius: 4px;
  }
</style>
