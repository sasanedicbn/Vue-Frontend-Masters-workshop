<template>
    <h2>OVO JE CHARACTHER CARD</h2>
    <ul>
        <div v-for="(pokemon, index) of pokemon ">
            <p>{{ pokemon }}</p>
            <button>ADD {{ pokemon }}</button>
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
    }
}
</script>
<!-- v-for="(char, index) of characthers" :key="index"> -->