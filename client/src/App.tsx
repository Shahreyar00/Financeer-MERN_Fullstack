import { useMemo } from "react";
// import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard";
import Predictions from "./pages/predictions";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { Box } from "@mui/material";


const App = () => {
    // First method

    // const theme = useMemo(() => createTheme(themeSettings), []);

    // const Layout = () => {
    //     return (
    //         <div className="app">
    //             <ThemeProvider theme={theme}>
    //                 <CssBaseline />
    //                 <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
    //                     <Navbar />
    //                     <Outlet />
    //                 </Box>
    //             </ThemeProvider>
    //         </div>
    //     );
    // };

    // const router = createBrowserRouter([
    //     {
    //         path: "/",
    //         element: <Layout />,
    //         children: [
    //             {
    //                 path:"/",
    //                 element:<Dashboard />,
    //             },
    //             {
    //                 path:"/predictions",
    //                 element:<Predictions />,
    //             },
    //             {
    //                 path:"*",
    //                 element: <Navigate to="/" replace />,
    //             }
    //         ]
    //     }
    // ]);

    // return (
    //     <div>
    //         <RouterProvider router={router} />
    //     </div>
    // )


    // Second method

    const theme = useMemo(() => createTheme(themeSettings), []);
    return (
        <div className="app">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/predictions" element={<Predictions />} />
                    </Routes>
                </Box>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App