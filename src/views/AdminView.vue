<template>
    <AdminTable />
      </template>
      
      <script>
      // @ is an alias to /src
      import AdminTable from '@/components/AdminTable.vue'
      
      export default {
        name: 'HomeView',
        components: {
          AdminTable
        }
      }
      </script>