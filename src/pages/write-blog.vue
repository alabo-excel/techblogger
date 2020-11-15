<template>
<div>
    <div id="side-bar">
        <img id="logo" :src="require('../assets/logo1.png')" />
        <router-link to="/blogs">
            <img id="icons" :src="require('../assets/dashboard.svg')" />
            <h4>Blog</h4>
        </router-link>

        <router-link to="/">
            <img id="icons" :src="require('../assets/home (1).svg')" />
            <h4>Home</h4>
        </router-link>

        <img id="icons" :src="require('../assets/search (1).svg')" />
        <h4>Search</h4>

        <img style="margin-top: 80px;" id="icons" :src="require('../assets/notification.svg')" />
        <img id="icons" :src="require('../assets/suitcase.svg')" />
        <div @click="logout()">
            <img id="icons" :src="require('../assets/power-button.svg')" />
            <h4>Logout</h4>
        </div>
    </div>
    <div class="pt-5 ml-5 pl-5">
        <input v-model="article.title" placeholder="Title...." type="text">
        <textarea v-model="article.content" placeholder="Start writing" rows="18 "></textarea>
        <router-link to="/blogs">
            <div @click="saveArticle" class="mt-3" id="btn">
                <p>Post</p>
            </div>
        </router-link>
    </div>
</div>
</template>

<script>
import {
    db,
    fb
} from '../firebase'
export default {
    data() {
        return {
            article: {
                title: '',
                content: ''
            }

        }
    },
    methods: {
        saveArticle() {
            db.collection("articles").add(this.article)
                .then(function () {
                    console.log("Document successfully written!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
        },
        logout() {
            fb.auth().signOut()
                .then(() => {
                    this.$router.replace('/');
                })
        },
    }
}
</script>

<style scoped>
#side-bar {
    background-color: #b1cbdc;
    width: 10%;
    height: 100vh;
    position: fixed;
    padding: 30px;
}

#logo {
    width: 60px;
    margin-top: 5px;
}

#icons {
    width: 50px;
    padding: 5px;
    margin-top: 10px;
    margin-bottom: 5px;
}

textarea,
input {
    width: 80%;
    margin: 10px;
}

#btn {
    padding: 0px;
    background-color: #004b84;
    width: 10%;
    text-align: center;
    border-radius: 10px;
    margin-left: 80%;
}

#btn p {
    color: white;
    padding: 5px;
}

a {
    color: black;
}
</style>
