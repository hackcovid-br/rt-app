import Header from 'components/Header';

import MainLayout from './MainLayout';

export default function Layout ({ children }) {
  return (
    <MainLayout>
      <Header/>
      {children}
    </MainLayout>
  )
}