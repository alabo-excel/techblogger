<template>
<div class="">
    <div class="row">
        <div id="left" class="col-lg-7 ">
            <img :src="require('../assets/login-img.svg')" />
            <div id="btn">
                <router-link to="/">Back To Home</router-link>
            </div>
        </div>
        <div class="col-lg-4 col-sm-5 ml-auto mr-auto">
            <div class="d-flex justify-content-center mt-5">
                <div>
                    <img id="logo" :src="require('../assets/logo1.png')" />
                </div>
                <div class="mt-5 pt-1">
                    <h5>Login</h5>
                </div>
            </div>
            <div class="mt-5">
                <img style="top:148px;" id="icons" :src="require('../assets/email (1).svg')" />
                <input v-model="email" type="text" placeholder="Email">
            </div>
            <div class="mt-5 d-flex">
                <img id="icons" :src="require('../assets/padlock (1).svg')" />
                <input v-model="password" type="password" placeholder="Password">
            </div>
            <div class="mt-5">
                <input @click="login" type="submit" value="LOGIN">
                <div class="mt-2">
                    <p>Don't have an account <router-link to="/signup">Sign Up</router-link>
                    </p>

                </div>
            </div>

        </div>

    </div>
</div>
</template>

<script>
import {
    fb
} from '../firebase'
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            fb.auth().signInWithEmailAndPassword(this.email, this.password)
                // .catch(function (error) {
                // Handle Errors here.
                // var errorCode = error.code;
                // var errorMessage = error.message;
                // ...
                .then(() => {
                    this.$router.replace('Blogs');
                })
            // });
        }
    }
}
</script>

<style scoped>
img {
    width: 80%;
    margin-top: 50px;
}

#left {
    background-color: #004B84;
    height: 100vh;
}

#btn {
    background-color: #b1cbdc;
    width: 140px;
    border-radius: 20px;
    margin-top: 50px;
    padding: 5px;
    margin-left: 20px;
}

a {
    color: black;
}

#logo {
    width: 50px;
}

#icons {
    width: 20px;
    position: absolute;
    top: 243px;
    left: 30px;
}

input {
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    padding-left: 50px;
}

.input-group-text {
    border: 1px solid black;
    border-right: none;
    background-color: white;
}

#login {
    border: none;
    background-color: #004B84;
    color: white;
    width: 100%;
    border-radius: 10px;
}

a {
    color: #004B84;
}

@media(max-width:800px) {
    #left {
        display: none;
    }

}
</style>
