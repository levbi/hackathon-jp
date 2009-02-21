
// Based on OpenSocialApps_2
// http://sandbox.orkut.com/Main#Application.aspx?appId=591740862440&nocache=1

function init() {
	getFriends();
}

function getFriends() {
	var params = {};
	params[opensocial.DataRequest.PeopleRequestFields.PROFILE_DETAILS] = [
		opensocial.Person.Field.AGE,
		opensocial.Person.Field.DATE_OF_BIRTH,
		opensocial.Person.Field.GENDER,
		opensocial.Person.Field.CURRENT_LOCATION
	];
	var req = opensocial.newDataRequest();
	req.add(req.newFetchPeopleRequest('VIEWER_FRIENDS', params), 'viewerFriends');
	req.send(onLoadFriends);
}

function onLoadFriends(data) {
	var viewerFriends = data.get('viewerFriends').getData();
	html = new Array();
	viewerFriends.each(function(person) {
		html.push('<div class="person">');
		html.push('<h3>' + person.getDisplayName() + '</h3>');
		html.push('<div>');
		html.push('<img src="'   + person.getField(opensocial.Person.Field.THUMBNAIL_URL    ) + '" align="left" />');
		html.push('<ul>');
		html.push('<li>年齢: '   + person.getField(opensocial.Person.Field.AGE              ) + '</li>');
		html.push('<li>誕生日: ' + person.getField(opensocial.Person.Field.DATE_OF_BIRTH    ) + '</li>');
		html.push('<li>性別: '   + person.getField(opensocial.Person.Field.GENDER           ) + '</li>');
		html.push('<li>所在地: ' + person.getField(opensocial.Person.Field.CURRENT_LOCATION ) + '</li>');
		html.push('</ul>');
		html.push('<br clear="all" />');
		html.push('</div>');
	});
	document.getElementById('peopleArea').innerHTML = html.join('');
}


