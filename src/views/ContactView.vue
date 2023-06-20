<template>
    <div class="container">
        <div class="contact ">
            <h1 class="display1">CONTACT US </h1>
            <hr class="my-4">
            <p class="text-white"><strong>Have a question, feedback, or need assistance? We're here to help.

                At [Your Website Name], we value our customers and strive to provide excellent customer service. Whether you
                have
                inquiries about our products, services, or any other matter, our friendly and knowledgeable team is ready to
                assist you.

                Here are the different ways you can get in touch with us:

                <strong>Email:</strong> Send us an email at <a href="mailto:kharishmitha@example.com">info@example.com</a>.
                We aim to respond within 24 hours.

                <strong>Phone:</strong> Call our customer support hotline at <a href="tel:+123456789">+123456789</a>. Our
                team is available during
                business hours to answer your questions and provide guidance.

                <strong>Live Chat:</strong> Chat with one of our representatives in real-time through our website's live
                chat
                feature. Get immediate assistance and personalized support.

                <strong>Contact Form:</strong> Fill out our online contact form with your details and message. We'll get
                back to
                you as soon as possible.

                Your satisfaction is our top priority, and we are committed to resolving any issues or concerns you may
                have. We
                appreciate your feedback, as it helps us improve our products and services.

                We look forward to hearing from you and providing the support you need. Don't hesitate to reach out to us.
                Thank
                you for choosing [Your Website Name].</strong>
            </p>


            <div>
                <h4 v-if="display">CONTACT NUMBER :{{ contactno }}
                    <br>
                    ADDRESS :{{ address }}<br>
                    EMAIL:{{ email }}
                </h4>
                <button @click="button = !button" type="button" class="btn btn-dark">SHOW DETAILS</button>
                <!-- <button @click="button = !button">SHOW DETAILS</button>
      -->
            </div>

        </div>
    </div>
</template>
  
  
<script lang="ts">
export default {

    data() {
        return {
            contactno: 9994519917,
            address: '123,mkp colony ,coimbatore-641044',
            email: 'kharishmitha@gmail.com',
            button: true
        }
    },


    computed: {

        display() {
            if (this.button) {
                return false
            }
            else return true
        }
    }
};
</script>
<style>
h1 {
    color: darkslateblue;
}

h4 {
    color: rgb(54, 3, 54);
    font-family: cursive;
    font-size: 20px;

}

.logo {
    height: 30px;
    width: 30px;
}
</style>