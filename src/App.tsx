import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (tg) {
      tg.expand();
      tg.MainButton.setText("Нажми меня");
      tg.MainButton.show();
    } else {
      console.warn("Запустите Mini App внутри Telegram!");
    }
  }, []);

  return <div>Привет, это Mini App в Telegram!</div>;
};

export default App;