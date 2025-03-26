<template>
<ul>
    <li v-for="(fav, index) in pokemon" :key="index">-{{ fav }}</li>
  </ul>
</template>
