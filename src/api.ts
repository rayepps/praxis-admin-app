import api from '@exobase/client-builder'
import * as t from './types'
import config from './config'

const createApi = () => {
  const endpoint = api(config.API_URL as string)
  return {
    events: {
      search: endpoint<
        t.EventSearchOptions,
        {
          events: t.Event[]
          total: number
        }
      >({
        module: 'events',
        function: 'search'
      }),
      findById: endpoint<
        {
          eventId: string
        },
        {
          event: t.Event
        }
      >({
        module: 'events',
        function: 'find-by-id'
      }),
      findBySlug: endpoint<
        {
          slug: string
        },
        {
          event: t.Event
        }
      >({
        module: 'events',
        function: 'find-by-slug'
      }),
      recentlyPublished: endpoint<
        {
          limit: number
        },
        {
          events: t.Event[]
        }
      >({
        module: 'events',
        function: 'recently-published'
      })
    },
    companies: {
      list: endpoint<
        {},
        {
          companies: t.Company[]
        }
      >({
        module: 'companies',
        function: 'list'
      })
    },
    tags: {
      list: endpoint<
        {},
        {
          tags: t.Tag[]
        }
      >({
        module: 'tags',
        function: 'list'
      })
    },
    marketing: {
      addContact: endpoint<
        { email: string; source: 'site.partner.form' | 'site.contact.form' | 'site.subscribe.popup' },
        { contact: t.Contact }
      >({
        module: 'marketing',
        function: 'add-contact'
      }),
      unsubscribe: endpoint<
        { id: string },
        {
          contact: {
            id: string
            email: string
          }
        }
      >({
        module: 'marketing',
        function: 'unsubscribe'
      }),
      getActiveGiveaway: endpoint<
        {},
        {
          giveaway: t.Giveaway | null
        }
      >({
        module: 'marketing',
        function: 'get-active-giveaway'
      })
    },
    trainings: {
      search: endpoint<
        t.TrainingSearchOptions,
        {
          trainings: t.Training[]
          total: number
        }
      >({
        module: 'trainings',
        function: 'search'
      }),
      list: endpoint<
        {
          pageSize?: number
          page?: number
          order?: t.EventSearchOrder
        },
        {
          trainings: t.Training[]
          total: number
        }
      >({
        module: 'trainings',
        function: 'list'
      })
    }
  }
}

export default createApi()
