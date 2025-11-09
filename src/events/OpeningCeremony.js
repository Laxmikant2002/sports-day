/**
 * Opening Ceremony - Initializes the sports event and starts the callback chain
 * @param {Function} callback - The next event function to call
 */
const { getScores } = require('../utils/helpers');

function OpeningCeremony(callback) {
    console.log('\n🎉🎉🎉 WELCOME TO THE SPORTS DAY EVENT! 🎉🎉🎉');
    console.log('=' .repeat(60));
    console.log('🏃 Participating Teams: Red, Blue, Green, Yellow');
    console.log('🏆 Events: 100M Race, Long Jump, High Jump');
    console.log('=' .repeat(60));
    console.log('\n🎺 The Opening Ceremony begins...');
    
    setTimeout(() => {
        console.log('✅ Opening Ceremony completed successfully!');
        console.log('\nInitial Scores:');
        console.log(JSON.stringify(getScores(), null, 2));
        console.log('\n🏁 Let the games begin!\n');
        
        // Start the callback chain with the next event
        if (callback && typeof callback === 'function') {
            callback();
        }
    }, 1000); // 1 second delay for ceremony
}

module.exports = OpeningCeremony;