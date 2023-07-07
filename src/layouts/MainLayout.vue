<template>
  <q-layout view="lHh Lpr lFf" class="background-full">
    <q-header style="background:none" elevated>
      <q-toolbar>
        <q-avatar square size="2.5rem">
          <img width="1.2rem" src="logo.png">

        </q-avatar>

        <q-toolbar-title>
          <h2 style="
 font-size: 1.2em;padding-top: 27px;
"><span style="color:red">R</span>ealBaz</h2>
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>



    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>

</script>

<style>
.q-avatar {
  height: auto;

}

.background-full {
  background-image: url("../assets/fullbackground.JPG");
  background-size: 100%;
  background-position: 0 -25rem;
}

.q-field--outlined .q-field__control:before {
  border: 1px solid rgba(255, 255, 255, 0.849);
  transition: border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1);
}

.q-header .q-layout__shadow {

  display: none;
}
</style>