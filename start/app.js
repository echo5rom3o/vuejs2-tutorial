new Vue({
	el: '#header',
	data: {
		name: "Steve",
		job: "Door Kicker",
		website: "http://www.vsrodriguez.com",
		websiteTag: "<a href='http://www.vsrodriguez.com' target='_blank'>My Site</a>"
	},
	methods: {
		greet: function(time){
			return "Good " + time + ", " + this.name + "!"
		}
	}
});
