<script>
export default{

}
</script>
<template>
    <div class="wrapper">
        <header class="header">
            <slot name="header"/>
        </header>
        <main class="main">
            <slot name="main"/>
        </main>
        <footer class="footer">
            <slot name="footer"/>
        </footer>
    </div>

</template>

<style>
/* .wrapper{
    width: 80vw;
}
.header{
    border: 2px solid blue;
}
.main{
    border: 2px solid red;
}
.footer{
    border: 2px solid black;
} */
</style>