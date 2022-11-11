<template>
	<Page class="page">
		<ActionBar title="Noticias">
			<NavigationButton text="Atras" android.systemIcon="ic_menu_back" @tap="goBack" />
		</ActionBar>
		<ScrollView ref="scrollLayout" class="scrollLayout">
			<!-- <label :text="postId"></label> -->
			<GridLayout rows="auto auto auto auto auto auto" v-if="postExist">

					<Label row="0" :text="post.header" class="category" />
					<label row="1" :text="post.title" class="titular-into" textWrap="true" />
					<Label row="2" text="2017/11/06" class="date" />

						<WebView row="3" :src="youtubeCode" minHeight="250" @loadFinished="onloadFinished"></WebView>

					<!-- <StackLayout orientation="horizontal" class="post-foot">
						<Image src="~/assets/icons/camara.png" width="15" class="" verticalAlignment="center" />
						<Label text="Bloomberg" class="text-bloom" />
					</StackLayout> -->

					<Label row="4" :text="post.lead" class="text-lead" textWrap="true" />





				<WebView #postWebView row="5" :src="post.content" @loadFinished="onloadFinished"
					@loadStarted="onLoadStarted" minHeight="500" />
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
		youtubeCode(){
			return `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${this.post.externalVideo}" frameborder="0" allowfullscreen></iframe>`
		}
	},
	methods: {
		onloadFinished(args) {


			setTimeout(() => {

				if (args.object.nativeView) {
					args.object.height = args.object.nativeView.scrollView.contentSize.height+50;
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
		this.post=null;
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

.ytWebView{
	width: 100%;
	height: 100%;
}
</style>
