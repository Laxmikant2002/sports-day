import { OpeningCeremony } from '../src/events/OpeningCeremony';
import { Race100M } from '../src/events/Race100M';
import { LongJump } from '../src/events/LongJump';
import { HighJump } from '../src/events/HighJump';
import { AwardCeremony } from '../src/events/AwardCeremony';

describe('Sports Day Events', () => {
    let scores;

    beforeEach(() => {
        scores = { red: 0, blue: 0, green: 0, yellow: 0 };
    });

    test('OpeningCeremony initializes the event', () => {
        const result = OpeningCeremony();
        expect(result).toBe('Sports Day has started!');
    });

    test('Race100M updates scores correctly', () => {
        const result = Race100M(scores);
        expect(result).toHaveProperty('red');
        expect(result).toHaveProperty('blue');
        expect(result).toHaveProperty('green');
        expect(result).toHaveProperty('yellow');
    });

    test('LongJump awards points based on color', () => {
        const result = LongJump(scores);
        expect(result).toEqual(expect.objectContaining({
            red: expect.any(Number),
            blue: expect.any(Number),
            green: expect.any(Number),
            yellow: expect.any(Number),
        }));
    });

    test('HighJump updates scores based on user input', () => {
        // Mock user input
        const mockPrompt = jest.fn().mockReturnValue('red');
        global.prompt = mockPrompt;

        const result = HighJump(scores);
        expect(result.red).toBeGreaterThan(scores.red);
    });

    test('AwardCeremony displays final scores', () => {
        const finalScores = { red: 10, blue: 20, green: 15, yellow: 5 };
        const result = AwardCeremony(finalScores);
        expect(result).toContain('Final Scores:');
        expect(result).toContain('Winner: blue');
    });
});