<template>   
    <div>
    <h2>Other doctors</h2> 
    <DoctorList :doctor="doctor" />
    <ul>
      <li v-for="otherDoctor in otherDoctors" :key="otherDoctor.id">
        <router-link :to="{ name: 'SingleDoctor', params: { id: otherDoctor.id } }">
          {{ otherDoctor.name }}
        </router-link>
      </li>
    </ul>
  </div>
  </template>
  
  <script>
  export default {
    props: ['doctor'],
  data() {
    return {
      doctors: [],
    }
  },
  computed: {
    otherDoctors() {
      return this.doctors.filter((d) => d.id !== this.doctor.id)
    },
  },
  mounted() {
    fetch('http://localhost:3000/doctors')
      .then((res) => res.json())
      .then((data) => (this.doctors = data.doctors))
      .catch((err) => console.log(err))
  },
  };
  </script>
  