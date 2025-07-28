import css from "./App.module.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Benefits from "../Benefits/Benefits";

export default function App() {
  return (
    <div className={css.container}>
      <Header />
      <Hero />
      <Benefits />
    </div>
  );
}
