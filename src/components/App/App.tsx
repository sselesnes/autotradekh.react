import css from "./App.module.css"; //global container
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Benefits from "../Benefits/Benefits";
import ContactModalBtn from "../ContactModalBtn/ContactModalBtn";

export default function App() {
  return (
    <div className={css.container}>
      <Header />
      <Hero />
      <Benefits />
      <ContactModalBtn />
      {/* <Contact /> */}
    </div>
  );
}
