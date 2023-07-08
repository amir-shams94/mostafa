<template>
    <div class="q-pa-md example-row-equal-width">

        <div class="row">

            <div class="col-md-6 offset-md-3 q-pa-md">
                <div class="q-gutter-md text-center" style="">
                    <h4 class="q-mb-sm text-white text-center">Sellect interested cities to receive targeted suggestion?
                    </h4>
                    <div class="text-center">
                        <q-input color="grey-3" label-color="silver" @update="searchInput" outlined v-model="searchName"
                            label="Please Search Your States" style=" width: 34rem; margin: 0 auto;">
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
                            :to="{ name: 'kindOfPropertyBuyer', params: { city: `${s}` } }" :label="s" />
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
import { useRoute } from 'vue-router'
import axios from 'axios'
const loading = ref(false)
const cities = ref([])
const searchName = ref('')
const route = useRoute()
const StateName = route.params.state
async function fetchCity() {
    loading.value = true
    const res = await axios.post('https://kshams.ir/realstate/api/cities', {
        state: `${StateName}`
    })
    cities.value = await res.data.data
    loading.value = false
}
fetchCity();
function searchInput(name) {

    return cities.value.filter(
        (sta) =>
            sta.includes(name)

    );


}

const filteredState = computed(() => {
    if (searchName.value === '') {
        return cities.value
    }

    return searchInput(searchName.value)

})


</script>

<style>
.list {
    list-style: none;
    text-align: center;

    width: 100%
}

.list>li {
    text-align: center;
    /* direction: rtl; */
    /* margin: 13px 13px; */
    background: #ddd;
    margin-right: 14px;
    margin-bottom: 18px;
    width: auto;
    padding: 10px 15px;
    border-radius: 9px;
    display: inline-block;

}

.list>li>a {
    text-decoration: none;
    color: #282828;
}
</style>