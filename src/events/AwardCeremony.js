/**
 * Award Ceremony - Displays final scores and announces winners
 */
const { getScores, getSortedTeams } = require('../utils/helpers');

function AwardCeremony() {
    console.log('\n🏆🏆🏆 AWARD CEREMONY 🏆🏆🏆');
    console.log('=' .repeat(60));
    
    setTimeout(() => {
        const finalScores = getScores();
        const sortedTeams = getSortedTeams();
        
        console.log('\n📊 FINAL SCORES:');
        console.log('=' .repeat(60));
        
        sortedTeams.forEach((team, index) => {
            let medal = '';
            if (index === 0) medal = '🥇';
            else if (index === 1) medal = '🥈';
            else if (index === 2) medal = '🥉';
            else medal = '  ';
            
            console.log(`${medal} ${index + 1}. ${team.color.toUpperCase().padEnd(10)} - ${team.score} points`);
        });
        
        console.log('=' .repeat(60));
        
        // Announce the winner(s)
        const winner = sortedTeams[0];
        const winners = sortedTeams.filter(t => t.score === winner.score);
        
        if (winners.length > 1) {
            console.log('\n🎉 WE HAVE A TIE! 🎉');
            console.log(`Winners: ${winners.map(w => w.color.toUpperCase()).join(' & ')}`);
            console.log(`Score: ${winner.score} points`);
        } else {
            console.log('\n🎉 CONGRATULATIONS TO THE WINNER! 🎉');
            console.log(`🏆 ${winner.color.toUpperCase()} TEAM 🏆`);
            console.log(`Final Score: ${winner.score} points`);
        }
        
        console.log('\n' + '=' .repeat(60));
        console.log('Thank you for participating in the Sports Day Event!');
        console.log('=' .repeat(60) + '\n');
    }, 1000); // 1 second delay for ceremony
}

module.exports = AwardCeremony;