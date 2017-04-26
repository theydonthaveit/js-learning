<template>
    <div>
        <h1>Trade or View Portfolio of Stocks</h1>
        <h6>Save or Load your Portfolio</h6>
        <h6>Click to 'End Day'</h6>
        <hr>
        <p>Your Funds: {{ funds | currency }}</p>
    </div>
</template>

<script>
    export default
    {
        computed:
        {
            funds()
            {
                return this.$store.getters.funds
            }
        }
    }
</script>