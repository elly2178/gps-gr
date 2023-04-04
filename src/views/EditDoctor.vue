<template>
    <h1> Edit doctor</h1>
    <!-- same form as the add form-->
    <form @submit.prevent="handleUpdate">
        <label> Anrede: </label>
        <input type="text" v-model="title" placeholder="Herr /Frau / An" color="white"> 
        <label> Fachliche Anrede: </label>
        <input type="text" v-model="medicalTitle" placeholder="Dr.Med. /Dipl. Med." color="white"> 
        <label> Name: </label>
        <input type="text" v-model="name" required placeholder="Müller" color="white"> 
        <label> Vorname: </label>
        <input type="text" v-model="firstname" required placeholder="Johan" color="white"> 
        <label> Adresse: </label>
        <input type="text" v-model="address" required placeholder="Chocolatestrasse" color="white">
        <button> Anpassen </button>
    </form>
     
    </template>
    
    <script> 

    export default{
        // use pros to fetch by id from the json database
        props:['id'],
        data(){
            return{
                title:'',
                medicalTitle: '',
                name:'',
                firstname:'',
                address:'',
                uri: 'http://localhost:3000/doctors/' + this.id
            }
        },
        mounted(){
            //get requst -> no second property needed
            fetch(this.uri)
            .then(res => res.json())
            .then(data => {
                this.title = data.title
                this.medicalTitle = data.medicalTitle
                this.name = data.name
                this.firstname = data.firstname
                this.address = data.address
            })
        },
        methods:{
            handleUpdate(){
                fetch(this.uri, {
                    method:'PATCH', headers:{'Content-Type' : 'application/json'},
                    body: JSON.stringify(
                        { title: this.title,
                          medicalTitle: this.medicalTitle,
                          name: this.name,
                          firstname: this.firstname, 
                          address:this.address    
                        })
                }).then(() => {
                    this.$router.push('/')
                }).catch(err => console.log(err))
            }
        }
    }
    </script>
    
    <style>
 
    </style>