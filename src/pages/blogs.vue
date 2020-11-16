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
    <div class="pt-5">
        <router-link to="/write-blog">
            <input type="button" value="Write an article">
        </router-link>
    </div>

    <router-link to="/users/:1">
        <div id="content" class="m-4 " v-for="article in articles" :key="article">
            <h4>{{article.title}}</h4>
            <p>{{article.content}}</p>
        </div>
    </router-link>
</div>
</template>

<script>
import {
    fb,
    db
} from '../firebase'
export default {
    data() {
        return {
            articles: []
        }
    },
    methods: {
        logout() {
            fb.auth().signOut()
                .then(() => {
                    this.$router.replace('/');
                })
        },

    },
    created() {
        db.collection("articles").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.articles.push(doc.data());
            });
        });

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

input {
    padding: 10px;
    width: 70%;
    text-align: left;
    padding-left: 50px;
    border: none;
}

a {
    color: black;
    text-decoration: none;
}

#content {
    width: 70%;
    background-color: #efefef;
    margin-left: 15% !important;
    text-align: left;
    padding: 10px;
}
</style>
