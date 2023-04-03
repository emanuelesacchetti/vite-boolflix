import {reactive} from 'vue';

export const store = reactive(
    {
        filmList: [],
        serieList: [],
        search: '',
        flagsText: ['en', 'fr', 'it', 'us']
    }
)