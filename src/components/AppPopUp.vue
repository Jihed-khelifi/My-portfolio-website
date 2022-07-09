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
                <button class="btn popup-button-close" @click="closePopup">Close</button>
            </div>
        </div>
    </dialog>
</template>
<script>
export default {
    props: ['title', 'text'],
    setup() {

        return {

        }
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/general.scss';



.popup-container {

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 350px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;

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
            margin-top: 20px;

            .popup-button-close {
                background-color: #ff0000;
                color: #fff;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                transition: all 0.3s ease-in-out;

                &:hover {
                    background-color: #fff;
                    color: #ff0000;
                }
            }
        }
    }
}
</style>