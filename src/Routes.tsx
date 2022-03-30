import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './scenes/dashboard/index'
import Home from './scenes/dashboard/Home'
import Events from './scenes/dashboard/courses/Events'
import Trainings from './scenes/dashboard/courses/Trainings'
import Schedule from './scenes/dashboard/courses/Schedule'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="courses">
            <Route path="events" element={<Events />} />
            <Route path="trainings" element={<Trainings />} />
            <Route path="schedule" element={<Schedule />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
