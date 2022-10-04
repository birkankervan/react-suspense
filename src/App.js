import { Suspense, lazy } from "react";
import Logo from "./Logo";
import "./styles.css";

const Gallery = lazy(() => import("./Gallery"));

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading</h1>}>
        <Logo />
      </Suspense>
      <Suspense fallback={<h2>Loading</h2>}>
        <Gallery />
      </Suspense>
    </div>
  );
}
