<script>
	export let n;
	export let mcData;

	let biomes = mcData.biomes;

	import { quests } from "./quests.js";

	$: numOfLocations = 1;

	function addLocation() {
		if (numOfLocations < quests[n].locations.length) return;
		quests[n].locations[quests[n].locations.length] = [0,0,0]
	}
</script>

<label for="exploreType{n}">
	What to explore:
	<select name="exploreType{n}" id="exploreType{n}" bind:value={quests[n].exploreWhat}>
		<option value="default" selected hidden>Select</option>
		<option value="biomes">Biomes</option>
		<option value="location">Location</option>
	</select>
</label>
<br />

<!-- Biomes -->
{#if quests[n].exploreWhat == "biomes"}
	<label for="selectBiomes{n}">
		<select name="selectBiomes{n}" id="selectBiomes{n}" multiple>
			<option value="default" selected hidden>Select</option>
			{#each biomes as biome}
				<option value={biome.name}>{biome.displayName}</option>
			{/each}
		</select>
	</label>
	<div id="chosenBiomes" />
	<!-- Location -->
{:else if quests[n].exploreWhat == "location"}
	<label for="numOfLocations">
		Num of locations:
		<input type="number" name="numOfLocations" id="numOfLocations" on:change={addLocation} bind:value={numOfLocations} min="1" max="5"/>
	</label>
	<br />
	{#each Array(numOfLocations) as _, index (index)}
		{#if quests[n].locations[index] != null}
			<label for="x-coord{n}">x:<input type="number" name="x-coord{n}" id="x-coord{n}" bind:value={quests[n].locations[index][0]}/></label>
			<label for="y-coord{n}">y:<input type="number" name="y-coord{n}" id="y-coord{n}" bind:value={quests[n].locations[index][1]}/></label>
			<label for="z-coord{n}">z:<input type="number" name="z-coord{n}" id="z-coord{n}" bind:value={quests[n].locations[index][2]}/></label>	
		{/if}
	{/each}
{/if}
<br />
