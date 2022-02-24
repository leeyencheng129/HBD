<template>
    <div class="stories_behind">

        <!-- Header -->
        <el-row class="stories_behind_header">
            <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                <el-button @click="goBack()" class="back_button" type="danger" circle
                           icon="el-icon-d-arrow-left"></el-button>
            </el-col>
            <el-col :xs="24" :sm="24" :md="20" :lg="24" :xl="24">
                <h1>Stories Behind</h1>
            </el-col>
        </el-row>

        <el-row type="flex" justify="center">
            <el-col :xs="24" :sm="24" :md="20" :lg="16" :xl="16">
                <!-- Content -->
                <div class="block" style="overflow:auto">
                    <el-card class="SB_card">
                        <h3>Instagram</h3>
                        <el-button @click="goIg()" type="danger" round>Checkout My Instagram</el-button>
                    </el-card>

                    <!-- TODO : Change these messages to your own words ... -->
                    <el-card class="SB_card">
                        <h3>How I Prepared This Birthday Gift for You</h3>
                        <p>
                            2022/02/01<br>
                            I think of You and Scroll our Messages<br>
                            Determine the theme, content, and what to do for your birthday<br>
                            So.. I decide to create a Website for You
                        </p>
                        <p>
                            2022/02/10<br>
                            Coding, Create Some Content<br>
                            Search Video from Youtube<br>
                            Review Some of The Content
                        </p>
                        <p>
                            2020/02/20<br>
                            Modify few content<br>
                            Upload this webpage repository<br>
                            Deploy your birthday gift to Website so you can see
                        </p>
                        <p> I hope you like it </p>
                        <p style="font-size: 0.25rem">
                            Deep down from my heart, I Miss You. a lot. and somehow Naneun Jhoahe - PBK
                        </p>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "StoriesBehind",
        methods: {
            goBack() {
                this.$router.go(-1);
            },
            goIg() {
                window.open("https://www.instagram.com/philscoidn/", '_blank');
            }
        }
    }
</script>

<style scoped>
    .stories_behind_header {
        position: fixed;
        width: 100%;
        background: #ffffff;
        z-index: 1;
    }

    .block {
        margin-top: 80px;
        margin-bottom: 50px;
    }

    .back_button {
        margin-top: 15px;
        position: absolute;
    }

    .SB_card {
        width: 80%;
        margin: 0 auto 20px;
        border-radius: 5px;
        border: 1px solid #d1d5da;
    }
</style>
