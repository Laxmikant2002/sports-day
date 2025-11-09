/**
 * Long Jump - Randomly selects a color and awards points
 * @param {Function} callback - The next event function to call
 */
const { getScores, updateScore, logScores, getRandomColor } = require('../utils/helpers');

function LongJump(callback) {
    console.log('\n🦘 LONG JUMP EVENT IS STARTING... 🦘');
    console.log('=' .repeat(60));
    
    const previousScores = getScores();
    
    setTimeout(() => {
        // Randomly select a winner
        const winner = getRandomColor();
        const pointsAwarded = 150; // Long Jump winner gets 150 points
        
        console.log(`\n🎯 Event Winner: ${winner.toUpperCase()}`);
        console.log(`🏅 Points Awarded: ${pointsAwarded} points`);
        
        // Update the winner's score
        updateScore(winner, pointsAwarded);
        
        const updatedScores = getScores();
        logScores('Long Jump', previousScores, updatedScores);
        
        // Continue to next event
        if (callback && typeof callback === 'function') {
            callback();
        }
    }, 2000); // 2 second delay for long jump simulation
}

module.exports = LongJump;