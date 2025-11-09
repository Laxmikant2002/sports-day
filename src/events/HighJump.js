/**
 * High Jump - Prompts user for the winning color and updates scores
 * @param {Function} callback - The next event function to call
 */
const readline = require('readline');
const { getScores, updateScore, logScores } = require('../utils/helpers');

function HighJump(callback) {
    console.log('\n🦘 HIGH JUMP EVENT IS STARTING... 🦘');
    console.log('=' .repeat(60));
    
    const previousScores = getScores();
    
    // Create readline interface for user input
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    console.log('\n🎯 Please select the team with the highest jump:');
    console.log('Available teams: red, blue, green, yellow');
    
    rl.question('\nEnter the winning color: ', (answer) => {
        const color = answer.toLowerCase().trim();
        const validColors = ['red', 'blue', 'green', 'yellow'];
        
        if (validColors.includes(color)) {
            const pointsAwarded = 100; // High Jump winner gets 100 points
            
            console.log(`\n✅ Valid input received!`);
            console.log(`🏅 ${color.toUpperCase()} team wins the High Jump!`);
            console.log(`🏅 Points Awarded: ${pointsAwarded} points`);
            
            updateScore(color, pointsAwarded);
        } else {
            console.log(`\n❌ Invalid color: "${answer}"`);
            console.log('⚠️  No points awarded for this event.');
        }
        
        const updatedScores = getScores();
        logScores('High Jump', previousScores, updatedScores);
        
        rl.close();
        
        // Continue to next event
        if (callback && typeof callback === 'function') {
            callback();
        }
    });
}

module.exports = HighJump;