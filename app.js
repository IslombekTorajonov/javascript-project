new fullpage('#fullpage',{
	css3: true,

	autoScrolling: true,
	scrollHorizontally:true,
	sectionsColor:['#160661','#4a1560','#562fb9','#020041']
});
function toRight() {
    anime({
        targets: '.toRight',
        keyframes: [
            { translateX: [-500, 0] },
            // { translateX: 0 },
        ],
        duration: 2000
    });
}
toRight()