import { Cat, FavoriteCat } from '@/types/Cat';
import buildQuery from '@/utils/buildQuery';
import axios, { AxiosResponse } from 'axios';
import axiosInstance from '@/utils/axios';

interface CatListForm {
  limit: number;
  has_breeds?: number;
}

const api = 'https://api.thecatapi.com/v1';

export const fetchCatList = async (form: CatListForm): Promise<AxiosResponse<Cat[]>> => {
  try {
    const response = await axios.get<Cat[]>(`${api}/images/search${buildQuery(form)}`);
    return response;
  } catch (e: any) {
    console.error(e);
    throw e;
  }
};

export const fetchCatBreedList = async (form: CatListForm): Promise<AxiosResponse<Cat[]>> => {
  try {
    const response = await axios.get<Cat[]>(`${api}/breeds`);
    return response;
  } catch (e: any) {
    console.error(e);
    throw e;
  }
};
export const fetchCatFavoritesList = async (form: CatListForm): Promise<AxiosResponse<FavoriteCat[]>> => {
  try {
    const response = await axiosInstance.get<FavoriteCat[]>(`${api}/favourites`);
    return response;
  } catch (e: any) {
    console.error(e);
    throw e;
  }
};

export const fetchBreed = async (id: string): Promise<AxiosResponse<Cat[]>> => {
  try {
    const form = {
      limit: 8,
      breed_ids: id,
    };
    const response = await axios.get<Cat[]>(`${api}/images/search/${buildQuery(form)}`);
    return response;
  } catch (e: any) {
    console.error(e);
    throw e;
  }
};
export const fetchCat = async (id: string): Promise<AxiosResponse<Cat>> => {
  try {
    const response = await axios.get<Cat>(`${api}/images/${id}`);
    return response;
  } catch (e: any) {
    console.error(e);
    throw e;
  }
};

export const addToFavorites = async (id: string): Promise<AxiosResponse> => {
  try {
    const form = { image_id: id };
    const response = await axiosInstance.post(`${api}/favourites`, form);
    return response;
  } catch (e: any) {
    console.error(e);
    throw e;
  }
};
