<template>
    <div>
        <button @click="$router.go(-1)">Indietro</button>


        <legend>
            <h1>Login</h1>
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
                <button type="submit">Login</button>
            </form>
        </legend>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>