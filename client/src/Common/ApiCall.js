let BASE_URL = "http://localhost:3000/api/products";

const getProducts = (page,type) => {  
    return fetch(BASE_URL+`?_page=${page}&_limit=10&_sort=${type}`, {
        method: "GET",        
      })
        .then(response => {
          return response.json();
        })
        .then(function(myJson) {
          return JSON.stringify(myJson);
        })
        .catch(err => {
          return err;
        });
}


const getAdds = (rand) => {    

    return fetch(`http://localhost:3000/ads/?r=${rand}`, {
        method: "GET",        
      })
        .then(response => {
          return response.url;
        })
        .catch(err => {
          return err;
        });
}

export {getProducts, getAdds};