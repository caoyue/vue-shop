<template>
    <transition name="slide">
        <div class="alert" v-if="message">
            <div class="icon"><IconFont iconClass="error-" /></div>
            <div class="message">{{ message }}</div>
            <div class="close" @click="clear">
                <IconFont iconClass="close" />
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';

@Component
export default class AlertView extends Vue {
    @State message!: string;
    @Mutation alertMessage!: (message: string) => void;
    private clear() {
        this.alertMessage('');
    }
}
</script>

<style lang="less" scoped>
.alert {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}
.alert div {
    font-size: @normalFont;
    line-height: @lineHeight;
    height: @lineHeight;
    color: @menuFontColor;
    background-color: @errorColor;
    text-align: center;
}

.icon,
.close {
    width: 40px;
}

.message {
    flex: 2;
}

.close {
    cursor: pointer;
}
.close:hover {
    background-color: darken(@errorColor, 10%);
}

.slide-leave-active,
.slide-enter-active {
    transition: 0.5s;
}
.slide-enter {
    transform: translate(100%, 0);
}
.slide-leave-to {
    transform: translate(-100%, 0);
}
</style>
