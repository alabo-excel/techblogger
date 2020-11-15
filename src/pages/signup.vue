<template>
<div class="">
    <div class="row">
        <div id="left" class="col-lg-7">
            <img :src="require('../assets/signup-img.svg')" />
            <div id="btn">
                <router-link style="color:white;" to="/">Back To Home</router-link>
            </div>
        </div>
        <div class="col-lg-4 ml-auto mr-auto">
            <div class="d-flex justify-content-center mt-2">
                <div>
                    <img id="logo" :src="require('../assets/logo1.png')" />
                </div>
                <div class="mt-5 pt-1">
                    <h5>Sign Up</h5>
                </div>
            </div>

            <div class="mt-5">
                <img style="top:148px;" id="icons1" :src="require('../assets/google.png')" />
                <input type="button" value="Sign up with Google">
            </div>
            <div class="mt-5">
                <img style="top:148px;" id="icons2" :src="require('../assets/facebook.svg')" />
                <input type="button" value="Sign up with Facebook">
            </div>

            <div class="mt-5">
                <img style="top:148px;" id="icons3" :src="require('../assets/email (1).svg')" />
                <input v-model="email" type="text" placeholder="Email">
            </div>
            <div class="mt-5 d-flex">
                <img id="icons4" :src="require('../assets/padlock (1).svg')" />
                <input v-model="password" type="password" placeholder="Password">
            </div>
            <div class="mt-5">
                <input id="login" type="submit" @click="register" value="SIGN UP">
                <div class="mt-2">
                    <p>Already have an account <router-link to="/login">Login</router-link>
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
        register() {
            fb.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.$router.replace('Blogs');
                })
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
    background-color: #b1cbdc;
    height: 100vh;
}

#btn {
    background-color: #004B84;
    width: 140px;
    border-radius: 20px;
    margin-top: 50px;
    padding: 5px;
    margin-left: 20px;
}

a {
    color: white;
}

#logo {
    width: 50px;
}

#icons1 {
    width: 20px;
    position: absolute;
    left: 30px;
    top: 110px !important;
}

#icons2 {
    width: 20px;
    position: absolute;
    top: 203px !important;
    left: 30px;

}

#icons3 {
    width: 20px;
    position: absolute;
    top: 295px !important;
    left: 30px;

}

#icons4 {
    width: 20px;
    position: absolute;
    top: 390px;
    left: 30px;

}

input {
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    padding-left: 50px;
    text-align: left;
}

#login {
    border: none;
    background-color: #004B84;
    color: white;
    width: 100%;
    border-radius: 10px;
    text-align: center;
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
