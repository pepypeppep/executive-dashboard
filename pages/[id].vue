<template>
    <section class="section-padding" data-scroll>
      <div class="container">

        <div class="row">
          <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0" v-for="(list, index) in submenuList" :key="list.id">
            <div class="featured-block d-flex justify-content-center align-items-center">
              <NuxtLink :to="`/${list.label.toLowerCase().replace(/ /g, '-')}`" class="d-block">
                <img :src="list.icon" class="featured-block-image img-fluid" alt="">

                <p class="featured-block-text">{{ list.label }}</p>
              </NuxtLink>
            </div>
          </div>
        </div>

      </div>
    </section>
</template>
<script setup lang="ts">
  const route = useRoute()
  let slug = route.params.id

  //meta title
  useHead({
    title: `Bantulpedia - ${slug.toUpperCase()}`,
  });

  const { pending, data: submenuList } = await useFetch(`/api/submenu?id=4000000006`)
</script> 