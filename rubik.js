/*
 * Rubik's Cube Solver
 * Created by Ben Mesirow
 * Aug 22, 2013

 CUBE ENUMERATION MAP:

			   +--------------+
			   |  0    1    2 |
			   |              |
			   |  3    U    4 |
			   |              |
			   |  5    6    7 |
+--------------+--------------+--------------+--------------+
|  8    9   10 | 11   12   13 | 14   15   16 | 17   18   19 |  
|              |              |              |              |
| 20    L   21 | 22    F   23 | 24    R   25 | 26    B   27 | 
|              |              |              |              |
| 28   29   30 | 31   32   33 | 34   35   36 | 37   38   39 |
+--------------+--------------+--------------+--------------+
               | 40   41   42 | 
               |              |
               | 43    D   44 |
               |              |
               | 45   46   47 |
               +--------------+
 */

function FaceIsometry(cycles) {
 	this.cycles = cycles;
 	this.composedWith = function(iso) {
 		var length = this.cycles.length
 		if (iso.cycles.length == length) {
 			var composition = new Array(length);
 			for (var i = 0; i < length; i++) {
 				composition[i] = iso.cycles[this.cycles[i]];
 			}
 			return new FaceIsometry(composition);
 		}
 		else {
 			console.log("error: arrays not the same size");
 			return this;
 		}
  	}
} 
/* note: face isometry looks like inverse move as
 *       indexed function in shape of cube diagram.
 */
var F = new FaceIsometry([0,  1,  2, 
						   3,/*U*/ 4, 
			  			  14, 24, 34, 
			   8,  9,  7, 13, 23, 33, 42, 15, 16, 17, 18, 19,
			  20,/*L*/ 6, 12,/*F*/32, 41,/*R*/25, 26,/*B*/27,
			  28, 29,  5, 11, 22, 31, 40, 35, 36, 37, 38, 39,
			 		   	  10, 21, 30,
			 	   		  43,/*D*/44,
			 			  45, 46, 47]);

var B = new FaceIsometry([28, 20,  8,
						   3,/*U*/ 4,
						   5,  6,  7,
			  45,  9, 10, 11, 12, 13, 14, 15,  0, 19, 27, 39,
			  46,/*L*/21, 22,/*F*/23, 24,/*R*/ 1, 18,/*B*/38,
			  47, 29, 30, 31, 32, 33, 34, 35,  2, 17, 26, 37,
			  			  40, 41, 42,
			  			  43,/*D*/44,
			  			  36, 25, 16]);

var U = new FaceIsometry([2,  4,  7,
	                      1,/*U*/ 6,
	                      0,  3,  5,
	         17, 18, 19,  8,  9, 10, 11, 12, 13, 14, 15, 16,
	         20,/*L*/21, 22,/*F*/23, 24,/*R*/25, 26,/*B*/27,
	         28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
	         			 40, 41, 42,
	         			 43,/*D*/44,
	         			 45, 46, 47]);

var D = new FaceIsometry([0,  1,  2,
						  3,/*U*/ 4,  
						  5,  6,  7,  
		      8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
		     20,/*L*/21, 22,/*F*/23, 24,/*R*/25, 26,/*B*/27,
		     37, 37, 39, 28, 29, 30, 31, 32, 33, 34, 35, 36,
		                 45, 43, 40,
		                 46,/*D*/41,
		                 47, 44, 42]);

var R = new FaceIsometry([0,  1, 37,
	                      3,/*U*/26,
	                      5,  6, 17,
	          8,  9, 10, 11, 12,  2, 16, 25, 36, 47, 18, 19,
	         20,/*L*/21, 22,/*F*/ 4, 15,/*R*/35, 44,/*B*/27,
	         28, 29, 30, 31, 32,  7, 14, 24, 34, 42, 38, 39,
	                     40, 41,  2,
	                     43,/*D*/ 4,
	                     45, 46,  7]);

var L = new FaceIsometry([11,  1,  2,
	                      22,/*U*/ 4,
	                      31,  6,  7,
	          10, 21, 30, 40, 12, 13, 14, 15, 16, 17, 18,  5,
	           9,/*L*/29, 43,/*F*/23, 24,/*R*/25, 26,/*B*/ 3,
	           8, 20, 28, 45, 32, 33, 34, 35, 36, 37, 38,  0,
	                      39, 41, 42,
	                      27,/*D*/44,
	                      19, 46, 47]);
	

var Cube = {
	"F": F,
	"B": B,
	"U": U,
	"D": D,
	"R": R,
	"L": L
};

var moves = ["F", "B", "U", "D", "R", "L"];
var blah = [];

/* Now we run tests with random permutations */
for (var i = 0; i < 357; i += 1) {
	blah.push(moves[Math.floor(Math.random()*6)]);
}

/*
var L4 = L.composedWith(L.composedWith(L.composedWith(L)));

for (var i = 0; i < 48; i +=1) {
	console.log(L4.cycles[i]);
}
*/
