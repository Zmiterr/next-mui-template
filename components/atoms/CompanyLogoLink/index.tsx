import React from 'react'
import { APP_LINKS } from 'types/appLinks'

import Icon from 'components/atoms/Icon'
import { CompanyLogo } from 'components/atoms/Icons'
import Link from 'components/atoms/Link'

const CompanyLogoLink = () => {
  return (
    <Link href={APP_LINKS.MAIN}>
      <Icon src={CompanyLogo} viewBox="0 0 48 48" sx={{ width: 48, height: 48 }} />
    </Link>
  )
}

export default CompanyLogoLink
