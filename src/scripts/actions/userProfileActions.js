import {fetchUser, errorHandler, postData, getData, putData, deleteData} from './index.js'
import {FETCH_USER, UPDATE_USER_ERROR, UPDATE_USER} from './types.js'

export function updatePersonalInfo(userId, updatedInfo) {

	return function(dispatch) {

		putData(UPDATE_USER, UPDATE_USER_ERROR, true, `/user/${userId}`, dispatch, updatedInfo)

	}

}	
