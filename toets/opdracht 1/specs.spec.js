describe('Document Test', function() {
    it('Zou goede titel en charset moeten hebben', function () {
        expect(document.title).toBe('Voorbeeld toets');
        expect(document.charset).toBe('UTF-8');
    });
});

describe('Unit Test', function () {
    it('Unit item zou voorbeeld moeten zijn', function () {
        expect(unitTest.item).toBe('voorbeeld');
      });
    it('Unit nummer zou 3 moeten zijn', function () {
        expect(unitTest.nummer).toEqual(3);
      });
});

describe('Unit test', function () {
    it('Unit beschrijving zou beschrijving moeten zijn', function () {
        expect(unitTest.beschrijving).toBe('Beschrijving');
    });
    describe('Unit test', function () {
        it('Unit boodschap zou Hallo moeten zijn', function () {
            expect(unitTest.boodschap).toEqual('Hallo');
        });
    });
});
