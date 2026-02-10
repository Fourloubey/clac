import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Agence from "./pages/Agence";
import Projets from "./pages/Projets";
import Rafael from "./pages/projets/Rafael";
import Lucien from "./pages/projets/Lucien";
import Leon from "./pages/projets/Leon";
import Hippolyte from "./pages/projets/Hippolyte";
import Ulysse from "./pages/projets/Ulysse";
import Ariette from "./pages/projets/Ariette";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/agence" element={<Agence />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/projets/rafael" element={<Rafael />} />
          <Route path="/projets/lucien" element={<Lucien />} />
          <Route path="/projets/leon" element={<Leon />} />
          <Route path="/projets/hippolyte" element={<Hippolyte />} />
          <Route path="/projets/ulysse" element={<Ulysse />} />
          <Route path="/projets/ariette" element={<Ariette />} />
          <Route path="/contact" element={<Index />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
