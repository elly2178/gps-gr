<template>
    <!-- use .prevent to force the website not to refresh-->
    <form @submit.prevent="handleSubmit">
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
        <button> Add Doctor</button>
    </form>
    </template>
    
    <script>
    export default{
        data(){
          return{
            title:'',
            medicalTitle:'',
            name:'',
            firstname:'',
            address:''
          } 
        },
        methods:{
            handleSubmit(){
                // this will send the data from the form to the json database as a json object
                let doctor ={
                    title: this.title,
                    medicalTitle:this.medicalTitle,
                    name: this.name,
                    firstname: this.firstname,
                    address: this.address

                }
                fetch(' http://localhost:3000/doctors', {
                    method:'POST',
                    headers:{'Content-Type' : 'application/json'},
                    body: JSON.stringify(doctor)
                }).then(() => {
                    if (confirm("Erfasst! Möchten Sie ein weiteres Formular ausfüllen?")) {
                // If the user clicks OK, clear the form fields
                //REMINDER: RENAME THE BUTTONS
                this.title='',
                this.medicalTitle='',
                this.name='',
                this.firstname='',
                this.address=''
            } else {
                // If the user clicks Cancel, redirect to another page
                window.location.href = "/";
            }
        })
                
            }
        }
        
    }
    </script>
    
    <style>
    label{
        display: block;
        font-size: 18px;
        font-weight: normal;
        letter-spacing: 1px;
        margin: 20px 0 10px 0;
    }
   input{
    color: #abd2f8;
    background: none;
    padding:10px;
    border: 0;
    border-bottom:1px solid #3c6262;
    width: 100%;
    box-sizing: border-box;
   }
   form button{
    display: block;
    margin:20px auto 0;
    background:#3c6262;
    color: #abd2f8;
    padding: 10px;
    border-radius: 6px;
    font-size: 18px;

}
    </style>