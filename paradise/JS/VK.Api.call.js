VK.Api.call('users.get', {user_ids: 6492, v:"5.73"}, function(r) {
    if(r.response) {
      alert('Привет, ' + r.response[0].first_name);
    }
  });