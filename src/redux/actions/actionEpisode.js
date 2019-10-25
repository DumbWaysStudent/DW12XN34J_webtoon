import * as types from '../types'
import axios from 'axios'

export const handleGetEpisode = (idWebtoon) => ({
    type: types.GET_EPISODE,
    // payload: axios({
    //     method: 'GET',
    //     url: `https://skytoon-api.herokuapp.com/api/v1/webtoon/${params.id_webtoon}/episodes`,
    //     headers: {
    //         Authorization: params
    //     }
    // }),
    payload: axios.get(`https://skytoon-api.herokuapp.com/api/v1/webtoon/${idWebtoon}/episodes`)
})

export const handleAddEpisode = (params) => ({
    type: types.ADD_EPISODE,
    payload: axios({
        method: 'POST',
        url: `https://skytoon-api.herokuapp.com/api/v1/user/${params.userId}/webtoon/${params.webtoonId}/episode`,
        headers: {
            Authorization: params.token
        }
    })
})

export const handleUpdateEpisode = (params) => ({
    type: types.UPDATE_EPISODE,
    payload: axios({
        method: 'PUT',
        url: `https://skytoon-api.herokuapp.com/api/v1/user/${params.userId}/webtoon/${params.webtoonId}/episode/${params.episodeId}`,
        headers: {
            Authorization: params.token
        }
    })
})

export const handleDeleteEpisode = (params) => ({
    type: types.DELETE_EPISODE,
    payload: axios({
        method: 'DELETE',
        url: `https://skytoon-api.herokuapp.com/api/v1/user/${params.userId}/webtoon/${params.webtoonId}/episode/${params.episodeId}`,
        headers: {
            Authorization: params.token
        }
    })
})

export const handleGetImage = (params) => ({
    type: types.GET_IMAGE_EPISODE,
    payload: axios({
        method: 'GET',
        url: `https://skytoon-api.herokuapp.com/api/v1/user/${params.user_id}/webtoon/${params.webtoon_id}/episode/${params.episode_id}/images`,
        headers: {
            Authorization: params.token
        }
    })
})

