<template>
    <div class="row justify-content-md-center">

        <div class="col-md-6 offset-md-3 q-pa-md">
            <h1 class="text-white text-center" style="
    font-size: 24px;
    margin-bottom: 27px;
">What is your Address</h1>


            <q-form @submit="sentForm" @reset="onReset" class="q-gutter-md text-white">


                <q-input label-color="white" v-model="zipCode" outlined rounded label="Zip code *" />
                <q-input label-color="white" v-model="addressProperty" outlined rounded label="Full property address *" />





                <div>
                    <q-btn class="full-width" rounded label="next" type="submit" color="negative" />

                </div>
            </q-form>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useSellerStore } from '../../stores/seller.js'

import { useRouter } from 'vue-router'
const zipCode = ref('')
const addressProperty = ref('')

const router = useRouter()
const store = useSellerStore()

function sentForm() {

    console.log(route.params.state, route.params.city, zipCode.value, addressProperty.value)
    store.updateSeller({ state: route.params.state, city: route.params.city, zipCode: zipCode.value, addressProperty: addressProperty.value });
    router.push('/kindOfProperty')
}

</script>

<style>
.map-container {
    height: 400px;
    /* Adjust the height as needed */
}
</style>