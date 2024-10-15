import Typography from '@mui/material/Typography'
import Link from 'next/link'
import React, { useState, ReactElement } from 'react'

type Page = 'dashboard' | 'users' | 'settings'

interface PageComponent {
  component: ReactElement
  icon: React.ElementType
  label: string
}

interface AdminDashboardProps {
  pages: Record<Page, PageComponent>
}

interface SidebarProps {
  activePage: Page
  setActivePage: (page: Page) => void
  pages: Record<Page, PageComponent>
}

const Sidebar: React.FC<SidebarProps> = ({
  activePage,
  setActivePage,
  pages,
}) => (
  <div className="w-64 bg-gray-800 h-screen sticky top-0 left-0 text-white p-4 flex flex-col justify-between">
    <div>
      <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
      <nav>
        <ul>
          {(Object.entries(pages) as [Page, PageComponent][]).map(
            ([key, { icon: Icon, label }]) => (
              <li key={key} className="mb-4">
                <a
                  href="#"
                  className={`flex items-center ${
                    activePage === key ? 'text-blue-400' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    setActivePage(key)
                  }}
                >
                  <Icon className="mr-2" />
                  {label}
                </a>
              </li>
            ),
          )}
        </ul>
      </nav>
    </div>
    <div className="mt-10">
      <Link href={'/'}>
        <Typography variant={'h4'} className="border-b-2">
          VISI<b className="text-[#f8532e]">ON</b>
        </Typography>
      </Link>
      <div className="flex justify-between items-center mt-1">
        <Typography className="text-sm">College of Jeonju</Typography>
        <div
          className={'h-4 bg-[#fff] w-[2px]'}
          role="separator"
          aria-orientation="vertical"
        />
        <Typography className="text-sm">전주비전대학교</Typography>
      </div>
    </div>
  </div>
)

interface MainContentProps {
  activePage: Page
  pages: Record<Page, PageComponent>
}

const MainContent: React.FC<MainContentProps> = ({ activePage, pages }) => (
  <div className="flex-1 p-8">{pages[activePage].component}</div>
)

const AdminDashboard: React.FC<AdminDashboardProps> = ({ pages }) => {
  const [activePage, setActivePage] = useState<Page>('dashboard')

  return (
    <div className="flex">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        pages={pages}
      />
      <MainContent activePage={activePage} pages={pages} />
    </div>
  )
}

export default AdminDashboard
