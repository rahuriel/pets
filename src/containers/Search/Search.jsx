import React from 'react'
import { useLocation } from 'react-router'
import { observer } from 'mobx-react'
import { useTranslation } from 'react-i18next'
import TagManager from 'react-gtm-module'
import LayoutContainer from 'components/commons/LayoutContainer'
import SEO from 'components/SEO'

import InitialFilters from 'components/InitialFilters/InitialFilters'
import LayoutTrantitions from 'components/commons/LayoutTrantitions'
import styles from './search.scss'

const Search = () => {
  const locations = useLocation()
  const { t } = useTranslation('search')

  const TagManagerArgs = {
    gtmId: process.env.REACT_APP_GA_TRACKING_ID,
  }

  TagManager.initialize(TagManagerArgs)
  TagManagerArgs.dataLayer({
    dataLayer: {
      event: 'pageview',
      page: {
        page_title: t('title'),
        page_location: locations.pathname + locations.search,
        page_path: locations.pathname + locations.search,
      },
    },
  })

  return (
    <LayoutContainer>
      <SEO pageTitle={t('title')} />
      <div className={styles.title}>{t('title')}</div>
      <LayoutTrantitions>
        <InitialFilters />
      </LayoutTrantitions>
    </LayoutContainer>
  )
}

export default observer(Search)
