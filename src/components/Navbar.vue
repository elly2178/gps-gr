<template>
    <nav class="main-nav"> 
        <router-link :to="{name:'home'}"> Doctors</router-link>  
        <router-link :to="{name:'AddDoctor'}"> Add doctor</router-link>
        <router-link :to="{name:'UploadData'}"> Upload Data</router-link>
    </nav>
     
    </template>
    
    <script>
    export default{
        
    }
    </script>
    
    <style>
    .main-nav{
        text-align: center;
        margin: 40px auto;
    }
    
    .main-nav a {      
        display: inline-block;
        text-decoration:none;
        margin:0 15px;
        color: #abd2f8;
        font-size: 18px;
    }

    a.router-link-active{
        border-bottom: 4px solid #294242;
        padding-bottom: 4px;
    }
    a:visited{
        color: #abd2f8;
    }
    

   
    </style>