import axios from 'axios';

import { 
	GET_BREEDS, 
	GET_BREEDS_NAME, 
	ERROR_SEARCH,
	GET_DETAIL,
	FILTER_SOURCE,
	SORT_GENERAL,
	GET_TEMPERAMENTS,
	GET_BREEDTEMPERAMENT,
	POST_BREED,
	LOADING ,
} from './actionTypes';

const BASE_URL = 'https://afs-test2.herokuapp.com'

export const getTemperaments = () => {
	return async (dispatch) => {
		var temperamentsInfo = await axios.get(`${BASE_URL}/temperament`);
		return dispatch({ type: GET_TEMPERAMENTS, payload: temperamentsInfo.data})
	}
}

export const getBreeds = () => {
	return async (dispatch) => {
		dispatch({ type: LOADING})
		try {
			var breedsInfo = await axios.get(`${BASE_URL}/dogs`);
			return dispatch({ type: GET_BREEDS, payload: breedsInfo.data});
		} catch (error) {
			breedsInfo = [{
				"id": 0,
				"name": "No data response !!",
				"temperament": "-- API Server down --",
				"image": "http://localhost:3000/DogMania/sad_dog.png",
				"weight_min": "0",
				"weight_max": "0",
				"height_min": "0",
				"height_max": "0",
				"origin": "API"
			}]
			return dispatch({ type: GET_BREEDS, payload: breedsInfo});
		}
		//console.log('Data:',breedsInfo)
	}
}

export const getBreedsName = (nameBreed) => {
	return async (dispatch) => {
		dispatch({ type: LOADING})
		var breedsInfo2 = await axios.get(`${BASE_URL}/dogs?name=${nameBreed}`);
		if(breedsInfo2.data[0].id === 0){
			return dispatch({ type: ERROR_SEARCH, payload: [{id:0, name:'WarnError'}]})
			
		}else{
			return dispatch({ type: GET_BREEDS_NAME, payload: breedsInfo2.data})

		}
	}
}

export const getDetail = (id) => {
	return async (dispatch) => {
		dispatch({ type: LOADING})
		var breedsInfo = await axios.get(`${BASE_URL}/dogs/${id}`);
		return dispatch({ type: GET_DETAIL, payload: breedsInfo.data})

	}
}

export const getBreedstTemperaments = (payload) => {
	return async (dispatch) => {
		dispatch({ type: LOADING})
		return dispatch({ type: GET_BREEDTEMPERAMENT, payload})
	}
}

export const filterSource = (payload) => {
	return (dispatch) => {
		dispatch({ type: LOADING})
		return dispatch({ type: FILTER_SOURCE, payload})

	}
}

export const sortAlphabetic = (payload) => {
	return (dispatch) => {
		dispatch({ type: LOADING})
		return dispatch({ type: SORT_GENERAL, payload})
	}
}

export const postBreed = (payload) => {
	return async (dispatch) => {
		var response = await axios.post(`${BASE_URL}/dog`, payload);
		return dispatch({ type: POST_BREED, payload: response})
	}
}

/*
export const sortweight = (payload) => {
	return (dispatch) => {
		dispatch({ type: LOADING})
		return dispatch({ type: SORT_WEIGHT, payload})
	}
}
*/