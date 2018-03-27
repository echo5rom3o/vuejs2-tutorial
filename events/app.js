new Vue({
	el: '#header',
	data: {
		age: 31,
		x: 0,
		y: 0
	},
	methods: {
		add: function(val) {
			this.age += val
		},
		subtract: function(val) {
			this.age -= val
		},
		updateXY: function(event) {
			console.log(event)
			this.x = event.offsetX
			this.y = event.offsetY
		},
		click: function(){
			alert('You Cliked Me')
		}
	}
})
