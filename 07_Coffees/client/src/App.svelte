<script>
	import { Router, Link, Route } from "svelte-navigator";
  import Home from "./pages/Home/Home.svelte";
  import Overview from "./pages/CoffeeOverview/CoffeeOverview.svelte";
  import Facts from "./pages/CoffeeFacts/CoffeeFacts.svelte";
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/overview">Overview</Link>
    <Link to="/facts">Facts</Link>
  </nav>
  <div>
    <Route path="/" component={Home}></Route>
    <Route path="/overview"><Overview /></Route>
    <Route path="/facts"><Facts /></Route>
  </div>
</Router>