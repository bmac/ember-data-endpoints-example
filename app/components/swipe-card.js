import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);
    this.$('button')[0].onmousemove = (e) => {

	const x = e.pageX - e.target.offsetLeft
	const y = e.pageY - e.target.offsetTop
	
	let halfWidth = (e.target.offsetWidth/ 2);
	let xdeg = (x - halfWidth) / halfWidth * 20;
	e.target.textContent = Math.floor(xdeg) + 'deg';
	
	e.target.style.setProperty('--xdeg', xdeg + 'deg');
	e.target.style.setProperty('--x', `${ x }px`)
	e.target.style.setProperty('--y', `${ y }px`)
}
    
  }
});
