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
import { useBuyerStore } from '../../stores/buyer.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const inputValues = ref(['$ 150 k or less', '$ 150 k - $ 300 k', '$ 300 k - $ 500 k', '$ 500 k - $ 800 k', '$ 800 k - $ 1.5 M', '$ 1.5 M or more']);
const hiddenInputs = ref([]);


const store = useBuyerStore()

function nextStep(index) {
    const hiddenInputValue = hiddenInputs.value[index].value;

    store.updateBuyer({ RangePrice: hiddenInputValue });
    router.push('paymentBuy')
}

</script>

<style>
.map-container {
    height: 400px;
    /* Adjust the height as needed */
}
</style>