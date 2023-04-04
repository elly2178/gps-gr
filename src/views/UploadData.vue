<template>
    <div id="FileUpload"> 
    <h1> CSV Upload</h1>
        <input type="file" ref="myFile" @change="changeToJson($event)"/>

     </div>
    </template>
    
    <script>
    export default{ 
    methods:{
        changeToJson(event){

     }
  },
    }
    </script>