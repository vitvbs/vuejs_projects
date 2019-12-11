<template>
	<div id="app">
		<div class="card">
			<div class="characters">
				<div class="player">
					<img class="sprite" src="./assets/hero-idle.gif" alt="">
					<h2 class="name">Player</h2>
					<div class="health-container">
						<div class="health-bar" :style="{width: playerHealth + '%'}">
							<span class="life-percentage">{{playerHealth}} HP</span>
						</div>
					</div>
				</div>
				<div class="monster">
					<img class="sprite" src="./assets/lich-idle.gif" alt="">
					<h2 class="name">Lich</h2>
					<div class="health-container">
						<div class="health-bar" :style="{width: monsterHealth + '%'}">
							<span class="life-percentage">{{monsterHealth}} HP</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="card" v-if="finished == true">
			<div class="result">
				<h1 class="message">You {{finishedMessage}}</h1>
			</div>
		</div>
		<div class="card">
			<div class="controls">
				<div class="start" v-if="start == false">
					<button class="start-button" @click="startGame">Start Game</button>
				</div>
				<div class="actions" v-if="start == true">
					<button class="action attack" @click="attack()">Attack</button>
					<button class="action magic">Magic</button>
					<button class="action heal">Heal</button>
					<button class="action surrender">Surrender</button>
				</div>
			</div>
		</div>
		<div class="card" v-if="actionLog.length > 0">
			<div class="log">
				<div class="log-item" :key="item" v-for="item in actionLog" :class="item.actor == 'Player' ? 'player' : 'monster'">
					<h3>{{item.actor}} dealt {{item.damage}} DMG </h3>
				</div>
			</div>
		</div>
	</div>
</template>

<style src="./app.scss" scoped lang="scss"></style>
<script src="./app.js"></script>
