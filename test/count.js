var expect    = require("chai").expect;

describe('The count CLI', () => {
    it('should print the correct output', async () => {
        const response = await cmd.execute(
            'path/to/process',
            ['--peppers', '--cheese', 'gouda']
        );
        expect(response).to.equal(
            'you ordered a pizza with:\n  - peppers\n  - gouda cheese'
        );
    });
});
