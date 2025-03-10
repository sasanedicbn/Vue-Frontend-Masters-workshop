<script>
export default{
    props:{
        icon: Boolean,
        default: false,
    }
}
</script>
<template>
    <button>
        <slot v-if="icon">Icon - Submit</slot>
        <slot v-else>Submit</slot>
    </button>

</template>
