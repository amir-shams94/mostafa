<template>
    <div class="q-pa-md example-row-equal-width">

        <div class="row">

            <div class="col-md-6 offset-md-3  q-pt-md">
                <div class="q-gutter-md text-center" style="">
                    <h4 class="q-mb-sm text-center text-white">What is the state of the home for sell?</h4>
                    <div class="text-center">
                        <q-input color="white text-white" label-color="silver" @update="searchInput" outlined
                            v-model="searchName" label="Please Search Your States" style=" width: 34rem; margin: 0 auto;">
                            <template v-slot:append>
                                <q-icon name="search" color="silver" />
                            </template>
                        </q-input>
                    </div>
                    <!-- 
                    <ul class="list">
                        <li v-for="s in filteredState" :key="s"><router-link
                                :to="{ name: 'cities', params: { state: `${s}` } }">{{
                                    s
                                }}</router-link> </li>

                    </ul> -->
                    <div class="q-pa-md q-gutter-sm text-white text-center ">

                        <q-btn color="white" text-color="black" v-for="s in filteredState" :key="s"
                            :to="{ name: 'cities', params: { state: `${s}` } }" :label="s" />
                    </div>


                </div>
                <div class="q-pa-md text-white text-center ">
                    <q-btn @click="increaseLimit" color="white" outline style="color: rgb(230, 4, 4);" label="More State" />
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>

import { ref, computed } from 'vue'
import axios from 'axios'
const loading = ref(false)
const limit = ref(12)
const state = ref([])
const searchName = ref('')
async function fetchState() {
    loading.value = true
    const res = await axios.get('https://kshams.ir/realstate/api/state/')
    const states = await res.data.data
    state.value = states
    loading.value = false
}
fetchState();
function searchInput(name) {

    return state.value.filter(
        (sta) =>
            sta.includes(name)

    );


}

function increaseLimit() {
    limit.value += 5
}
const filteredState = computed(() => {
    if (searchName.value === '') {
        return state.value.slice(0, limit.value);
    }

    return searchInput(searchName.value)

})


</script>

<style>
.list {
    list-style: none;
    text-align: center;
    width: 100%;
    padding-left: 0;
}

.list>li {
    text-align: center;
    /* direction: rtl; */
    /* margin: 13px 13px; */
    background: #f7f4f4;
    /* border: 1px solid #f71010; */
    margin-right: 14px;
    margin-bottom: 18px;
    width: 9rem;
    padding: 10px 15px;
    border-radius: 9px;
    display: inline-block;

}

.list>li>a {
    text-decoration: none;
    color: #282828;
}

.q-field__control:before {
    border-radius: 17px;
}
</style>