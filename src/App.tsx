import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn.tsx";
import NotFound from "./pages/NotFound";
import useScrollReveal from "./hooks/use-scroll-reveal.tsx";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/theme-overrides.css";
import "./styles/theme.css";
const queryClient = new QueryClient();

const App = () => {
  // initialize global scroll reveal observer
  useScrollReveal();

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Toaster position="top-right" richColors />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signin" element={<SignIn />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
