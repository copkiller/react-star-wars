const SWAPI_ROOT = 'https://swapi.dev/api/';
const SWAPI_PEOPLE = 'people';

//! Обычные промисы
// export const getApiResource = (url) => {
// 	fetch(url)
// 		.then(res => res.json())
// 		.then(res => console.log(res))
// 		.catch(err => console.log(err))
// }
//! /Обычные промисы

//! async/await
export const getApiResource = async (url) => {
	try {
		const res = await fetch(url);

		if (!res.ok) {
			console.log('Could not fetch.', res.status);
			return false;
		}

		return await res.json();
	} catch (error) {
		console.error('Could not fetch.', error);
		return false
	}
}

// const body = getApiResource(SWAPI_ROOT + SWAPI_PEOPLE); //* ПОЧЕМУ ЭТО ОТРАБАТЫВАЕТСЯ??
// console.log(body); //* pending; Так не работает!!!

//! Способ через обычные промисы
getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
	.then(body => console.log(body));

//! Способ через ассинхронную самовызывающуюсф функцию
(async () => {
	const body = getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
	console.log(body);
})();