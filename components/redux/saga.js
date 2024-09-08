import { put, takeEvery } from "redux-saga/effects";
import { SET_USER_DATA, USER_LIST } from './constants';

function* UserList() {
    const url = "https://raw.githubusercontent.com/saqibbedar/fake-user-data-api/main/data.json";
    let data = yield fetch(url);
    data = yield data.json();
    yield put({type:SET_USER_DATA,data});
}
function* sagaData(){
    yield takeEvery(USER_LIST,UserList);  
}


export default sagaData;