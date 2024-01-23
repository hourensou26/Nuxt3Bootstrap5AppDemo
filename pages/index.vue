<template>
  <div class="container-fluid">
    <h1 class="m-5">{{pagestitle.indextitle}}</h1>
    <nuxt-link class="btn-m-3 btn btn-primary" role="button" to="/create">新規作成</nuxt-link>

    <div class="m-5" style="text-align: center;">
      <h2>{{pagestitle.description}}</h2>
    </div>
  </div>

  <Home />
</template>