<script>
    export let n;
    export let mcData;

    let biomes = mcData.biomes

    import { quests } from "./quests.js";

    import Explore from "./explore.svelte"
    import Mine from "./mine.svelte"
</script>

<label for="questName{n}">
    Name:
    <input
        type="text"
        name="questName{n}"
        id="questName{n}"
        bind:value={quests[n].name}
    />
</label>
<br />

<label for="questDescription{n}">
    Description:
    <input
        type="text"
        name="questDescription{n}"
        id="questDescription{n}"
        bind:value={quests[n].description}
    />
</label>
<br />

<label for="questType{n}">
    Quest Type:
    <select name="questType{n}" id="questType{n}" bind:value={quests[n].questType}>
        <option value="default" selected hidden>Select a type</option>
        <option value="explore">Explore</option>
        <option value="mine">Mine</option>
    </select>
</label>
<br>

<!---------------------------->
<!-- -- -- QuestTypes -- -- -->
<!---------------------------->

<!-- Explore -->
{#if quests[n].questType == "explore"}
<Explore n={n} mcData={mcData}/>
<!-- Mine -->
{:else if quests[n].questType == "mine"}
<Mine n={n} mcData={mcData}/>
{/if}

<!----------------------------->
<!-- -- -- - Reward - -- -- -->
<!----------------------------->

<label for="rewardAmount{n}">
    Reward amount:
    <input
        type="number"
        name="rewardAmount{n}"
        id="rewardAmount{n}"
        bind:value={quests[n].moneyAmount}
    />
</label>
