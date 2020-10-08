<template>
    <div>
        {{ good_id }}的详情页
    </div>
</template>
<script>
export default {
    computed:{
        good_id(){
            return this.$route.params.good_id
        }
    },
    mounted(){
        console.log(this.$route.params.good_id)
    }
}
</script>
<style lang='stylus' scoped>

</style>