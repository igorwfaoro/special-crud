import axios from 'axios';
import { URLS } from '../constants/urls';

export const http = axios.create({
    baseURL: URLS.api.base,
    headers: {
        'Content-Type': 'application/json'
    }
});