
import LandingPage from "./pages/landingPage";
import Landingpage2 from "./pages/landingpage2";
import { MantineProvider } from "@mantine/core";
import Sidenavbar from "./pages/SideNavbar"




export default function Home() {
  return (
    <>
     <MantineProvider>
      
      <Sidenavbar />
      <LandingPage />
      <Landingpage2 />
      {/* <AudioPage/> */}
    </MantineProvider>
    </>
  );
}
