<template>
	<Page class="page">
	  	<ActionBar backgroundColor="#fff" flat="true">
			<ActionItem ios.position="left">
				<StackLayout orientation="horizontal">
					<Label class="fas icon-menu" text.decode="&#xf0c9;" @tap="onDrawerButtonTap"/>       
					<Image src="~/assets/logo.png" width="39"
						verticalAlignment="center" />  
				</StackLayout>
			</ActionItem>
			<ActionItem ios.position="right">
				<StackLayout orientation="horizontal">      
					<Image src="~/assets/icons/en-vivo.png" width="33"
						verticalAlignment="center" />  
					<Image src="~/assets/icons/lupa.png" width="15" class="header-space"
						verticalAlignment="center" />
					<Image src="~/assets/icons/usuario.png" width="15" class="header-space"
						verticalAlignment="center" />
				</StackLayout>
			</ActionItem>
		</ActionBar>
		

		<MainBottomMenu></MainBottomMenu>	   
	</Page>
</template>


<script>
  import * as utils from "~/shared/utils";
  import { SelectedPageService } from "~/shared/selected-page-service";

  import MainBottomMenu from "./MainBottomMenu.vue";

  export default {
	components:{
	  MainBottomMenu,
	},
	mounted() {
	  SelectedPageService.getInstance().updateSelectedPage("Home");
	},
	computed: {
	  message() {
		return "<!-- Page content goes here wefwewfew-->";
	  }
	},
	methods: {
	  onDrawerButtonTap() {
		utils.showDrawer();
	  }
	}
  };
</script>

<style scoped lang="scss">
	// Start custom common variables
	@import '@nativescript/theme/scss/variables/blue';
	// End custom common variables

	// Custom styles
</style>
