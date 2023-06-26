<template>
    <div>
      <div>
        <input v-model="newCardTitle" placeholder="Enter title" />
        <input v-model="newCardDescription" placeholder="Enter description" />
        <input v-model="newCardImage" placeholder="Enter image URL" />
        <button @click="addCard">Add Card</button>
      </div><br>
      <div v-for="card in cards" :key="card.id">
        <div class="card">
          <img :src="card.image" alt="Card Image" class="cardimg" />
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
          <button @click="removeCard(card.id)">Remove</button>
        </div>
      </div>
    
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';
  
  const initialState = [
    {
      id: 1,
      title: 'SHIRTS',
      description: 'SHIRTS FOR MEN',
      image: 'https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/648c80c9576be1481b336ae9/webp/hndc-support-staff-shirt-480x480.png',
    },
    {
      id: 2,
      title: 'PANT',
      description: 'PANTS FOR MEN',
      image: 'https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/647dfa72b51ea3145ebc47cb/webp/hndc-trouser-480x480.png',
    },
    {
      id: 3,
      title: 'SUIT',
      description: 'SUITS FOR MEN',
      image: 'https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/647da9185c62e5426f794785/webp/hndc-blazer-480x480.png',
    },
  ];
  
  const cards = reactive(initialState);
  const newCardTitle = ref('');
  const newCardDescription = ref('');
  const newCardImage = ref('');
  
  const addCard = () => {
    if (newCardTitle.value && newCardDescription.value && newCardImage.value) {
      const newCard = {
        id: cards.length + 1,
        title: newCardTitle.value,
        description: newCardDescription.value,
        image: newCardImage.value,
      };
      cards.push(newCard);
      newCardTitle.value = '';
      newCardDescription.value = '';
      newCardImage.value = '';
    }
  };
  
  const removeCard = (id) => {
    const index = cards.findIndex((card) => card.id === id);
    if (index !== -1) {
      cards.splice(index, 1);
    }
  };
  
  
  </script>
  
  <style scoped>
  .card {
    background-color: #f0f0f0;
    padding: 10px;
    margin-bottom: 10px;
    height: 500px;
    width: 500px;
  }
  
  .cardimg {
    height: 300px;
    width: 300px;
  }
  </style>
  