import axios from 'axios';

export const fetchData= (methodType, path, body) => {
    const URL = `http://localhost:4000/`;
    let options = {
      method: methodType ? methodType : 'GET',
      url: URL + path,
      headers: {
        'content-type': 'application/json', // whatever you want
      }
    }
    if(methodType == 'POST'){
      options.data = body;
    }
    return  axios(options)
      .then(response => {return response.data})
      .catch(error => {
        throw error;
      });
    // axios.get('/recentArticles')
    // .then(res => {
    //   console.log(res);
    // })

    // return 'hi';
  };