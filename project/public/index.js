$(function(){

	function getUsers(){
		$.ajax({
			url: '/users',
			method: 'GET',
			success: renderUsers,
			error: logError
		})
	}

	function renderUsers(data){
		data.forEach(function(item){
			$('#user-list').append('<li><ul><li>Name: ' + item.name + 
				'</li><li>Favorite Number: ' + item.favoriteNumber + '</li>' + 
				(item.starred ? '<li>Starred!</li>' : '') + '</ul></li>' )
		});
	}

	getUsers();

	$('#searchForm').on('submit', function(event){
		event.preventDefault();
		$.ajax({
			url: '/user',
			method: 'GET',
			data: {
				name: $('[name=searchName]').val()
			},
			success: renderSearchResult,
			error: logError
		});
	});

	function renderSearchResult(data){		
		data.forEach(function(item){
			$('#search-list').html('')
			$('#search-list').append('<li><ul><li>Name: ' + item.name + 
				'</li><li>Favorite Number: ' + item.favoriteNumber + '</li>' + 
				(item.starred ? '<li>Starred!</li>' : '') + '</ul></li>' )
		});
	}


	function logError(error){
		console.dir(error);
	}
})