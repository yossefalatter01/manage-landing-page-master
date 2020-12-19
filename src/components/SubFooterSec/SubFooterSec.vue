<template>
    <div class="subfooter">
        <div class="container-fluid">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center flex-column flex-lg-row text-center text-lg-left">
                    <h2 class="mb-4 mb-lg-0 pb-1 pb-lg-0">{{ headText }}</h2>
                <div><button class="mybtn-container">{{ buttonText }}</button></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SubFooterSec",
    data () {
        return {
            headText: "Simplify how your team works today.",
            buttonText: "Get Started"
        }
    }
}
</script>
<style scoped>
.subfooter{
    background-image: url('../../assets/bg-simplify-section-desktop.svg');
    background-position: 302px -111px;
    background-repeat: no-repeat;
    background-color: var(--color1);
    padding-top: 67px;
    padding-bottom: 67px;
    overflow: hidden;
}
.mybtn-container{
    border: none;
    outline: none;
    border-radius: 100px;
    background-color: white;
    color: var(--color1);
    padding: 10px;
    width: 150px;
}
.mybtn-container:hover{
    transition: 0.3s;
    color: var(--color7);
}
h2{
    color: white;
    font-size: 2.75em;
    max-width: 500px;

}
@media screen and (max-width: 990px){
    .subfooter{
    background-image: url('../../assets/bg-simplify-section-mobile.svg');
    background-position: 0px 50px;
    background-repeat: no-repeat;
    padding-top: 90px;
    padding-bottom: 90px;
}
}
</style>