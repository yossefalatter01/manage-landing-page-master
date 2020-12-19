<template>
    <div class="footer-sec">
        <div class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="logo-contact col-lg-3 d-flex flex-column-reverse flex-lg-column justify-content-between order-12 order-lg-1 text-center text-lg-left">
                        <div class="logo-container"><h3 class="text-center text-lg-left">manage</h3><img src="./../../assets/logo.svg" alt="logo"></div>
                        <div class="icons mb-5 mb-lg-2 pb-1 d-flex justify-content-lg-start justify-content-between mt-3 mt-lg-0">
                            <font-awesome-icon class="icon mr-3"  :icon="{ prefix: 'fab', iconName: 'facebook-square' }" />
                            <font-awesome-icon class="icon mr-3" :icon="{ prefix: 'fab', iconName: 'youtube' }" />
                            <font-awesome-icon class="icon mr-3" :icon="{ prefix: 'fab', iconName: 'twitter' }" />
                            <font-awesome-icon class="icon mr-3" :icon="{ prefix: 'fas', iconName: 'at' }" />
                            <font-awesome-icon class="icon" :icon="{ prefix: 'fab', iconName: 'instagram' }" />
                        </div>
                    </div>
                    <div class="mainlinks col-6 col-lg-3 text-center text-lg-left order-2 order-lg-2">
                        <div class="mb-3" v-for="mainLink in mainLinks" :key="mainLinks.indexOf(mainLink)">{{ mainLink }}</div>
                    </div>
                    <div class="sublinks col-6 col-lg-3 text-center text-lg-left order-2 order-lg-3">
                        <div class="mb-3" v-for="subLink in subLinks" :key="subLinks.indexOf(subLink)">{{ subLink }}</div>
                    </div>
                    <div class="search p-0 col-12 col-lg-3 d-flex flex-column justify-content-between order-1 order-lg-4 mb-5 mb-lg-0 pb-4 pb-lg-0">
                        <div>
                            <div class="d-flex text-right"><input type="email" :placeholder="inputText" class="mr-2" v-model="emailValue" id="search_text">
                            <button @click="emailValidation">{{ buttonText }}</button></div>
                            <span id="error">Please insert avalid email</span>
                        </div>
                        <div class="mb-3  copyright text-right d-none d-lg-block">{{ copyRight }}</div>
                    </div>
                    <div class="pb-3 pt-4 w-100 copyright text-center d-lg-none d-block order-12">{{ copyRight }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//==import font awesome icons==//
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare , faYoutube ,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';
library.add([faFacebookSquare,faAt,faYoutube,faTwitter,faInstagram]);

export default {
    name: "FooterSec",
    data () {
        return {
            mainLinks: ["Home","Pricing","Products","About Us"],
            subLinks: ["Careers","Community","Privacy Policy"],
            inputText: "Updates in your inbox…",
            buttonText: "Go",
            copyRight: "Copyright 2020. All Rights Reserved",
            emailValue: ""
        }
    },
    methods:{
        emailValidation(e){
            e.preventDefault();
            let patrn = /[a-z]+@[a-z]+/;
            let searchText = document.getElementById("search_text");
            let error = document.getElementById("error");
            if(!(patrn.test(this.emailValue))){
                searchText.style.borderColor = "rgba(243, 75, 75, 0.753)";
                searchText.style.color = "rgba(243, 75, 75, 0.753)";
                error.style.display = "block";
            }else{
                searchText.style.borderColor = "gray";
                searchText.style.color = "var(--color4)";
                error.style.display = "none";
            }
        }
    }
}
</script>
<style scoped>
.footer-sec{
    padding-top: 61px;
    padding-bottom: 37px;
    background-color: var(--color4);
}
.logo-contact .logo-container{
    position: relative;
}
.logo-contact .logo-container h3{
    position: absolute;
    top: -15.5px;
    left: 21px;
    padding: 3px;
    background: var(--color4);
    color: white ;
    font-size: 2em;
}
.mainlinks , .sublinks{
    color: var(--color3);
}
.mainlinks div , .sublinks div{
    cursor: pointer;
}
.mainlinks div:hover , .sublinks div:hover{
    transition: 0.3s;
    color: var(--color1);
}
.icons{
    color: white;
    font-size: 1.5em !important;
}
.icon{
    cursor: pointer;
}
.icon:hover{
    transition: 0.3s;
    color: var(--color1);
}
input{
    border: 1px solid gray;
    outline: none;
    border-radius: 100px;
    padding: 12px;
    padding-left: 17px;
    width: 75%;
    font-size: 0.9em;
    color: var(--color4);
}
button{
    border: none;
    outline: none;
    background-color: var(--color1);
    color: white;
    border-radius: 100px;
    padding: 10px;
    width: 25%;
    cursor: pointer;
}
button:hover{
    transition: 0.3s;
    background-color: var(--color7);
}
.copyright{
    color: var(--color3);
    font-size: 0.8em;
}
.search{
    width: 500px;
}
#error{
    color: rgba(243, 75, 75, 0.753);
    display: none;
    font-size: 0.85em;
}
@media screen and (max-width: 990px){
    .logo-contact .logo-container h3{
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-38%);
    padding: 3px;
    background: var(--color4);
}
.icons{
    font-size: 2.4em !important;
} 
}
</style>