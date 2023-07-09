<template>
    <div class="row justify-content-md-center">

        <div class="col-md-6 offset-md-3 q-pa-md q-gutter-y-md">
            <h1 class="text-white text-center" style="
font-size: 24px;
    /* margin-bottom: 10px; */
    line-height: 20px;
">How quickly can you cloes</h1>
            <p class="text-white text-center q-mb-xl">The lower time to cloes,the more option are offer</p>
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


const inputValues = ref(['Less than 14 days', '14 - 30 days', ' 30 - 60 days', 'More than 60']);
const hiddenInputs = ref([]);


const store = useBuyerStore()

function nextStep(index) {

    const hiddenInputValue = hiddenInputs.value[index].value;


    store.updateBuyer({ howSoonToSell: hiddenInputValue });
    router.push('/buyer/PropertyBeUsed')
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