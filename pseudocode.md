MoSCoW for Simple Pac-Man Game in Next.js:

Must-Have:
1. Create a game board/grid.
2. Implement Pac-Man movement (up, down, left, right).
3. Place Pac-Man and ghosts on the board.
4. Define collision detection between Pac-Man and ghosts.
5. Implement score tracking.
6. Implement game over conditions (e.g., Pac-Man collides with a ghost).

Should-Have:
1. Add pellets or coins for Pac-Man to collect.
2. Implement power-ups for Pac-Man.
3. Add sound effects and background music.
4. Create a game start screen and game over screen.

Could-Have:
1. Implement different levels with increased difficulty.
2. Add animations for Pac-Man, ghosts, and other game elements.
3. Implement a timer or time-based gameplay elements.

Won't-Have:
1. Multiplayer functionality.
2. Complex AI behavior for ghosts.
3. Advanced graphics and visual effects beyond the basic gameplay.

Pseudocode Structure:
- Initialize game board/grid.
- Initialize Pac-Man and ghosts positions.
- while game_not_over:
    - Handle user input for Pac-Man movement.
    - Update Pac-Man position based on input.
    - Check collision between Pac-Man and ghosts.
    - Update score based on collected pellets/coins.
    - Check game over conditions.
    - Render updated game state on the screen.
- Display game over screen and final score.
