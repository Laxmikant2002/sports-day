/**
 * Race 100M - Simulates a 100m race with random times and updates scores
 * @param {Function} callback - The next event function to call
 */
const { getScores, updateScore, logScores, generateRandomTime } = require('../utils/helpers');

function Race100M(callback) {
    console.log('\n🏃‍♂️ 100M RACE IS STARTING... 🏃‍♀️');
    console.log('=' .repeat(60));
    
    const previousScores = getScores();
    
    setTimeout(() => {
        // Generate random times for each team (between 10 and 20 seconds)
        const times = {
            red: generateRandomTime(10, 20),
            blue: generateRandomTime(10, 20),
            green: generateRandomTime(10, 20),
            yellow: generateRandomTime(10, 20)
        };
        
        console.log('\n🏃 Race Results:');
        Object.entries(times).forEach(([color, time]) => {
            console.log(`   ${color.toUpperCase()}: ${time} seconds`);
        });
        
        // Sort teams by time (fastest first)
        const sorted = Object.entries(times).sort((a, b) => a[1] - b[1]);
        
        // Award points: 1st place = 50, 2nd = 25, 3rd = 10
        const points = { 0: 50, 1: 25, 2: 10, 3: 0 };
        
        console.log('\n🏅 Points Awarded:');
        sorted.forEach(([color, time], index) => {
            const pts = points[index] || 0;
            if (pts > 0) {
                updateScore(color, pts);
                console.log(`   ${index + 1}. ${color.toUpperCase()}: +${pts} points (${time}s)`);
            }
        });
        
        const updatedScores = getScores();
        logScores('100M Race', previousScores, updatedScores);
        
        // Continue to next event
        if (callback && typeof callback === 'function') {
            callback();
        }
    }, 3000); // 3 second delay for race simulation
}

module.exports = Race100M;