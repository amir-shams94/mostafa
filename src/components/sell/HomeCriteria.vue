<template>
    <div class="row justify-content-md-center">

        <div class="col-md-6 offset-md-3 q-pa-md">
            <h1 class="text-white text-center" style="
    font-size: 24px;
    margin-bottom: 27px;
">What is your home criteria</h1>


            <q-form @submit="sentForm" @reset="onReset" class="q-gutter-md text-white">


                <q-input label-color="white" v-model="HomeCriteria.beds" outlined rounded label="Beds" />
                <q-input label-color="white" v-model="HomeCriteria.bathrooms" outlined rounded label="Bathrooms" />
                <q-input label-color="white" v-model="HomeCriteria.squerFeet" outlined rounded label="Squre Feet" />
                <q-input label-color="white" v-model="HomeCriteria.age" outlined rounded label="Age" />






                <div>
                    <q-btn class="full-width" rounded label="next" type="submit" color="negative" />

                </div>
            </q-form>

        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useSellerStore } from '../../stores/seller.js'


import { useRouter } from 'vue-router'
const HomeCriteria = reactive({
    beds: '',
    bathrooms: '',
    squerFeet: '',
    age: '',

})

const router = useRouter()
const store = useSellerStore()


function sentForm() {

    store.updateSeller({ HomeCriteria });

    router.push('/seller/approximatly')
}

</script>

<style>
.map-container {
    height: 400px;
    /* Adjust the height as needed */
}
</style>