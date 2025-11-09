/**
 * Utility functions for the Sports Day Event
 */

// Global scores object
const scores = {
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0
};

/**
 * Get the current scores object
 * @returns {Object} Current scores
 */
function getScores() {
    return { ...scores };
}

/**
 * Update scores for a specific color
 * @param {string} color - The color team to update
 * @param {number} points - Points to add
 */
function updateScore(color, points) {
    if (scores.hasOwnProperty(color)) {
        scores[color] += points;
    }
}

/**
 * Log scores before and after an event
 * @param {string} eventName - Name of the event
 * @param {Object} previousScores - Scores before the event
 * @param {Object} updatedScores - Scores after the event
 */
function logScores(eventName, previousScores, updatedScores) {
    console.log(`\n${'='.repeat(50)}`);
    console.log(`📊 ${eventName} - Score Update`);
    console.log(`${'='.repeat(50)}`);
    console.log('Previous Scores:');
    console.log(JSON.stringify(previousScores, null, 2));
    console.log('\nUpdated Scores:');
    console.log(JSON.stringify(updatedScores, null, 2));
    console.log(`${'='.repeat(50)}\n`);
}

/**
 * Generate a random time for race events
 * @param {number} min - Minimum time in seconds
 * @param {number} max - Maximum time in seconds
 * @returns {number} Random time
 */
function generateRandomTime(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

/**
 * Get a random color from the available teams
 * @returns {string} Random color
 */
function getRandomColor() {
    const colors = Object.keys(scores);
    return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * Sort teams by score and determine winners
 * @returns {Array} Sorted array of teams with their scores
 */
function getSortedTeams() {
    return Object.entries(scores)
        .map(([color, score]) => ({ color, score }))
        .sort((a, b) => b.score - a.score);
}

module.exports = {
    getScores,
    updateScore,
    logScores,
    generateRandomTime,
    getRandomColor,
    getSortedTeams
};