<template>
    <h2>OVO JE CHARACTHER CARD</h2>
    <ul>
        <div v-for="(pokemon, index) of pokemon ">
            <p>{{ pokemon }}</p>
            <button @click="addFavPokemon(pokemon)">ADD {{ pokemon }}</button>
        </div>
    </ul>
</template>

<script>
export default {
    props:{
        pokemon:{
            type:Array,
            required:true,
        }
    },
    emits:["pokemon-emits"],
    methods:{
        addFavPokemon(payload) {
        this.$emit('pokemon-emits', {
            id:'22',
            pokemon: payload
        })
        }
    }
}
</script>
<!-- v-for="(char, index) of characthers" :key="index"> -->