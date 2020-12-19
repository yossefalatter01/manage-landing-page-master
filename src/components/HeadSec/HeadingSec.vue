<template>
    <div>
        <div class="container">
            <div class="head-face d-flex justify-content-center flex-column-reverse flex-lg-row">
                <div class="left-side align-self-center text-center text-lg-left">
                    <h2 class="mb-5 h1">{{ headText }}</h2>
                    <p class="mb-5">{{ subHeadText }}</p>
                    <button class="mybtn">{{ headButton }}</button>
                </div>
                <div class="right-side w-100">
                    <img src="./../../assets/illustration-intro.svg" alt="tablet-pattern" class="w-100"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HeadingSec',
    data () {
        return {
            headText: 'Bring everyone together to build better products.',
            subHeadText: 'Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.',
            headButton: 'Get Started'
        }
    }
}
</script>
<style scoped>
.head-face{
    padding-top: 128px;
    padding-bottom: 128px;
}
.left-side{
    padding-right: 103px;
}
.left-side h2{
    font-size: 2.9em;
    color: var(--color4); 
}
.left-side p{
    color: var(--color3);
    padding-right: 148px;
}
@media screen and (max-width: 990px){
    .left-side p{
        padding: 0;
    }
    .left-side{
        padding: 0;
    }
    .left-side h2{
    font-size: 2.5em;
    color: var(--color4); 
}
    .head-face{
        padding-top: 30px;
        padding-bottom: 100px;
    }
}
</style>