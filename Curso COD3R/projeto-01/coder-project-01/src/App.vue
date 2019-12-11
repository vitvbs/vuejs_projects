<template>
	<div id="app">
		<div class="card">
			<div class="characters">
				<div class="player">
					<img class="sprite" src="./assets/hero-idle.gif" alt="">
					<h2 class="name">Player</h2>
					<div class="health-container">
						<div class="health-bar">
							<span class="life-percentage">100 HP</span>
						</div>
					</div>
				</div>
				<div class="monster">
					<img class="sprite" src="./assets/lich-idle.gif" alt="">
					<h2 class="name">Lich</h2>
					<div class="health-container">
						<div class="health-bar">
							<span class="life-percentage">100 HP</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="card">
			<div class="controls">
				<button class="action attack">Attack</button>
				<button class="action magic">Magic</button>
				<button class="action heal">Heal</button>
				<button class="action surrender">Surrender</button>
			</div>
		</div>
		<div class="card">
			<div class="log">
				<div class="log-item monster">
					<h3>Lich dealt 10 DMG</h3>
				</div>
				<div class="log-item player">
					<h3>You dealt 5 DMG</h3>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "app",
		components: {}
	};
</script>

<style src="./app.scss" scoped lang="scss"></style>