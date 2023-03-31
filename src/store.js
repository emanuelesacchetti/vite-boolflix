import {reactive} from 'vue';

export const store = reactive(
    {
        filmList: [],
        serieList: [],
        search: ''
    }
)