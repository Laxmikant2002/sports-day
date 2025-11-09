/**
 * Sports Day Event Simulator
 * Main entry point that chains all events using callbacks
 */

const OpeningCeremony = require('./events/OpeningCeremony');
const Race100M = require('./events/Race100M');
const LongJump = require('./events/LongJump');
const HighJump = require('./events/HighJump');
const AwardCeremony = require('./events/AwardCeremony');

/**
 * Starts the sports day event with proper callback chaining
 * The events are executed sequentially:
 * 1. Opening Ceremony
 * 2. 100M Race
 * 3. Long Jump
 * 4. High Jump (with user input)
 * 5. Award Ceremony
 */
function startSportsDay() {
    // Start with Opening Ceremony and chain all events using callbacks
    OpeningCeremony(() => {
        Race100M(() => {
            LongJump(() => {
                HighJump(() => {
                    AwardCeremony();
                });
            });
        });
    });
}

// Start the sports day event
startSportsDay();