
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing-page/landing-page';

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import SignUpPage from './pages/signup/signup';
import SignInPage from './pages/signin/signin';
import ProfilePage from './pages/profile/profile';
import SumPage from './pages/summrize/summrize';
import PlatPage from './pages/plagiat/plagiat';
import SettingsProfile from './pages/settings-page/settings';
import AiWriter from './pages/aiwriter-page/aiwriter';
import PrivateRoutes from './routes/private.route';

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>  
      
        <Routes>
          <Route element={<LandingPage/>} path="/"/>
          <Route element={<SignUpPage/>} path='/login' />
          <Route element={<SignInPage/>} path='/register' />
          <Route element={
          <PrivateRoutes>
            <ProfilePage/>   
          </PrivateRoutes>
         } path='/rewriter' />
          <Route element={
        <PrivateRoutes>
        <SumPage/>   
      </PrivateRoutes>
        } path='/summarizer' />
          <Route element={
         <PrivateRoutes>
         <PlatPage/>  
       </PrivateRoutes>
        } path='/plagiarism' />
          <Route element={
         <PrivateRoutes>
         <AiWriter/>   
       </PrivateRoutes>
        } path='/aiWriter' />
          <Route element={
         <PrivateRoutes>
         <SettingsProfile/> 
       </PrivateRoutes>
        } path='/settings' />
        </Routes>

      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
