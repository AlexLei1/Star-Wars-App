const SWAPI_ROOT = 'https://swapi.dev/api/'
const SWAPI_PEOPLE = 'people'

export const getApiReosource = async (url) => {
	try {
			// Запрашивем данные
			const res = await fetch(url);
			// если url выдает ошибку 404
			if (!res.ok) {
				console.error('Could not fetch.', res.status)
				return false;
			}

			return await res.json();
		// если возникают другие ошибки!
	} catch(error) {
			console.error('Could not fetch.', error.message);
			return false;
	}
}
// вызов с помощью промисов (промисы это)
// getApiReosource(SWAPI_ROOT+SWAPI_PEOPLE);
// 	.then(body => console.log(body))

// вызов с помощью асинхронных функций
(async () => {
	const body = await getApiReosource(SWAPI_ROOT+SWAPI_PEOPLE);
	console.log(body);
})();
 