<template>
<div id="container" class="">
    <appHeader />

    <div class="row mb-5 pb-3">
        <div id="" class="text-left ml-5 pl-5 col-lg-4 mr-5">
            <h1 id="hero-text">Join The Worlds Largest Tech Blogging Community</h1>
            <div class="mt-5">
                <span id="start-blogging">
                    <router-link to="">Start Blogging</router-link>
                </span>
            </div>
        </div>
        <div class="col-lg-6 ml-5">
            <img id="hero" :src="require('../assets/hero.png')" />
        </div>
    </div>
    <div class="row">
        <div class="col-12 bloggers">
            <h1>
                100 000
                <p id="plus">+</p>
            </h1>
            <h4>tech bloggers blog here daily.</h4>
        </div>
    </div>
    <div class="row mt-5 justify-content-center">
        <div class="col-lg-3 p-5">
            <img id="svg" :src="require('../assets/user (2).svg')" />
            <h4>Presence</h4>
            <div class="text-justify">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
                    consectetur! Deleniti praesentium, magni possimus illo laudantium
                    omnis ipsa quia animi.
                </p>
            </div>
        </div>

        <div class="col-lg-3 p-5">
            <img id="svg" :src="require('../assets/share.svg')" />
            <h4>Share</h4>
            <div class="text-justify">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
                    consectetur! Deleniti praesentium, magni possimus illo laudantium
                    omnis ipsa quia animi.
                </p>
            </div>
        </div>

        <div class="col-lg-3 p-5">
            <img id="svg" :src="require('../assets/happy.svg')" />
            <h4>Stickers & emoji</h4>
            <div class="text-justify">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
                    consectetur! Deleniti praesentium, magni possimus illo laudantium
                    omnis ipsa quia animi.
                </p>
            </div>
        </div>
    </div>

    <div class="row mt-5 justify-content-center">
        <div class="col-lg-3 p-5">
            <img id="svg" :src="require('../assets/edit.svg')" />
            <h4>Collaborative</h4>
            <div class="text-justify">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
                    consectetur! Deleniti praesentium, magni possimus illo laudantium
                    omnis ipsa quia animi.
                </p>
            </div>
        </div>

        <div class="col-lg-3 p-5">
            <img id="svg" :src="require('../assets/notification.svg')" />
            <h4>Notifications</h4>
            <div class="text-justify">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
                    consectetur! Deleniti praesentium, magni possimus illo laudantium
                    omnis ipsa quia animi.
                </p>
            </div>
        </div>

        <div class="col-lg-3 p-5">
            <img id="svg" :src="require('../assets/rocket.svg')" />
            <h4>Speedy</h4>
            <div class="text-justify">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
                    consectetur! Deleniti praesentium, magni possimus illo laudantium
                    omnis ipsa quia animi.
                </p>
            </div>
        </div>
    </div>
    <div id="continue-reading" class="row mt-5 justify-content-center p-5">
        <div class="col-12 mb-5">
            <h3>CONTINUE READING...</h3>
        </div>
        <div class="col-lg-4 m-3 card text-left text-dark">
            <img id="img" :src="require('../assets/img1.jpg')" />
            <h4 class="mt-3">Starting your writing career</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, officia quo. Ipsa, error! Nam, inventore....</p>
            <div class="d-flex">
                <div>
                    <h6>Miracel Gab</h6>
                </div>
                <div id="time">
                    <p>2 mins ago</p>
                </div>
            </div>
        </div>

        <div class="col-lg-4 m-3 card text-left text-dark">
            <img id="img" :src="require('../assets/img2.jpg')" />
            <h4 class="mt-3">Concepts of the motherboard</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, officia quo. Ipsa, error! Nam, inventore....</p>
            <div class="d-flex">
                <div>
                    <h6>Alixia Garry</h6>
                </div>
                <div id="time">
                    <p>10 mins ago</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-5 mb-5 pb-5">
        <div style="color:#004b84;" class="col-12 m-4">
            <h2>HOW IT WORKS</h2>
        </div>
        <div class="col-5">
            <img id="img3" :src="require('../assets/img3.png')" />
        </div>
        <div class="col-6 text-left ml-5 pl-5">
            <h3>Only those who sign up <br> get their blog articles on our <br> platforms</h3>
            <div id="blank1"></div>
        </div>
    </div>

    <div class="row mt-5 ">
        <div class="col-6 text-left ml-5 pl-5 mt-5 pt-5">
            <h3 style="margin-left: 140px;">Write super awesome <br> articles and get featured <br> on our social media <br> handles</h3>
            <div id="blank2"></div>
        </div>

        <div class="col-5 mt-5 pt-5 mb-5">
            <img id="img3" :src="require('../assets/img4.png')" />
        </div>
    </div>
</div>
<footer class="">
    <h3>Designed by Alabo Excel</h3>
</footer>
</template>

<script>
import appHeader from '../components/appHeader.vue'
// import appfooter from '../components/appfooter.vue'

export default {
    name: 'App',
    components: {
        appHeader,
        // appfooter
    }
};
</script>

<style scoped>
#hero {
    width: 80%;
    float: right;
}

#hero-text {
    margin-top: 35%;
}

#start-blogging {
    background-color: #004b84;
    padding: 10px;
    border-radius: 30px;
}

#start-blogging a {
    color: white;
}

.bloggers {
    background-color: #004b84;
    color: #b1cbdc;
    padding: 70px;
}

.bloggers h1 {
    font-size: 130px;
}

#plus {
    position: absolute;
    font-size: 80px;
    color: white;
    font-weight: bold;
    top: 50px;
    left: 65%;
}

#svg {
    width: 20px;
    text-align: center !important;
}

#continue-reading {
    background-color: #b1cbdc;
    color: #004b84;
}

#img {
    width: auto;
    height: 230px;
}

.card {
    border: none;
}

#time {
    margin-left: 210px;
}

#img3 {
    width: 100%;
}

#blank1 {
    background-color: #004b84;
    height: 200px;
    width: 400px;
    float: right;
    margin-right: -100px;
}

#blank2 {
    background-color: #b1cbdc;
    height: 200px;
    width: 400px;
    float: left;
    margin-left: -100px;
    margin-top: -170px;
}

footer {
    background-color: #0E67AB;
    color: white;
    padding: 15px;
}
</style>
