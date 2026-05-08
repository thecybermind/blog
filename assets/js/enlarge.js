$(document).ready(function () {
	Array.from(document.getElementsByClassName("container-md")).forEach(element => {
	  element.classList.add("container-xl");
	  element.classList.remove("container-md");
	});

	Array.from(document.getElementsByClassName("col-xl-8")).forEach(element => {
	  // element.classList.add("col-xl-10");
	  element.classList.remove("col-xl-8");
	});

	Array.from(document.getElementsByClassName("offset-xl-2")).forEach(element => {
	  // element.classList.add("offset-xl-1");
	  element.classList.remove("offset-xl-2");
	});
});
