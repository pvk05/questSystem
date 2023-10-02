<script>
    import QuestForm from "./questForm.svelte";

    import { quests } from "./quests.js";

    import YAML from "/node_modules/yaml";

    import express from "express";
    import axios from "axios";

    //import { https } from "https";

    //import { PasteClient, Publicity, ExpireDate } from "pastebin-api";
    //const client = new PasteClient("2gFTxis_9Wmzk-rir3TIIOmtsH9GVzwy");

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

    async function assemble() {
        console.log(quests);
        let doc = new YAML.Document();
        doc.contents = quests;
        console.log(doc.toString());
        console.log("------");

        

        const app = express();
        const port = 3000;

        app.use(express.json());

        app.post("/createPaste", async (req, res) => {
            try {
                const apiKey = "YOUR_API_KEY"; // Your Pastebin API key
                const pasteContent = req.body.content;

                const requestData = {
                    api_dev_key: apiKey,
                    api_option: "paste",
                    api_paste_code: pasteContent,
                    api_paste_private: "0", // Public paste
                    api_paste_name: "MyPaste.txt", // Optional, name of the paste
                };

                const response = await axios.post(
                    "https://pastebin.com/api/api_post.php",
                    requestData
                );
                res.json({ pasteUrl: response.data });
            } catch (error) {
                console.error("Error:", error.message);
                res.status(500).json({
                    error: "An error occurred while creating the paste.",
                });
            }
        });

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

        //var request = new XMLHttpRequest();

        /*request.open("POST", "https://pastebin.com/api/api_post.php", true);

        request.setRequestHeader(
            "Content-type",
            "application/x-www-form-urlencoded"
        );

        request.send(
            "api_dev_key=YOUR_KEY_HERE&api_option=paste&api_paste_private=0&api_paste_name=myname.js&api_paste_expire_date=10M&api_paste_format=javascript&api_paste_code=random"
        );*/

        //console.log(data)

        /*const url = await client.createPaste({
            code: doc,
            expireDate: ExpireDate.Never,
            format: "yaml",
            name: "something.yml",
            publicity: Publicity.Public,
        });
        console.log(url)*/
    }

    export let data;
    console.log(data.biomes);
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
            <QuestForm n={index} mcData={data} />
            <br />
        {/if}
    {/each}

    <button on:click={assemble}>Submit</button>
</form>
