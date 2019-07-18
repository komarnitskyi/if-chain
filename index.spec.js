const chain = require('./index');

describe('Chain should works correct', () => {
    it('Chain is function', () => {
        expect(chain).toBeDefined()
    });

    it('Chain returns object with if, chain, end methods', () => {
        const chained = chain();

        expect(Object.keys(chained)).toContain('if');
        expect(Object.keys(chained)).toContain('chain');
        expect(Object.keys(chained)).toContain('end');
    });

    it('End should returns data', () => {
        const data = [1, 2, 3, 4];
        const chained = chain(data);

        const result = chained.end();

        expect(result).toEqual(data);

    });

    it('Chain should works correct', () => {
        const data = [1, 2, 3, 4];
        const chained = chain(data);

        const result = chained
            .chain(data => [...data, 5])
            .end();

        expect(result).toEqual([1, 2, 3, 4, 5]);

    });

    it('If should works correct', () => {
        const data = [1, 2, 3, 4];
        const chained = chain(data);

        expect(
            chained
                .if(true, data => [...data, 5])
                .end()
        ).toEqual([1, 2, 3, 4, 5]);

        expect(
            chained
                .if(true, data => [...data, 5])
                .if(true, data => [...data, 5])
                .end()
        ).toEqual([1, 2, 3, 4, 5, 5]);

        expect(
            chained
                .if(false, data => [...data, 5])
                .end()
        ).toEqual([1, 2, 3, 4]);

        expect(
            chained
                .if(false, null, data => [...data, 6] )
                .end()
        ).toEqual([1, 2, 3, 4, 6]);

        expect(
            chained
                .if(false, null, null )
                .end()
        ).toEqual([1, 2, 3, 4]);

    });

    it('If should works correct with function as condition', () => {
        const data = [1, 2, 3, 4];
        const chained = chain(data);

        expect(
            chained
                .if(() => true, data => [...data, 5])
                .end()
        ).toEqual([1, 2, 3, 4, 5]);

        expect(
            chained
                .if(data => Array.isArray(data), data => [...data, 5])
                .end()
        ).toEqual([1, 2, 3, 4, 5]);

        expect(
            chained
                .if(() => false, null, data => [...data, 6] )
                .end()
        ).toEqual([1, 2, 3, 4, 6]);

        expect(
            chained
                .if(() => false, null, null )
                .end()
        ).toEqual([1, 2, 3, 4]);

    });

});
