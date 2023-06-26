<!-- 
<template>
    <div class="container mb-3" style="padding: 0">
      <h1 style="color: black; margin-top: 20px" class=" blogs text-center">Blogs</h1>
      <div class="row">
        <div v-for="notes in notesindex" :key="notes.id" class="col-md-6">
          <a :href="`https://www.acecraft.in/blog/styling-accessories-that-complement-your-formal-wear`" class="card-link">
            <div class="cards">
              <div class="card-body text-center">
                {{ notes.title }}
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    data() {
      return {
        notesindex: [],
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        fetch('  http://localhost:3000/Blog')
          .then((response) => response.json())
          .then((data) => {
            this.notesindex = data;
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .cards {
  
  background-color: white;
  margin-left: 5px;
  padding-left: 23px;
  width: 565px;
  color: white;
  margin-top: 50px;
  height: 300px;
  display: inline-flex;
  box-shadow: 1px 2px 4px rgb(165, 162, 162);
  
  
  }
  
  .card-body {
  background-color: black;
  width: 555px;
  height: 260px;
  margin-top: -15px;
  margin-left: -20px;
  font-size: 14px;
  padding-top: 110px;
  
  
  }
  
  .blogs {
  color: black;
  font-weight: 700;
  font-family: logo;
  }
  
  
  </style> -->

  <template>
    <div>
      <div>
        <input v-model="newCardTitle" placeholder="Enter title" />
        <input v-model="newCardDescription" placeholder="Enter description" />
        <input v-model="newCardImage" placeholder="Enter image URL" />
        <button @click="addCard">Add Card</button>
      </div>
      <br />
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
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        cards: [],
        newCardTitle: '',
        newCardDescription: '',
        newCardImage: '',
      };
    },
    mounted() {
      this.fetchCards();
    },
    methods: {
      fetchCards() {
        axios
          .get('http://localhost:3000/cards')
          .then((response) => {
            this.cards = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      addCard() {
        if (this.newCardTitle && this.newCardDescription && this.newCardImage) {
          const newCard = {
            title: this.newCardTitle,
            description: this.newCardDescription,
            image: this.newCardImage,
          };
  
          axios
            .post('http://localhost:3000/cards', newCard)
            .then((response) => {
              this.cards.push(response.data);
              this.newCardTitle = '';
              this.newCardDescription = '';
              this.newCardImage = '';
            })
            .catch((error) => {
              console.log(error);
            });
        }
      },
      removeCard(id) {
        axios
          .delete(`http://localhost:3000/cards/${id}`)
          .then(() => {
            this.cards = this.cards.filter((card) => card.id !== id);
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
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
  
  