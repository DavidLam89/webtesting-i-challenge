const { repair, succeed, fail} = require('./enhancer.js');

describe('enhancer.js', () => {
    describe('repair', () => {
        const item = {
            name: 'my blade',
            durability: 50,
            enhancement: 10,
        }
        it('should restore durability to 100', () => {
            expect(repair(item).durability).toBe(100);
        });
        it.todo('');
    });

    describe('succeed', () => {
        const item = {
            name: 'my blade',
            durability: 50,
            enhancement: 10,
        }
        const item20 = {
            name: 'my blade',
            durability: 50,
            enhancement: 20,
        }
        it('should increases item\'s enhancement by 1', () => {
            expect(succeed(item).enhancement).toBe(11);
        });
        it('should not change item\'s durability', () => {
            expect(succeed(item).durability).toBe(50);
        });
        it('should not change item\'s enhancement if enhancement level is 20', () => {
            expect(succeed(item20).enhancement).toBe(20);
        });
        it.todo('');
    });

    describe('fail', () => {
        const item14 = {
            name: 'my blade',
            durability: 50,
            enhancement: 14,
        }
        const item15 = {
            name: 'my blade',
            durability: 50,
            enhancement: 15,
        }
        const item17 = {
            name: 'my blade',
            durability: 50,
            enhancement: 17,
        }
        it('should decrease item\'s durability by 5 if enhancement level is less than 15', () => {
            expect(fail(item14).durability).toBe(45);
        });
        it('should decrease item\'s durability by 10 if enhancement level is 15 or more', () => {
            expect(fail(item15).durability).toBe(40);
            expect(fail(item17).durability).toBe(40);
        });
        it('should decrease item\'s enhancement level by 1 if enhancement level is greater than 16', () => {
            expect(fail(item15).enhancement).toBe(15);
            expect(fail(item17).enhancement).toBe(16);
        });
        it.todo('');
    });
});

// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
