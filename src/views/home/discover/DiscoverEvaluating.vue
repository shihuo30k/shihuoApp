<template>
    <div class="container">
         <EvaluationList
        :arr="arr"
        ></EvaluationList>
    </div>
    
</template>
<script>

import EvaluationList from "@c/discover/EvaluationList"
export default {

    props:{
        arr:{
            type:Array,
            required:true,
        },
    },
    components:{
        EvaluationList
    }
   
    
}
</script>
<style lang="stylus">
    .container
        width 100%
        height 100%
</style>




