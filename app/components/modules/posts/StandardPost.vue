<template>
	<Page class="page">
		<ActionBar title="Noticias">
			<NavigationButton text="Atras" android.systemIcon="ic_menu_back" @tap="goBack" />
		</ActionBar>
		<ScrollView ref="scrollLayout" class="scrollLayout">
			<!-- <label :text="postId"></label> -->
			<GridLayout rows="auto auto" v-if="postExist">
				<WrapLayout row="0" backgroundColor="#fff">
					<Label :text="post.header" class="category" />
					<label :text="post.title" class="titular-into" textWrap="true" />
					<Label text="2017/11/06" class="date" />
					<AbsoluteLayout backgroundColor="#fff">
						<Image :src="post.principalImage.url" top="0" class="img-ppal" />
					</AbsoluteLayout>
					<StackLayout orientation="horizontal" class="post-foot">
						<Image src="~/assets/icons/camara.png" width="15" class="" verticalAlignment="center" />
						<Label text="Bloomberg" class="text-bloom" />
					</StackLayout>

					<Label :text="post.lead" class="text-lead" textWrap="true" />

				</WrapLayout>


				<WebView #postWebView row="1" :src="post.content" @loadFinished="onloadFinished"
					@loadStarted="onLoadStarted" minHeight="1000" />
			</GridLayout>

		</ScrollView>

	</Page>

</template>

<script>

export default {

	data() {
		return {
			post: null
		}
	},
	props: ['postId'],
	computed: {
		postExist() {
			return this.post != null;
		},
	},
	methods: {
		onloadFinished(args) {


			setTimeout(() => {

				if (args.object.nativeView) {
					args.object.height = args.object.nativeView.scrollView.contentSize.height;
				}
			}, 300);


			// args.object.height="auto";


		},
		onLoadStarted(event) {

			console.log('navigation detected with destination :', event.url)
			const id = event.url.split('/');
			if (id && id[0] == "lrapp:") {
				this.$store.dispatch("lrgql/loadStandardPost", id[4]).then(() => {
					this.post = this.$store.getters["lrgql/getStandardPost"];
					this.$refs.scrollLayout.scrollToVerticalOffset(0, true);
				})
			}
		},

	},
	beforeMount() {
		this.post = null;
		if (this.postId) {
			this.$store.dispatch("lrgql/loadStandardPost", this.postId).then(() => {
				this.post = this.$store.getters["lrgql/getStandardPost"]
			})
		}
	},

}
</script>
<style scoped>
.category {
	width: 100%;
	text-align: center;
	margin-top: 17px;
	font-size: 10px;
	color: #808080;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
}

.titular-into {
	width: 80%;
	margin-left: 10%;
	text-align: center;
	font-size: 19px;
	color: #000;
	font-family: 'Bitter', serif;
}

.date {
	width: 100%;
	text-align: center;
	margin-top: 16px;
	font-size: 12px;
	color: #808080;
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	line-height: 16px;
	margin-bottom: 36px;
}

.post-foot {
	background-color: #F5F4F6;
	margin-left: 32px;
	margin-right: 32px;
	height: 86px;
	padding: 23px 30px;
	width: 95%;
	margin-top: -43px;
	z-index: 99;
}

.text-bloom {
	font: normal normal 600 10px/13px Montserrat;
	color: #808080;
	border-color: #C2C2C2;
	border-width: 0 0 0 1;
	padding-left: 22px;
	margin-left: 22px;
}

.text-lead {
	width: 100%;

	text-align: left;
	font-size: 14px;
	color: #000;
	font-family: 'Bitter', serif;
	border-color: #C2C2C2;
	border-width: 1 0 1 0;
	padding-left: 22px;
	margin-left: 22px;
	padding-right: 22px;
	margin-right: 22px;
}
</style>
