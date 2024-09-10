import { Payment } from "@/app/Payment";
import { ThemeProvider } from "@/context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider cardType="none">
      <Payment />
    </ThemeProvider>
  );
}
