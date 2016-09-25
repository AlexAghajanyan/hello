const stars = function(x) {
	
	if(x === 0) {
		
		return '';
	
	}
	

	
	return '*' + stars(x-1);

};
  

const space = function(y) {
	
	if (y === 0) { 
		
		return '';
	
	}

	
	
	return ' ' + space(y-1);

};

const triangleStars = function(z) {

	if (z === 0) { 
		
		return 0;
 
	}

	console.log(space(z-1) + stars((num-z)*2 + 1));

	return triangleStars(z-1);
	
};	

const num = 4;	

triangleStars(num);