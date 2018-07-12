<template>
	<div>
		DATA MANAGER 
		<tabsmanager :data="form"></tabsmanager>
	</div>
</template>

<script>

import tabsManager from './TabsManager'
import form from '../assets/form.js'

export default {
  name: 'DataManager',
  components: {
    tabsmanager:tabsManager
  },

  created() {
  	console.log(this.form)
  	console.log(form)
  },

  data () {
    return {
    	form: JSON.parse(JSON.stringify(form))
    }
  }
}
</script>

<style lang="css" scoped>
</style>