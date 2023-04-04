<template>
    <div class="doctor">
      <div class="actions">
        <!-- will contain all icons--> 
        <h3 @click="showAddress = !showAddress">{{ doctor.medicalTitle + ' ' + doctor.name }}</h3>
        <div class="icons">
          <router-link :to="{ name : 'EditDoctor', params:{ id: doctor.id }}">
            <span class="material-icons">edit</span>
          </router-link>
          <span @click="deleteDoctor" class="material-icons">delete</span>
        </div>
      </div>
      <div v-if="showAddress" class="adress">
        <p>GPS ID: {{ doctor.gpsId}} </p>
        <p>Adresse: {{ doctor.address }} </p>
        
      </div>
      <DoctorList :doctor="doctor" />
    </div>
  </template>
  

<script>
import DoctorList from './doctorList.vue'

export default{
    props: ['doctor'],
    data(){
        return {
            showAddress: false,
            // slashes are important!
            uri:'http://localhost:3000/doctors/' + this.doctor.id,
        }
    },
    methods:{
        deleteDoctor(){
            //makes a delete request on the json server depending on the id
            fetch(this.uri, { method: 'DELETE'})
            .then(() => this.$emit('deleteDoctor', this.doctor.id))
            .catch( err => console.log(err))
        }
    }
}
</script>

<style>
.doctor{
    margin: 20px auto;
    background-color: #3e3f3f;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
    border-left: 4px solid #294242;
}
h3{
    cursor: pointer;
}
.actions{
    display: flex;
    justify-content: space-between;
    align-items: center;
    }

.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #5c9a9a;
  cursor: pointer;
}
.material-icons:hover{
    color: #3c6262;
}

</style>