const hideAndShow = () => {
	let prevScrollPos = window.scrollY;
	window.onscroll = function () {
		let currentScrollPos = window.scrollY;
		if (prevScrollPos > currentScrollPos) {
			document.querySelector(".large__nav").style.top = "0";
		} else {
			document.querySelector(".large__nav").style.top = "-90px";
		}
		prevScrollPos = currentScrollPos;
	};
};
export default hideAndShow;
