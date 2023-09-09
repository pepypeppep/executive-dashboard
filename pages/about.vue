<template>
    <section>
      <!-- <p>This page will be displayed at the /about route.</p> -->
      <ol v-for="menu in data.active">
        <li>{{ menu.label }}</li>
      </ol>
      <!-- {{ menuList.data.active }} -->
    </section>
</template>
<script setup lang="ts">
// const { data} = await useFetch('https://api.bantulkab.go.id/api/v2/menus');
// let menuList;
const { data} = await useFetch('/api/menu')
</script> 