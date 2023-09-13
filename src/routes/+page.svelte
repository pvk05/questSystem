<script>
    import QuestForm from "./questForm.svelte";

    import { quests } from "./quests.js";

    import YAML from "/node_modules/yaml";

    $: questsAmount = 1;

    function addQuest() {
        if (questsAmount < quests.length) return;
        console.log(quests.length);
        quests[quests.length] = {
            name: "",
            questType: "",
            exploreWhat: "",
            biomes: [""],
            locations: [[0, 0, 0]],
            blocks: [
                {
                    name: "",
                    amount: 0,
                },
            ],
            rewardType: "",
            moneyPlugin: "",
            moneyAmount: 0,
            items: [
                {
                    name: "",
                    amount: 0,
                },
            ],
            expType: "",
            expAmount: "",
        };
    }

    function assemble() {
        console.log(quests);
        let doc = new YAML.Document();
        doc.contents = quests;
        console.log(doc.toString());
        console.log("------")
        console.log(data)
    }

    export let data;
    console.log(data.biomes)
</script>

<h1>Quest System</h1>
<br />

<form>
    <label for="numOfQuests">
        Number of quests:
        <input
            type="number"
            name="numOfQuests"
            id="numOfQuests"
            on:change={addQuest}
            bind:value={questsAmount}
            min="1"
            max="100"
        />
    </label>
    <br />

    {#each Array(questsAmount) as _, index (index)}
        {#if quests[index] != null}
            <QuestForm n={index} mcData={data}/>
            <br />
        {/if}
    {/each}

    <button on:click={assemble}>Submit</button>
</form>
