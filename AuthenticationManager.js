import buffer from 'buffer';
class AuthenticationManager {
  login(credentials, callback) {
    var buf = new buffer.Buffer(credentials.username + ':' + credentials.password);
    var encondeAuth = buf.toString('base64');
    
    fetch('https://api.github.com/user', {
      headers: {
        'Authorization': 'Basic ' + encondeAuth
      }
    })
    .then((response) => {
      console.log(response);
      if(response.status >= 200 && response.status < 300){
        return response;
      }
      throw {
        badCredentials: response.status == 401,
        unknownError: response.status != 401
      }
    })
    .then((response) => response.json())
    .then((results) => {
      return callback({ success: true });
    })
    .catch((error) => {
      return callback(error);
    })
  }
}

module.exports = new AuthenticationManager();