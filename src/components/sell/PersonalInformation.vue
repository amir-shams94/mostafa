<template>
    <div class="row justify-content-md-center">

        <div class="col-md-6 offset-md-3 q-pa-md">
            <h1 class="text-white text-center" style="
font-size: 24px;
    /* margin-bottom: 10px; */
    line-height: 20px;
">Personal information</h1>
            <p class="text-white text-center q-mb-xl">Our services are 100% free</p>


            <q-form @submit="sentForm" @reset="onReset" class="q-gutter-md text-white">


                <q-input label-color="white" v-model="personalInformation.fullName" outlined rounded label="Full Name" />
                <q-input label-color="white" v-model="personalInformation.emailAddress" outlined rounded
                    label="Email Address" />
                <q-input label-color="white" v-model="personalInformation.phone" outlined rounded label="Squre Phone" />







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
import { useQuasar } from 'quasar'

import { useRouter } from 'vue-router'

const personalInformation = reactive({
    fullName: '',
    emailAddress: '',
    phone: ''
})

const router = useRouter()
const store = useSellerStore()

const $q = useQuasar()
function sentForm() {
    $q.notify({
        message: `Thank You  For Complete Steps`,
        type: "positive",
        position: "top",
    });
    // console.log(route.params.state, route.params.city, zipCode.value, addressProperty.value)
    store.updateSeller({ personalInformation });
    console.log(store.seller);
    router.push('/seller/congratulations')
}

</script>

<style>
.map-container {
    height: 400px;
    /* Adjust the height as needed */
}
</style>