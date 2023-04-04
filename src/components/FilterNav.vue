<template>
    <input type="text" v-model="searchString" placeholder="Type to filter" />
    </template>
    
    <script>
    export default{
        data() {
    return {
        searchString: '',
    };
  },
  watch: {
    searchString: function(newSearchString) {
    this.$emit('filter-doctors', newSearchString);
  }
  },
}
    </script>
    
    <style>
    
    </style>