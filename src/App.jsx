import styles from "./App.module.css";
import {MyRoutes} from "./routers/routes"

function App() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>🎬 Movies</h1>
      </header>
      <MyRoutes/>
    </div>
  );
}

export default App;
