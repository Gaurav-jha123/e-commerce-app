import { call, put, takeEvery } from 'redux-saga/effects';
import axios , { AxiosResponse } from 'axios';
import { fetchBooksStart, fetchBooksSuccess, fetchBooksFailure } from '../booksSlice';

interface Book {
    _id: string;
    title : string;
    description : string;
    image : string;
    price : number;
    features : string;
    author : string;
    rating : number;
    pageCount : number;
}

function* fetchBooks() {
  try {
    console.log('Fetching books...');
    const response : AxiosResponse<{ data : Book[] }> = yield call(axios.get, 'https://e-commerce-app-1riv.onrender.com/api/books');
    yield put(fetchBooksSuccess(response.data.data));
  } catch (error: any) {
    yield put(fetchBooksFailure(error.message));
  }
}

export default function* booksSaga() {
  yield takeEvery(fetchBooksStart.type, fetchBooks);
}
