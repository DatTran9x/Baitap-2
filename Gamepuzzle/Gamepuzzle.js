function Change(a) {

	let link = "img/";
	let ArrayLinkImage =
		[
			[
				"funny-cat1_part1x1.jpg",
				"monkey_part1x1.jpg",
				"panda_swap_part1x1.jpg",
			],
			[
				"funny-cat1_part2x1.jpg",
				"monkey_part2x1.jpg",
				"panda_swap_part2x1.jpg",
			],
			[
				"funny-cat1_part3x1.jpg",
				"monkey_part3x1.jpg",
				"panda_swap_part3x1.jpg",
			],
			[
				"funny-cat1_part4x1.jpg",
				"monkey_part4x1.jpg",
				"panda_swap_part4x1.jpg",
			],
			[
				"funny-cat1_part5x1.jpg",
				"monkey_part5x1.jpg",
				"panda_swap_part5x1.jpg",
			],
		];
	let index1 = (Math.floor(Math.random()*4));
	let index = (Math.floor(Math.random()*5));
	document.getElementById(a).src = link + ArrayLinkImage[a][index1];
	document.getElementById(a).setAttribute("datatype",index1);

	let a1 = document.getElementById("1").getAttribute("datatype");
	let a2 = document.getElementById("2").getAttribute("datatype");
	let a3 = document.getElementById("3").getAttribute("datatype");
	let a4 = document.getElementById("4").getAttribute("datatype");
	let a5 = document.getElementById("5").getAttribute("datatype");
	if (a1 === a2 && a2 === a3 && a3 === a4 && a4 === a5){
		document.getElementById("1").style.boxShadow = "red 4px 4px 9px";
		document.getElementById("2").style.boxShadow = "red 4px 4px 9px";
		document.getElementById("3").style.boxShadow = "red 4px 4px 9px";
		document.getElementById("4").style.boxShadow = "red 4px 4px 9px";
		document.getElementById("5").style.boxShadow = "red 4px 4px 9px";
	}else {
		document.getElementById("2").style.boxShadow = "black 4px 4px 9px";
		document.getElementById("3").style.boxShadow = "black 4px 4px 9px";
		document.getElementById("4").style.boxShadow = "black 4px 4px 9px";
		document.getElementById("5").style.boxShadow = "black 4px 4px 9px";
		document.getElementById("1").style.boxShadow = "black 4px 4px 9px";
	}
}


