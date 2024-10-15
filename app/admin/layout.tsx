'use client'
import React from 'react'
import AdminDashboard from '@/src/components/admin/AdminDashboard'
import HomeIcon from '@mui/icons-material/Home'
import ApartmentIcon from '@mui/icons-material/Apartment'
import { Departments } from '@/src/components/admin/departments/Departments'
import { QA } from '@/src/components/admin/QA/QA'
import QuizIcon from '@mui/icons-material/Quiz'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import { Dashboard } from '@/src/components/admin/dashboard/dashboard'

const UsersPage = () => (
  <>
    <h2 className="text-3xl font-bold mb-4">User Management Page</h2>
  </>
)

const SettingsPage = () => (
  <>
    <h2 className="text-3xl font-bold mb-4">Settings Page</h2>
  </>
)

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = {
    dashboard: { component: <Dashboard />, icon: HomeIcon, label: 'Dashboard' },
    users: {
      component: <UsersPage />,
      icon: SupervisedUserCircleIcon,
      label: 'Users',
    },
    departments: {
      component: <Departments />,
      icon: ApartmentIcon,
      label: 'Departments',
    },
    QA: {
      component: <QA />,
      icon: QuizIcon,
      label: 'Q&A',
    },
    settings: {
      component: <SettingsPage />,
      icon: HomeIcon,
      label: 'Settings',
    },
  }

  return <AdminDashboard pages={pages}></AdminDashboard>
}
