<template>
  <div class="components">
    <div class="component" v-for="(component, index) in components" :key="index">
      <div class="header">{{ component.header }}</div>
      <ul class="options" >
        <li class="option" v-for="(option, index) in component.options" :key="index">
          {{ option }}
        </li>
      </ul>
      <div class="text">{{ component.text }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'CompnentsList',
  data () {
    return {
			components: []
    }
	},
	computed: {

	},
	mounted() {
    this.getComponents()
	},
	methods: {
		getComponents() {
			axios
				.get('http://localhost:3000/components')
				.then(response => (this.components = response.data));
		}
	}
}
</script>

<style scoped>
.components{
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
}
.component{
  display: inline-block;
  width: 250px;
  margin: 15px;
  vertical-align: top;
  text-align: left;
  border: solid 1px #000;
  box-sizing: border-box;
  padding: 10px;
}
.header{
  font-size: 18px;
  padding-bottom: 10px;
}
.options{
  font-size: 15px;
}
.option{
margin-bottom: 5px;
}
.text{
  font-size: 14px;
}
</style>
