// Add your code here
// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// };

// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   }, 
//   body: JSON.stringify(formData)
// };

// fetch('http://localhost:3000/dogs', configObj)
//   .then(function(resp){
//     return resp.json();
//   })
//   .then(function(obj){
//     console.log(obj)
//   })
//   .catch(function(error){
//     alert('Bad things! Ragnarôk!');
//     console.log(error.message)
//   })

  function submitData(name, email){
    return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
        name,
        email
        })
      })
      .then(function(resp){
        return resp.json();
      })
      .then(function(obj){
        document.body.innerHTML = obj['id']
      })
      .catch(function(error){
        document.body.innerHTML = error.message
      })
  }
      