<template>
  <h1> Liste aller GPSs</h1>
  <!-- divs with if and for to show the list of docs if the length !=0 -->
  
<FilterNav @filter-doctors="searchDoctors" />
  <div v-if ="filteredDoctors.length"> 
    <div v-for="doctor in filteredDoctors" :key="doctor.id">
      <SingleDoctor :doctor="doctor" @deleteDoctor="handleDoctorDelete" />
    </div> 
  </div>
  <div v-else>
    <p>No doctors found.</p>
  </div>
</template>

<script> 
import SingleDoctor from '../components/singleDoctor.vue'
import FilterNav from '../components/FilterNav.vue'

export default {
  name: 'HomeView',
  components:{SingleDoctor, FilterNav},
  data(){
    return{
      doctors:[],
      searchString:'',     
    }
  },
  mounted(){
    // fetch the data from the database! -> asnincron 
    fetch('  http://localhost:3000/doctors')
      .then(response => response.json())
      .then(data => this.doctors = data)
      .catch(err => console.log(err.message))
  },
  methods:{
    handlleDoctorDelete(id){
      this.doctors = this.doctors.filter((doctor) =>  doctor.id !== id)
    },
    searchDoctors(newSearchString) {
      this.searchString = newSearchString
    },
  },
  computed: {
    filteredDoctors() {
      return this.doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(this.searchString.toLowerCase()) ||
      doctor.id.toString().includes(this.searchString) ||
      (doctor.gpsId && doctor.gpsId.toString().includes(this.searchString))
      )
    },
}
   
}
</script>
