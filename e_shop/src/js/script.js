;(function(){

	const productsBaseEventName = 'menuReady';
	const productsBaseEvent = new Event(productsBaseEventName);
	const productBase = null;

	function StorageHelper(){
		this.storage = localStorage;

		this.get = (key) => {
			return JSON.parse(localStorage.getItem(key));
		}
		this.set = (key, value) => {
			localStorage.setItem(key, JSON.stringify(value));
		}
		this.remove = (key) => {
			localStorage.removeItem(key);
		}
	}

	const Storage = new StorageHelper();

	const getProducts = (url) => {
		return fetch(url);	
	}

	getProducts('http://my-json-server.typicode.com/davaynamore/fakeserver/db')
	.then(  
		function(response) {  
			if (response.status !== 200) {  
				console.log(`Looks like there was a problem. Status Code: ${response.status}`); 
				return;  
			}


			response.json()
			.then(function(data) {
				const {products} = data;
				console.log(products);
				Storage.set('products_offer', products);
				document.dispatchEvent(productsBaseEvent);
			});  
		}  
		)  
	.catch(function(err) {  
		console.log('Fetch Error :-S', err);  
	});


	document.addEventListener(productsBaseEvent, () => {		
		productBase = Storage.get('products_offer');
	});


})();