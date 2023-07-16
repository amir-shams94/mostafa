<template>
    <div class="row justify-content-md-center">

        <div class="col-md-6 offset-md-3 q-pa-md q-gutter-y-md">
            <h1 class="text-white text-center" style="
    font-size: 24px;
    margin-bottom: 27px;
">How do you make your payment</h1>
            <div class="col-md-3 q-mb-lg q-mr-xl text-center cursor" v-for="(value, index) in inputValues" :key="index">

                <input type="hidden" ref="hiddenInputs" :value="value" />
                <q-btn class="full-width text-dark " color="white" text-color="black" @click="nextStep(index)">{{
                    value
                }}</q-btn>


            </div>
            <div class="col-md-3 q-mb-lg q-mr-xl text-center cursor">

                <q-input label-color="white" v-model="otherInput" outlined rounded label="other" />


            </div>

            <div class="col-md-3 q-mb-lg q-mr-xl text-center cursor">
                <q-btn label="next" type="submit" color="negative" @click="nextStep" />

            </div>


        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useBuyerStore } from '../../stores/buyer.js'
import { useRouter } from 'vue-router'

const router = useRouter()


const inputValues = ref(['cash', 'Private money', 'Ioan']);
const hiddenInputs = ref([]);
const otherInput = ref('')

const store = useBuyerStore()

function nextStep(index) {
    const other = otherInput.value


    if (other === '') {
        const hiddenInputValue = hiddenInputs.value[index].value;
        store.updateBuyer({ HowMakeYourPayment: hiddenInputValue });
    } else {
        store.updateBuyer({ HowMakeYourPayment: other });
    }


    router.push('/buyer/optionOffer')
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