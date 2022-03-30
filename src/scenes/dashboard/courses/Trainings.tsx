import useFetch from '../../../hooks/useFetch'
import api from '../../../api'
import { useEffect } from 'react'

export default function Trainings() {
  const listTrainingsRequest = useFetch(api.trainings.list)
  useEffect(() => {
    listTrainingsRequest.fetch({})
  }, [])
  return (
    <div className="flex flex-row justify-center">
      <div className="grow max-w-2xl">
        <div className="mb-4">
          <h2 className="font-bold text-4xl">Trainings</h2>
        </div>
        <div>
          {listTrainingsRequest.data?.trainings.map(training => (
            <div key={training.id} className="p-4 bg-slate-50 rounded-xl mb-4 flex flex-row">
              <div className="grow">
                <div className="mb-2">
                  <span className="text-xl font-bold text-slate-800">{training.name}</span>
                </div>
                <div className="flex flex-row items-center">
                  <img src={training.company.thumbnail.url} className="h-9 w-auto mr-2 rounded" />
                  <span className="text-slate-400">{training.company.name}</span>
                </div>
              </div>
              <div className="">
                <div className="flex justify-end pb-2">
                  <button>Add Event</button>
                  <button>Events</button>
                </div>
                <div className="h-9 flex flex-row justify-end">
                  {training.gallery.map(img => (
                    <img key={img.url} src={img.url} className="h-9 w-auto ml-1 rounded" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
