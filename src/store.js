import {reactive} from 'vue';

export const store = reactive(
    {
        filmList: [],
        serieList: [],
        search: '',
        flagsText: ['cn','de','en','fr','it','ja','ru','zh'],
        cast:[]
        

    }
)