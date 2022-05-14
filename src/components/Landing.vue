<template>
    <div class="landing">
        <transition name="slide-fade">
            <h1 class="landing_text" v-if="show">{{message}}</h1>
        </transition>
    </div>
</template>
<script>
    export default {
        name: 'Landing',
        data() {
            let landingMessages = [
                "一年中總有幾個日子難忘",
                "一生中總有幾個人值得珍惜",
                "在這個特別的日子裡",
                "懿賢，祝你生日快樂"
               
            ];
            return {
                message: "",
                messages: landingMessages,
                show: true,
              
                count: 0,
                maxCount: landingMessages.length - 1
            }
        },
        mounted: function () {
            this.message = this.messages[this.count];
            setTimeout(this.fadeText, 1250);
        },
        methods: {
            fadeText() {
                this.show = false;
                this.count++;
                this.message = this.messages[this.count];
                setTimeout(this.showText, 1250);
            },
            showText() {
                this.show = true;
                if (this.count !== this.maxCount) {
                    setTimeout(this.fadeText, 1250);
                } else {
                  
                    setTimeout(() =>this.$router.push('/home'), 2000);
                }
            }
        }
    }

</script>

<style scoped>
    .landing {
        line-height: 80vh;
        font-size: 3vw;
        background: #2d2929;
    }

    .landing_text {
        vertical-align: baseline;
       font-family: 'Noto Serif TC', serif;
       color:#fff;
    }
</style>
