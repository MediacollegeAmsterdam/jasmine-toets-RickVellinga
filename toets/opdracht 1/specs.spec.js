describe('Meta Test', function() {
    it('Charset zou UTF-8 moeten zijn', function () {
        expect(document.charset).toBe('UTF-8');
    });
    it('Titel zou Voorbeeld toets moeten zijn', function () {
        expect(document.title).toBe('Voorbeeld toets');
    });
});

  describe('Item Test', function () {
    it('Item zou voorbeeld moeten zijn', function () {
        expect(unitTest.item).toBe('voorbeeld');
      });
    it('Nummer zou 3 moeten zijn', function () {
        expect(unitTest.nummer).toEqual(3);
      });
});

describe('Beschrijving test', function () {
    it('Beschrijving zou beschrijving moeten zijn', function () {
        expect(unitTest.beschrijving).toBe('Beschrijving');
    });

});

describe('Boodschap test', function () {
    it('Boodschap zou Hallo moeten zijn', function () {
        expect(unitTest.boodschap).toEqual('Hallo');
    });
});
