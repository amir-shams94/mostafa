<template>
    <div class="row justify-content-md-center">

        <div class="col-md-6 offset-md-3 q-pa-md">
            <h1 class="text-white text-center" style="
    font-size: 24px;
    margin-bottom: 27px;
">What kind of property do you want to buy</h1>

            <div class="row" style="justify-content: center;">
                <div class="col-md-3 q-mb-lg q-mr-sm text-center cursor" v-for="(value, index) in inputValues" :key="index">

                    <input type="hidden" ref="hiddenInputs" :value="value" />
                    <q-btn class="q-pa-md q-px-md size-btn" color="white" text-color="black" @click="nextStep(index)">{{
                        value
                    }}</q-btn>


                </div>
                <!-- <div class="col text-center cursor">
                    <input type="hidden" ref="hiddenInput" value=" multy-family" />
                    <q-btn class="q-pa-md q-px-md size-btn" color="white" text-color="black" @click="nextStep">
                        multy-family</q-btn>

                </div>
                <div class="col text-center cursor">
                    <q-btn class="q-pa-md q-px-md size-btn" color="white" text-color="black" @click="nextStep">
                        Townhomes</q-btn>
                </div>
            </div>
            <div class="row q-gutter-x-md ">
                <div class="col text-center cursor">
                    <q-btn class="q-pa-md q-px-md size-btn" color="white" text-color="black" @click="nextStep"> Mobile
                        Homes</q-btn>
                </div>
                <div class="col text-center cursor size-btn">
                    <q-btn class="q-pa-md q-px-md size-btn" color="white" text-color="black" @click="nextStep">
                        Apartments</q-btn>
                </div>
                <div class="col text-center cursor">
                    <q-btn class="q-pa-md q-px-md size-btn" color="white" text-color="black" @click="nextStep">
                        Condos</q-btn>
                </div> -->
            </div>


        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useBuyerStore } from '../../stores/buyer.js'
import { useRouter, useRoute } from 'vue-router'

const store = useBuyerStore()
const router = useRouter()


const inputValues = ref(['Single Family', 'Multy-family', 'TownsHomes', ' Mobiles Homes', 'Apartmens', 'Condos']);
const hiddenInputs = ref([]);
const route = useRoute()



function nextStep(index) {
    const hiddenInputValue = hiddenInputs.value[index].value;
    store.updateBuyer({ state: route.params.state, city: route.params.city, kideOfProperty: hiddenInputValue });

    router.push('/buyer/RangePrice')


}

</script>

<style>
.map-container {
    height: 400px;
    /* Adjust the height as needed */
}

.cursor {
    cursor: pointer;

}

.size-btn {
    width: 11.5rem;
}
</style>