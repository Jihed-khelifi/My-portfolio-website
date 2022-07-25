<template>
    <dialog open class="popup-container">
        <div class="popup-content">
            <div class="popup-title">
                <h1>{{ title }}</h1>
            </div>
            <div class="popup-text">
                <p>{{ text }}</p>
            </div>
            <div class="popup-button">
                <slot></slot>
            </div>
        </div>
    </dialog>
</template>
<script>
export default {
    props: ['title', 'text', 'buttonText'],
    setup() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../styles/general.scss';

.popup-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 350px;
    background-color: rgba(245, 245, 245);
    z-index: 100;
    color: black;
    border-radius: 10px;
    border: none;
    outline: none;

    .popup-content {
        padding: 20px;
        text-align: center;

        .popup-title {
            margin-bottom: 20px;

            h1 {
                font-size: 1.5rem;
                font-weight: bold;
            }
        }

        .popup-text {
            p {
                font-size: 1.2rem;
                font-weight: bold;
            }
        }

        .popup-button {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 20px;
        }
    }
}
</style>