<template>
  <div class="container ">
         <div class="home ">
            
             <h1 class="display text-warning">ABOUT US  </h1>
            
             <hr class="my-2 text-danger">
             <p class="text-white"><strong>"Welcome to [Your Company/Organization Name] - a trusted name in [your industry or field]. We are a [briefly describe your company's nature, purpose, or mission].
 
 At [Your Company/Organization Name], we [explain what sets you apart or your unique selling proposition]. With a dedicated team of [mention number of team members] professionals, we strive to [state your primary goal or objective].
 
 Our journey began [mention the year or starting point] with a vision to [describe your motivation or inspiration]. Since then, we have [highlight significant achievements, milestones, or growth].
 
 We pride ourselves on [mention key qualities or strengths that make you reliable, innovative, or customer-centric]. Our commitment to [mention core values, such as quality, integrity, sustainability, etc.] drives everything we do.
 
 Through our [products/services/solutions], we aim to [mention the impact or benefit to your target audience or customers]. Our experienced team leverages [mention expertise, technologies, or strategies] to deliver exceptional results.
 
 We believe in [mention any specific beliefs, principles, or approach] and strive to create [describe the impact or positive change you want to make]. Customer satisfaction is our top priority, and we work tirelessly to exceed expectations.
 
 Explore our website to discover our wide range of [products/services/offerings] and learn how we can [solve a problem, fulfill a need, or meet customer goals]. We welcome collaborations, partnerships, and opportunities to make a difference in [mention your target market or industry].
 
 Thank you for considering [Your Company/Organization Name]. We look forward to serving you and building a lasting relationship. Join us on this exciting journey!"</strong>
 </p>
 <button class="btn btn-dark" @click="handleClick" type="button">CONTACT US</button>
         </div>
     </div>
 </template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const handleClick = () => {
      router.push('/contact');
    };

    return {
      handleClick
    };
  }
}
</script>


 <style>
 .logo{
     height:30px;
     width: 10px;
 } 
 </style>
