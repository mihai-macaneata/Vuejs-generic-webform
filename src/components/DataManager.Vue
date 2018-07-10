<template>
	<div>
		DATA MANAGER 
		<tabsmanager :data="dummy"></tabsmanager>
	</div>
</template>

<script>

import tabsManager from './TabsManager'


export default {

  name: 'DataManager',

  components: {
    tabsmanager:tabsManager
  },

  data () {
    return {
    	dummy: 'dummy data'
    }
  }
}
</script>

<style lang="css" scoped>
</style>