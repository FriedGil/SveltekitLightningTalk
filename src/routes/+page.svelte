<script>
    let input = "query here";
    let output = "";
    let loading = false;

    async function getAnswer() {
        loading = true;
        const response = await fetch('/api', {
            method: 'POST',
            body: JSON.stringify({input}),
        });
        output = await response.json();
        loading = false;
    }
</script>

<h1>Welcome to the Future</h1>
<p>The AI Assistant of your dreams.</p>

<input bind:value={input}/>
<button on:click={getAnswer}/>

{#if loading}
    <p>
        loading
    </p>
{:else }
    {output}
{/if}