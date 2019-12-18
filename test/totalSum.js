const expect = require('chai').expect

// first describe module or method being tested. Group things together
// 
// describe('#totalSum()', () => {
// 	describe('the user will provide 2 numbers', () => {
// 		it ('calculate the sum of the 2 numbers', () => {
// 			expect(totalSum(2,5)).to.eql(7); 
// 		}); 
// 	}); 
// }); 

// describe('#greeting()', () => {
// 	describe('the user will provide name', () => {
// 		it ('Say Hello to User! :D', () => {
// 			expect(greeting("Geio Yu")).to.contains("Hello, "); 
// 		}); 
// 	}); 
// });
describe('#getEvenNumbers()', () => {
	describe('Get Even Numbers between Min and Max', () => {
		it ('Get Even Numbers between 2 and 10', () => {
			expect(getEvenNumbers(2,10)).to.be.an('array');
		});  
		it ('Get Even Numbers between 10 and 1', () => {
			expect(getEvenNumbers(10,1)).to.eql("Invalid Numbers");
		});
		it ('Get Even Numbers between 2 and 10', () => {
			expect(getEvenNumbers(2,10)).to.have.all.members([ 2, 4, 6, 8, 10 ]);
		});
		it ('Get Even Numbers between 10 and 10', () => {
			expect(getEvenNumbers(10,10)).to.have.all.members([10]);
		});
		it ('Get Even Numbers between -2 and 10', () => {
			expect(getEvenNumbers(-2,10)).to.eql("Please Enter Positive Numbers");
		});
	}); 
});

const totalSum = (num1, num2) => {
	return num1 + num2; 
}

const greeting = (name) => {
	return ("Hello, "+name);
}

const getEvenNumbers = (min, max) => {
	var temp = []
	for(let i=min;i<=max;i++){
		if(i%2 == 0){
			temp.push(i)
		}
	}
	return  (min < 0 || max < 0 ) ? "Please Enter Positive Numbers" : (min > max) ? "Invalid Numbers" : temp;
}
