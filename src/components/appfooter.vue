<template>
<div id="bottom" class="row mt-5 p-5 ">
    <div class="col-7 text-left ml-5">
        <img id="logo" :src="require('../assets/logo2.png')" />
        <div>
            <img id="socials" :src="require('../assets/facebook.svg')" />
            <img id="socials" :src="require('../assets/twitter.svg')" />
            <img id="socials" :src="require('../assets/instagram.svg')" />
            <img id="socials" :src="require('../assets/google-plus.svg')" />

        </div>
    </div>
    <div class="col-4">
        <div class="d-flex">
            <img id="socials" :src="require('../assets/call (1).svg')" />
            <h4 class="mt-3">+234 555 666</h4>
        </div>
        <div class="d-flex">
            <img id="socials" :src="require('../assets/email (1).svg')" />
            <h4 class="mt-3">techblog@123.com</h4>
        </div>
        <div class="d-flex">
            <img id="socials" :src="require('../assets/placeholder (1).svg')" />
            <h4 class="mt-3">no 222 old murtala rd, Nigeria</h4>
        </div>
    </div>
    <div>

    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
#bottom {
    background-color: #004b84;
    padding: 20px;
}

#logo {
    width: 80px;
}

#socials {
    width: 30px;
    margin: 15px;
    fill: #b1cbdc !important;
}
</style>
