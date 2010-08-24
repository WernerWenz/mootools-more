/*
Script: Number.Extras.js
	Specs for Number.Extras.js

License:
	MIT-style license.
*/

describe('Number.Extras', function(){

	describe('Number.uniqueID', function(){
	
		it('should return unique ids', function(){
			expect(Number.uniqueID()).not.toEqual(Number.uniqueID());
		});
	
	});

	describe('Number.format', function(){
		
		it('should format the number', function(){
			
			expect((1235432.163).format({
				decimals: 1,
				group: '.',
				decimal: ',',
				suffix: '+',
				prefix: '-'
			})).toEqual('-1.235.432,2+');

		});
		
		it('should format a negative number', function(){
			expect((-20000).format()).toEqual('-20,000.00');
		});
		
		it('should format a currency', function(){
			expect((2000).formatCurrency()).toEqual('$ 2,000.00');
		});

		it('should format a negative currency', function(){
			expect((-2000).formatCurrency()).toEqual('$ -2,000.00');
		});
		
		it('should format percentage', function(){
			expect((50).formatCurrency()).toEqual('50.00%');
		});
		
	});


});

