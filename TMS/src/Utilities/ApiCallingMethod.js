import axios from "axios";

const GetRequest=()=>{
    axios.get(`https://jsonplaceholder.typicode.com/todos`)
    .then(response => {
      console.log('GET Response:', response.data);
    })
    .catch(error => {
      console.error('GET Error:', error);
    });
}

const AddItem = () => {
    axios
      .post(`https://jsonplaceholder.typicode.com/todos`, {
        title: `title`,
        completed: `completed`,
      })
      .then((response) => {
        console.log('POST Response:', response.data);
      })
      .catch((error) => {
        console.error('POST Error:', error);
      });
  };
  
  
  
const DeleteItem = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${201}`)
      .then((response) => {
        console.log('DELETE Response:', response.data);
      })
      .catch((error) => {
        console.error('DELETE Error:', error);
      });
  };
  
  // Example usage:
  

  export  {GetRequest,DeleteItem,AddItem}

// const axios = require('axios');

// // Data to be sent in the POST request
// const postData = {
//   key1: 'value1',
//   key2: 'value2',
// };

// // Send a POST request with data
// axios.post('https://api.example.com/post-endpoint', postData)
//   .then(response => {
//     console.log('POST Response:', response.data);
//   })
//   .catch(error => {
//     console.error('POST Error:', error);
//   });

// const axios = require('axios');

// // Data to be sent in the PUT request
// const putData = {
//   key1: 'new-value1',
//   key2: 'new-value2',
// };

// // Send a PUT request with data
// axios.put('https://api.example.com/put-endpoint', putData)
//   .then(response => {
//     console.log('PUT Response:', response.data);
//   })
//   .catch(error => {
//     console.error('PUT Error:', error);
//   });

// const axios = require('axios');

// // Send a DELETE request
// axios.delete('https://api.example.com/delete-endpoint')
//   .then(response => {
//     console.log('DELETE Response:', response.data);
//   })
//   .catch(error => {
//     console.error('DELETE Error:', error);
//   });
