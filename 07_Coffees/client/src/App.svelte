<script>
    import { Router, Link, Route } from "svelte-navigator";
    import Home from "./pages/Home/Home.svelte";
    import Overview from "./pages/CoffeeOverview/CoffeeOverview.svelte";
    import Facts from "./pages/CoffeeFacts/CoffeeFacts.svelte";
    import RegisterCoffeeLover from "./pages/RegisterCoffeeLover/RegisterCoffeeLover.svelte";
    import WhoDatCoffeeLover from "./pages/WhoDatCoffeeLover/WhoDatCoffeeLover.svelte";
</script>

<Router>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/overview">Overview</Link>
        <Link to="/facts">Facts</Link>
        <Link to="/register">Register</Link>
        <Link to="/whodat">WhoDat</Link>
    </nav>
    <div>
        <Route path="/" component={Home} />
        <Route path="/overview"><Overview /></Route>
        <Route path="/facts"><Facts /></Route>
        <Route path="/register"><RegisterCoffeeLover /></Route>
        <Route path="/whodat"><WhoDatCoffeeLover /></Route>
    </div>
</Router>
