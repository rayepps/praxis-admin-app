import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className="py-2 pl-4 pr-2">
      <Item to="courses/trainings">Home</Item>
      <Group name="Courses">
        <Item to="courses/trainings">Trainings</Item>
        <Item to="courses/events">Events</Item>
        <Item to="courses/calendar">Calendar</Item>
      </Group>
    </div>
  )
}

const Item = ({ children, to }: { to: string; children: React.ReactNode }) => {
  return (
    <div className="mb-1">
      <Link to={to} className="w-full py-1 px-2 rounded inline-block hover:bg-slate-100 text-slate-700">
        {children}
      </Link>
    </div>
  )
}

const Group = ({ name, children }: { name: string; children: React.ReactNode }) => {
  return (
    <div>
      <div className="mb-2">
        <span className="uppercase text-xs font-bold text-slate-300">{name}</span>
      </div>
      <div>{children}</div>
    </div>
  )
}
