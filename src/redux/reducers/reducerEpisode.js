import * as types from '../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    episode:[],
    image: []
}

export default function reduceEpisode(state = initialState, action){
    switch (action.type){

        //GET Episode
        case `${types.GET_EPISODE}_PENDING`:
        return {
            ...state,
            isLoading:true
        }
        case `${types.GET_EPISODE}_FULFILLED`:
        return {
            ...state,
            isLoading:false,
            isSuccess:true,
            episode: action.payload.data
        }
        case `${types.GET_EPISODE}_REJECTED`:
        return {
            ...state,
            isLoading:false,
            isError:true
        }

        //GET Image
        case `${types.GET_IMAGE_EPISODE}_PENDING`:
        return {
            ...state
        }
        case `${types.GET_IMAGE_EPISODE}_FULFILLED`:
        return {
            ...state,
            image: action.payload.data
        }
        case `${types.GET_IMAGE_EPISODE}_REJECTED`:
        return {
            ...state
        }
        default:
        return state;
    }
}