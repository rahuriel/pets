import React, { useEffect } from 'react'
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
  const { t } = useTranslation('search')

  // useEffect(() => {
  //   const tagManagerArgs = {
  //     dataLayer: {
  //       page: 'search', //Specific to each page
  //       pagePath: '/search', //Specific to each page
  //     },
  //     dataLayerName: 'PageDataLayer',
  //   }
  //   TagManager.dataLayer(tagManagerArgs)
  // }, [])

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
