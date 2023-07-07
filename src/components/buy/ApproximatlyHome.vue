<template>
    <div class="row justify-content-md-center">

        <div class="col-md-6 offset-md-3 q-pa-md q-gutter-y-md">
            <h1 class="text-white text-center" style="
    font-size: 24px;
    margin-bottom: 27px;
">Wha price range are you looking in</h1>

            <div class="col-md-3 q-mb-lg q-mr-xl text-center cursor" v-for="(value, index) in inputValues" :key="index">

                <input type="hidden" ref="hiddenInputs" :value="value" />
                <q-btn class="full-width text-dark " color="white" text-color="black" @click="nextStep(index)">{{
                    value
                }}</q-btn>


            </div>



        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useSellerStore } from '../../stores/seller.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const inputValues = ref([]);
const hiddenInputs = ref([]);


const store = useSellerStore()

function nextStep(index) {
    const hiddenInputValue = hiddenInputs.value[index].value;

    store.updateSeller({ approximatlyHome: hiddenInputValue });
    router.push('/payment')
}

</script>

<style>
.map-container {
    height: 400px;
    /* Adjust the height as needed */
}
</style>