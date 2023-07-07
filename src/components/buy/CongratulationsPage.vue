<template>
    <div class="row justify-content-md-center">

        <div class="col-md-6 offset-md-3 q-pa-md q-gutter-y-md q-mt-lg">
            <h4 class="text-white text-center q-pb-md" style="
   
    margin-bottom: 27px;
">Congratulation</h4>

            <h6 class="text-white text-center">your information registration process has been completed</h6>
            <h6 class="text-white text-center">our experts will be in touch with you as soon as posible trough the
                communication ways you have announced</h6>
        </div>






    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useSellerStore } from '../../stores/seller.js'
import { useQuasar } from 'quasar'
import { useRoute, useRouter } from 'vue-router'
const zipCode = ref('')
const addressProperty = ref('')
const route = useRoute()
const router = useRouter()
const store = useSellerStore()
console.log(route.params)
const $q = useQuasar()
function sentForm() {
    // console.log(route.params.state, route.params.city, zipCode.value, addressProperty.value)
    // store.updateSeller({ state: route.params.state, city: route.params.city, zipCode: zipCode.value, addressProperty: addressProperty.value });
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