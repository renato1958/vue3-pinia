<template>
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
            <div class="container-lg">
                <a href="/" class="navbar-brand">Vue3</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title">Menu</h5>
                        <button class="btn-close btn-close-white" type="button" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item" data-bs-dismiss="offcanvas">
                                <router-link class="nav-link" to="/">Home page</router-link>
                            </li>
                            <li class="nav-item" data-bs-dismiss="offcanvas">
                                <router-link class="nav-link" to="/about">About page</router-link>                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>


    <router-view />
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    .router-link-active.router-link-exact-active {
        color: white;
    }
</style>
