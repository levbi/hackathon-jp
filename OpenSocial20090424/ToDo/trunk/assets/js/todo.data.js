
ToDoApp.data = {
	stickies : [],
	PrefKey : {
		STICKIES : "stickies",
		VISIBLE_FRIENDS : "visible_friends"
	},
	getStickies : function(callback) {
		jQuery.opensocial.data.get(ToDoApp.data.PrefKey.STICKIES,"viewer",callback,false);
	},
	onChangeText : function(id) {
		ToDoApp.data.stickies = ToDoApp.data.stickies||[];
		ToDoApp.data.stickies[id] = $j("#sticky"+id+" textarea").val()||"";
		jQuery.opensocial.data.set(ToDoApp.data.PrefKey.STICKIES,ToDoApp.data.stickies);
	},
	getFriends : function() {
		
	}
}
