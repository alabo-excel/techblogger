<template>
<div class="hello">
    <div class="first">
        <img :src="require('../assets/logo1.png')" />
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/blogs">Blogs</router-link>
        <router-link to="">Jobs</router-link>
    </div>
    <div class="second">
        <router-link to="/login">Login</router-link>
        <span id="sign">
            <router-link to="/signup">Sign In</router-link>
        </span>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.hello {
    display: flex;
    justify-content: space-between;
    margin-left: 40px;
    margin-right: 40px;

}

.first,
.second {
    padding: 20px;
}

a {
    text-decoration: none;
    color: black;
    padding: 20px;
}

#sign {
    background-color: #004B84;
    padding: 10px;
    border-radius: 30px;
}

#sign a {
    color: white !important;

}

img {
    width: 80px;
}
</style>
