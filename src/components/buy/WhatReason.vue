<template>
    <div class="row justify-content-md-center">

        <div class="col-md-6 offset-md-3 q-pa-md q-gutter-y-md">
            <h1 class="text-white text-center" style="
    font-size: 24px;
    margin-bottom: 27px;
">What is your reason for sell property</h1>

            <q-input v-model="reason" filled type="textarea" style="background:#fff" />
            <div class="text-center">

                <q-btn @click="nextStep" color="negative" class=" text-dark " style="background:#fff;width:20rem" rounded
                    label="next" type="" />
            </div>






        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useSellerStore } from '../../stores/seller.js'
import { useRouter } from 'vue-router'
const reason = ref('')


const router = useRouter()
const store = useSellerStore()



function nextStep() {

    store.updateSeller({ whatSellReason: reason.value });

    router.push('/information')


}

</script>

<style>
.map-container {
    height: 400px;
    /* Adjust the height as needed */
}

.lowercase {
    text-transform: lowercase;
}
</style>